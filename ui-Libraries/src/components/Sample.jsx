import React from 'react'

function Sample({label="Enter"},ref) {
  return (
   <div className='flex flex-col'>
    <label htmlFor="in">{label}</label>
    <input onChange={(e)=>{
    setData(e.target.value)
    }} ref={ref} id='in' type="text" className='p-2 border-2 border-black font-poppins' />
   </div>
  )
}

export default React.forwardRef(Sample) 