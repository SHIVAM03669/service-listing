//service card component that recevies props and display:
//1. service title
//2. service description
import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src="https://imgs.search.brave.com/Ei9V9Srod84Ojr8pZfeAPMOegqwSVGOTYDMwstRSNzE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTg1NDIyMS9waG90/by93ZWItZGVzaWdu/LWRldmVsb3BtZW50/LWFuZC1jb2Rpbmct/Y29uY2VwdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RnFT/amRSaDZzdWJMX1VN/U3B1WHhlUnB2a3Qx/a3J4VWl5Q1FaMXdz/N3JPaz0" alt="placeholder" />
    </div>
  );
};

export default ServiceCard;