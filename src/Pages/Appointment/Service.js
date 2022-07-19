import React from 'react';

const Service = ({ service, setTreatement }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:maw-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center mx-auto">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        onClick={() => setTreatement(service)}
                        disabled={slots.length === 0}
                        class="btn btn-secondary uppercase text-white my-3">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default Service;