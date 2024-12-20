import React from 'react';
import { motion } from "motion/react"
import Banner1 from '../../assets/team/banner1.png';
import Banner2 from '../../assets/team/banner2.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[550px] my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 place-items-center'>
                    <motion.img
                        src={Banner1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="w-[350px] rounded-t-[62px] rounded-br-[62px] shadow-2xl h-[230px] -mt-12"
                    />
                    <motion.img
                        src={Banner2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="w-[350px] rounded-t-[62px] rounded-br-[62px] shadow-2xl h-[230px]"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1 animate={{ x: [0, 100, 0] }} transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }} className="text-5xl font-bold">Latest <motion.span
                        animate={{ color: ['#2ecc71', '#3498db', '#e74c3c', '#2ecc71'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        // onHoverStart={event => { }}
                        // onHoverEnd={event => { }}
                        className="btn btn-primary">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;