import React,{useId} from 'react'

const Input =React.forwardRef(function Input ({
    label,
    type='text',
    className='',
    ...props
},ref)

{
   const id = useId()

    return <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
        <input
        type={type}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-yellow-50 duration-200 border border-black w-full ${className} `}
        ref={ref}
        {...props}
        />

    </div>
})
export default Input