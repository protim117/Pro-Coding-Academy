import React from 'react';
import { useHistory } from 'react-router-dom';
import UseServices from '../../Hooks/UseServices/UseServices';
import Service from '../Service/Service';
import './Home.css'
import banner from '../../img/banner.png'

const Home = () => {
    const [services]=UseServices();
    // using history to redirect 
    const history=useHistory();
    const handleLearn=()=>{
        history.push('/aboutus');
    }
    return (
        <div>
            {/* Self-made part  */}
             <div className="row pt-4 pb-4 mb-4">
                <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column text-center">
                    <h1>PRO Coding Academy</h1>
                    <h3>Learn Coding with Fun.</h3>
                    <h5>A coding academy with more than 3000 active students And 100 professionals. </h5>
                    <button className='learn-button mt-4' onClick={handleLearn}>Learn about Us</button>
                </div>
                {/* Banner img  */}
                <div className="col-lg-6 ">
                    <img className='w-100 rounded-3' src={banner} alt="" />
                </div>
            </div>
            <hr/>
            {/* Showing 4 items as instructed  */}
            <div className="mb-5">
                <h1>Our Featured Courses:</h1>
                <h5>Based on popularity</h5>
                <div className="pt-4 row row-cols-1 row-cols-lg-4 g-4">
               {
                   services.slice(0,4).map(service => <Service service={service} key={service.id}></Service>)
               }
           </div>
            </div>
        </div>
    );
};

export default Home;