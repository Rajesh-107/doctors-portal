import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonials = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            img: people1
        },
        {
            _id: 1,
            name: 'Rajesh Herry',
            review: '',
            img: people2
        },
        {
            _id: 1,
            name: 'Barua Herry',
            review: '',
            img: people3
        },
    ]
    return (
        <section className='m-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
            <div>
                <img src={quote} className='w-24 lg:w-48' alt="" />
            </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;