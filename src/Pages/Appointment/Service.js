import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-secondary text-xl font-bold">{name}</h2>
    <p>{
        slots.length > 0
        ? 
        <span>{slots[0]}</span>:
        <span className='text-red-600'>No Slot Available</span>
        }</p>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <p><small>Price:${price} </small></p>
    <div className="card-actions justify-center">
       <label onClick={() => setTreatment(service)}
       disabled={slots.length === 0} 
       htmlFor="booking-modal" 
       className="btn btn-secondary bg-gradient-to-r from-secondary to-primary btn-sm text-white uppercase"
       >Booking Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;