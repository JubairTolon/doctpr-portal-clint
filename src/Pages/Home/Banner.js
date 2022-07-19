import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Banner = () => {
    return (
        <div className="mx-32 my-32">
            <div className="flex md:flex-col sm:flex-col lg:flex-row-reverse items-center justify-center gap-8">
                <img className='sm:w-full md:w-4/5 lg:w-1/2' src={chair} />
                <div className=''>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;