import React from 'react';
import Banner from '../banner/Banner';
import Chefs from '../Pages/Chefs/Chefs';
import Food from '../Food/Food';
import Carasoul from '../Carasoul/Carasoul';


const Home = () => {
    return (
        <div>
            <Carasoul></Carasoul>
            <Banner></Banner>
            <Chefs></Chefs>
            <Food></Food>
        </div>
    );
};

export default Home;