import React , { useState } from 'react'

const Calculator = () => {

    const [number, setNumber] = useState ('')

    const handleClick = (event) => {
        setNumber(number.concat(event.target.value))
    }

    const handleSlice = () => {
        setNumber(number.slice(0 , -1))
    }
    const handleReset = ( ) => {
        setNumber('');
    }
    const handleEqual = () => {
        try{
            setNumber(eval(number).toString())
        }catch(error){
            setNumber('Invalid')
        }
    }

    return (
        <>
        <div className=' w-full h-screen bg-[#EFE8DE] flex justify-center items-center relative  '>
        <div className=' w-[500px] h-[500px] bg-[#EEB767] rounded-full absolute '/> 
             <div className="bg-gray-900 w-[330px] h-[650px]  rounded-[36px] pt-4 drop-shadow-lg">
                   
                   {/* screen */}
                   <div className=' h-48 '>
                       <input
                       type='text'
                       placeholder='0'className=' w-full h-full text-[#D4D4D2] bg-gray-900 text-4xl text-right pr-5 outline-none mt-8  '
                       value={number}
                        />
                   </div>

                   {/* keypad */}
                   <div className='grid grid-cols-4 gap-4 mt-16 justify-items-center mx-6'>
                       <button  onClick={handleReset} className='text-gray  bg-[#D4D4D2] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button onClick={handleSlice} className='text-gray  bg-[#D4D4D2] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow'>C</button>
                       <button value='%'onClick={handleClick} className='text-gray  bg-[#D4D4D2] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow'>%</button>

                       <button value='/'onClick={handleClick} className='text-gray  bg-[#FF9500] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow'>/</button>

                       <button value='7'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button value='9'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>7</button> 
                       <button value='7'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>9</button>
                       <button value='*'onClick={handleClick} className='text-gray  bg-[#FF9500] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow'>X</button>

                       <button value='4'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button value='5'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button value='6'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow '>6</button>
                       <button value='-' onClick={handleClick}className='text-gray  bg-[#FF9500] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow '>-</button>

                       <button value='1'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button value='2'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button value='3'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button value='+'onClick={handleClick} className='text-gray  bg-[#FF9500] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow '>+</button>   

                       <button value='0' onClick={handleClick} className='text-[#D4D4D2] w-[140px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow col-span-2 mt-4'>0</button>
                       <button value='.'onClick={handleClick} className='text-[#D4D4D2] w-[55px] h-[55px] bg-[#505050] rounded-full font-bold text-3xl flex justify-center items-center shadow mt-4'>.</button>
                       <button onClick={handleEqual} className='text-gray bg-[#FF9500] w-[55px] h-[55px] rounded-full font-bold text-3xl flex justify-center items-center shadow mt-4'>=</button>
        
                   </div>
                   
               </div>
               </div>
        </>
    )
}

export default Calculator;