import React from 'react';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import Showcase from './Showcase/Showcase';
import Testimoni from './Testimoni/Testimoni';
import Welcome from './Welcome/Welcome';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Showcase></Showcase>
            <Featured></Featured>
            <Testimoni></Testimoni>
        </div>
    );
};

export default Home;