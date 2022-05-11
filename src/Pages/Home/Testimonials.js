import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'Dr. Rajesh did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance.',
            location: 'Italy',
            img: people1
        },
        {
            _id: 2,
            name: 'Rajesh Herry',
            review: 'Wonderful experience with Shera Clinic. Dr. Rajesh was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up.',
            location: 'Japan',
            img: people2
        },
        {
            _id: 3,
            name: 'Barua Herry',
            review: 'Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. Rajesh taking time to go over the diagnosis clearly and treatment options.',
            location: 'France',
            img: people3
        }
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id} review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;