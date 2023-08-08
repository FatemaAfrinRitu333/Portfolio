import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='container mx-auto'>
          <Header></Header>  
          <Banner></Banner>
          <Skills></Skills>
          <Projects></Projects>
        </div>
    );
};

export default Home;