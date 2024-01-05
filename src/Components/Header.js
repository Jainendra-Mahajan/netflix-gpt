import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from '../utils/constants';
import { addGptButtonValue } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // subscribing the store and fetching the details.
  const gptValue = useSelector(store => store.gpt.gptState);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, Email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [])

  const hadleGptsearchClick = () => {
    dispatch(addGptButtonValue());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-row justify-between'>
      <img className='-ml-5 md:ml-0 w-[40%] md:w-48 mx-0'
        src={LOGO}
        alt="logo" />

      {user && <div className='flex p-4 justify-between'>

        <button onClick={hadleGptsearchClick}
          className='pb-1 pt-1 md:pb-0 md:pt-0 text-sm md:text-lg px-3 bg-gray-900 text-white rounded-lg -mr-1 md:mr-5 mb-3'>
          {gptValue ? "Home" : "Gpt Search"}
        </button>

        {gptValue && <select onChange={handleLanguageChange}
          className='text-center text-sm md:text-lg p-1 md:p-2 -mr-3 md:mr-5 mb-3 bg-gray-900 text-white rounded-lg'>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}


        <img
          className='hidden md:block w-10 h-10'
          src={USER_LOGO} alt="User Icon" />

        <button onClick={handleSignOut} className='-mr-10 -mt-1 md:mr-0 text-xs md:text-lg text-white pl-5 pb-2'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header