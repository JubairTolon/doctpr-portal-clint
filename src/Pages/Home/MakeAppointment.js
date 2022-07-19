import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 md:my-5 md:mx-5'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='text-3xl font-bold text-white'>Make an Appointment Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus veniam autem doloremque sint odit, expedita reprehenderit unde cum nesciunt nihil. Sapiente tempore maiores qui repellendus totam error optio ipsum!</p>
                <PrimaryButton></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;