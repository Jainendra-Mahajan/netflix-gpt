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
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between'>
      <img className='w-48'
        src={LOGO}
        alt="logo" />

      {user && <div className='flex p-4'>

        {gptValue && <select onChange={handleLanguageChange}
          className='p-2 m-2 bg-gray-900 text-white rounded-lg'>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}

        <button onClick={hadleGptsearchClick}
          className='px-3 bg-purple-700 text-white rounded-lg m-2'>
          {gptValue ? "Home" : "Gpt Search"}
        </button>
        <img
          className='w-10 h-10'
          src={USER_LOGO} alt="User Icon" />

        <button onClick={handleSignOut} className='font-bold text-white pl-5 pb-2'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header