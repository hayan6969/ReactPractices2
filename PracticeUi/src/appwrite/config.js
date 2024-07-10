import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket; //storage

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ Title, slug, Content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          Title,
          Content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log("Service :: createPost :: error :: ", error);
    }
  }

  async updatePost(slug, { Title, Content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          Title,
          Content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Service :: updatePost :: error :: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Service :: deletePost :: error :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Service :: getPost :: error :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries

        )
    } catch (error) {
        console.log("Service :: getPosts :: error :: ", error);
        return false
    }
  }

  //file upload and delete service

  async uploadFile(file){
    try {
       return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
       )
    } catch (error) {
        console.log("Service :: uploadFile :: error :: ", error);
        return false
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Service :: deleteFile :: error :: ", error);
        return false
    }
  }

  async getFilePreview(fileId){
    try {
       return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Service :: getFilePreview :: error :: ", error);
    }
  }

  getImagePreview(fileId){
    return `https://cloud.appwrite.io/v1/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/preview?project=${conf.appwriteProjectId}`
  }
}

const service = new Service();
export default service;