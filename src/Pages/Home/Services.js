import React from 'react';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluried Treatement',
            description: '',
            img: fluride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whiteing',
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service we provide</h2>
            </div>
            <div className='grid gap-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 mb-1'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen bg-base-2004">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;