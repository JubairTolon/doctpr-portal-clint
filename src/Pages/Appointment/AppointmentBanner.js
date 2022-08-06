import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            < div className="hero-content flex-col lg:flex-row-reverse gap-20" >
                <img width={''} src={chair} alt='Dentist chair' />
                <div className='border-4 rounded py-28 px-16 bg-gray-50'>
                    < DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div >
        </div >
    );
};

export default AppointmentBanner;