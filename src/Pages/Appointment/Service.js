import React from 'react';

const Service = ({ service, setTreatement }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:maw-w-lg bg-base-100 shadow-xl">
            < div className="card-body text-center mx-auto" >
                <h2 className="text-xl font-bold text-secondary" > {name}</h2 >
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center" >
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatement(service)}
                        disabled={slots.length === 0}
                        className="btn btn-secondary uppercase text-white my-3">Book Appointment</label>
                </div >
            </div >
        </div >
    );
};

export default Service;