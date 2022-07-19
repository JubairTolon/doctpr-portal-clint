import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatement, setTreatement] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='mb-12'>
            <h4 className='text-xl text-secondary text-center'>Available Appointment on {format(date, 'PP')}</h4>
            <h4 className=' text-neural text-center'>Please select a service. on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                    ></Service>)
                }
            </div>
            {
                treatement && <BookingModal
                    date={date}
                    treatement={treatement}
                    setTreatement={setTreatement}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;