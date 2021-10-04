import React from 'react';
import UseServices from '../../Hooks/UseServices/UseServices';
import Service from '../Service/Service';

const Services = () => {
    const [services]=UseServices();
    
    return (
        <div className='mt-5'>
           <h1>Our All Courses:-</h1> 
           {/* Service List  */}
           <div className="pt-4 row row-cols-1 row-cols-lg-3 g-4">
               {
                   services.map(service => <Service service={service} key={service.id}></Service>)
               }
           </div>
        </div>
    );
};

export default Services;