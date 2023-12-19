import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  const gptValue = useSelector(store => store.gpt.gptState);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gptValue ? <GptSearch /> :
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      }

    </div>
  )
}

export default Browse