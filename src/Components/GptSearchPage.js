import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'

const GptSearchPage = () => {

    const currentLanguage = useSelector(store => store.lang.currentLanguage);
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input className='p-4 m-4 rounded-lg col-span-9'
                    type="text" placeholder={lang[currentLanguage].gptSearchPlaceHolder} />
                <button className='py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3'>{lang[currentLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchPage