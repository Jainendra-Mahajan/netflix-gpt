import React from 'react'

const GptSearchPage = () => {
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input className='p-4 m-4 rounded-lg col-span-9'
                    type="text" placeholder='What would you like to watch Today ?' />
                <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchPage