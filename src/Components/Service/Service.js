import React from 'react';
import './Service.css'
const Service = props => {
    const{name,img,price}=props.service;
    return (
        <div>
            {/* created a card to show services  */}
         <div className="col h-100">
            <div className="card h-100 rounded-3 shadow ">
            <img src={img} className="card-img-top service-img" alt="..."/>
            <div className="card-body py-4">
                <h3 className="card-title">{name}</h3>
                <h4 className="card-text">Price: {price}</h4>
            </div>
            </div>
  </div>
        </div>
    );
};

export default Service;