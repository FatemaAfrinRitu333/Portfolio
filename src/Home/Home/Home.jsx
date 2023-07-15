import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='container mx-auto'>
          <Header></Header>  
          <Banner></Banner>
          <Skills></Skills>
        </div>
    );
};

export default Home;