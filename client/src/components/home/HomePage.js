import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div> 
      <Link to='about' className='btn btn-primary btn-lg'>
        O nama
      </Link>
    </div>
  )
}

export default Home;
