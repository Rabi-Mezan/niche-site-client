import React from 'react';
import Banner from './Banner/Banner';
import Showcase from './Showcase/Showcase';
import Testimoni from './Testimoni/Testimoni';
import Welcome from './Welcome/Welcome';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Showcase></Showcase>
            <Testimoni></Testimoni>
        </div>
    );
};

export default Home;