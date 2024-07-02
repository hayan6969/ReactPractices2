
const useLocalStorage=(task,key,value)=>{

if(task==='set'){
    
    localStorage
    .setItem(key,value)
    console.log('Data stored')
    return


}
else if(task==='get'){
    const data=localStorage.getItem(key)
    console.log('Data retrieved')
    return data

}
else if(task==='remove'){
    localStorage.removeItem(key)
    console.log('Data removed')
    return

}
else if(task==='clear'){
    localStorage.clear()
    console.log('Data cleared')
    return

}
else{
    console.log('Invalid task')
}


}

export default useLocalStorage