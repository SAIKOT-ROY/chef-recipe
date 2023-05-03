import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-center gap-20 mb-24'>
            <div className='md:w-1/4 w-auto mb-5'>
                <h2 className='text-5xl mb-16 font-serif'>About Us</h2>
                <p className='font-semibold'>
                At Hakata Ramen & Sushi in Waltham, we welcome you like friends
                or family. We believe that food is a way to bring people together,
                and hope that we can serve as a place to do that. Having grown up
                in a Japanese household, we only serve you the most authentic Japanese 
                cuisine that we grew up eating. Hakata Ramen & Sushi only uses the highest
                quality ingredients to ensure that you have the tastiest food on your
                plate. We want to give you the best dining experience,
                from the freshness of our food to the service we provide.
                As a forever improving restaurant, we value our 
                relationship with you and hope to satisfy your
                many meals to come. With our expertise in cooking
                and creative innovation, we won't disappoint! 
                Come to Hakata Ramen & Sushi for unique Japanese 
                flavors and outstanding service that you will never forget.
                </p>
            </div>
            <div className='md:w-2/5 w-auto border border-4 border-blue-400'>
                <img src="../../assets/banner/banner.jpg" alt="" srcSet="" />
            </div>
        </div>
    );
};

export default Banner;