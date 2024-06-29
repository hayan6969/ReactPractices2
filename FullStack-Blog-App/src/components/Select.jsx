import React,{useId} from 'react'

const Select = React.forwardRef(function Select(
    {
        options=[],
        label,
        className="",
        ...props
    },ref
){
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
        <select
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-yellow-50 duration-200 border border-black w-full ${className} `}
        ref={ref}
        >
            {
                options?.map((option)=>(  //condtionally loop options by options? so only loops if options has something so it doesnt crash by looping empty array
                    <option key={option} value={option} >{option}</option>
                ))
            }
        </select>
    </div>
  )
})

export default Select