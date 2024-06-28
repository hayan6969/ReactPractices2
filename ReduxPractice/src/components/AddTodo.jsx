import React from 'react'
import { useState,useRef,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo,updateTodo} from '../store/features/todo/todoSlice'


function AddTodo({editEnabled=false, setEditEnabled=false,editId=1,editText='demo'}) {
const inputRef=useRef(null)
const [input, setInput] = useState('')
const [updateText, setUpdateText] = useState(editText)
const dispatch = useDispatch()

useEffect(()=>{
  if(editEnabled){
    setUpdateText(editText)
  }
  else{
    setInput('')
  }

},[editEnabled])
useEffect(()=>{
  if(editEnabled){
    setInput(editText)
    inputRef.current.focus()
  }
},[editEnabled])
const editTodoHandler = (e) => {
  e.preventDefault()
  dispatch(
    updateTodo({id:editId,text:updateText})
  )
  setEditEnabled((prev)=>!prev)
}
const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch( 
addTodo(input) // dispatching the action

    )
    setInput('') // clearing the input field
}
if(editEnabled){
  return (
    <form onSubmit={editTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      ref={inputRef}
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={updateText}
      onChange={(e) => setUpdateText(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Update Todo
    </button>
  </form>
  )
}
 else return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        ref={inputRef}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo