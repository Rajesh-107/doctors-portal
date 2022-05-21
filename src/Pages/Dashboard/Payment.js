import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import Loading from '../Sherad/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L19WzD5qkxKjAbjCVQDag0uuDNfkeNbMIw1RKGpfljCigYQRPF3jkebQomw1ceuBLClT1w9iqDKYh3AGKkhC9Mi00tmsIH1NC');

const Payment = () => {
    const {id} = useParams();
    const url = `https://gentle-citadel-27034.herokuapp.com/booking/${id}`;

    const {data: appointment, isLoading} = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers:{
          'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()));

      if(isLoading){
          return <Loading></Loading>
      }
    return (
        <div>
            
  <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12"s>
  <div className="card-body">
      <p className='text-success font-bold text-3xl'>Hello,{appointment.patientName} </p>
    <h2 className="card-title">Pay For {appointment.treatment}</h2>
    <p>Your Appointment <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot} </p>
    <p>Please pay: ${appointment.price}</p>
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
       
      <Elements stripe={stripePromise}>
    <CheckoutForm appointment={appointment} />
  </Elements>
      </div>
   
</div>
        </div>
    );
};

export default Payment;