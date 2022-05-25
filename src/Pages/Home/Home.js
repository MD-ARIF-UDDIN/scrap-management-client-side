import React from 'react';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Stats from './Stats';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Stats></Stats>
            <Contact></Contact>
        </div>
    );
};

export default Home;