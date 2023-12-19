import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_LOGO } from '../utils/constants';
import { addGptButtonValue } from '../utils/gptSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // subscribing the store and fetching the details.
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
  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between'>
      <img className='w-48'
        src={LOGO}
        alt="logo" />

      {user && <div className='flex p-4'>
        <button onClick={hadleGptsearchClick}
          className='px-2 bg-purple-700 text-white rounded-lg mr-6 mb-2'>
          Gpt Search</button>
        <img
          className='w-10 h-10'
          src={USER_LOGO} alt="User Icon" />

        <button onClick={handleSignOut} className='font-bold text-white pl-5 pb-2'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header