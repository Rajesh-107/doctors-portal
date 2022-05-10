import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
            img:fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filing',
            description:'A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to protect against further damage and to restore the tooths appearance and function.',
            img:cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description:'A product is considered simply "whitening" when it removes food or debris from the teeth without bleach. Bleaching products contain peroxide (hydrogen peroxide or carbamide peroxide) and these products remove both surface.',
            img:whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our services</h3>
                <h2 className='text-4xl'>Services We Provided</h2>
            </div>
            <div className='grid sm:grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;