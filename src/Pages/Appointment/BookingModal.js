import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firevase.init';

const BookingModal = ({ date, treatement, setTreatement }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatement;
    const formatedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatementId: _id,
            treatement: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        //to close the modal
        setTreatement(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-6'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div >
            </div >
        </div >
    );
};

export default BookingModal;