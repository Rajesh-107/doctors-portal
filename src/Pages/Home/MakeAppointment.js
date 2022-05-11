import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Sherad/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
        background:`url(${appointment})`}}
        className='flex justify-center items-center w-full'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] w-full' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold py-2 px-2'>Appointment</h3>
                <h2 className='text-3xl text-white py-3 px-2'>Make an Appointment Today</h2>
                <p className='text-white py-3 px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur perferendis nesciunt molestiae? Autem dolore quia a debitis. Quis, deleniti? Atque vitae dicta nam. Impedit minima quasi reprehenderit cumque facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugit!.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;