import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
        background:`url(${appointment})`}}
        className='flex'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur perferendis nesciunt molestiae? Autem dolore quia a debitis. Quis, deleniti? Atque vitae dicta nam. Impedit minima quasi reprehenderit cumque facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugit!.</p>
            </div>
        </section>
    );
};

export default MakeAppointment;