import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <HotJobs />
        </div>
    );
};

export default Home;