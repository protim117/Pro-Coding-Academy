import React from 'react';
import { useHistory } from 'react-router-dom';
import background from '../../img/404_not.png'
const NotFounds = () => {
   
    const history= useHistory();
    const handleNotFound=()=>{
        history.push('/home');
    }
    // Showing 404
    return (
        <div className='text-center'>
          <img src={background} style={{width:"100%", height:"auto"}} alt="" /> <br />
          {/* Redirecting to Home  */}
          <button className='learn-button mt-1' onClick={handleNotFound}>Back to Home</button>
        </div>
    );
};

export default NotFounds;