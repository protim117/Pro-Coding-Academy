import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactUs = () => {
    // using history 
    const history=useHistory();
    const handleContact=()=>{
        history.push('*');
    }
    return (
        <div>
            <h1 className='text-center mt-5' style={{color: "red"}}>Stay In Touch</h1>
            {/* created a form to send a message  */}
           <form className="row g-3 pt-5 mt-4 pb-5">
           <div className="col-md-6">
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            
            <div className="col-12">
            <div className="form-floating">
            <textarea className="form-control" placeholder="Leave Your Message" style={{height: "150px"}} id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Let Us Know</label>
            </div>
            </div>
            
            {/* As we don't have any server, i have given 404 to the button  */}
            <div className="col-12 text-center pt-4">
                <button type="submit" onClick={handleContact} className="learn-button">Send Away</button>
            </div>
            </form>

        </div>
    );
};

export default ContactUs;