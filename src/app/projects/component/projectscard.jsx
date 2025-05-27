import React from 'react';
import Card from './card';

const Pro = () => {
  return (
    <div className='flex items-center justify-center flex-wrap mt-20'>
      <Card 
        image='/cartify.png' 
        live='' 
        github=''
        description="A cart management system designed for efficient shopping experiences, featuring real-time updates and smooth user interaction."
      />

      <Card 
        image='/telcom.png' 
        live='https://swiftpay-app-frontend.vercel.app/' 
        github='https://github.com/codingwithKenny/Tel-Comunication-App-Front-End'
        description={
          <>
            A telecommunication app with <span className="text-blue-500 font-semibold">Paystack</span> integration for fast, secure airtime and data transactions.
          </>
        }
      />

      <Card 
        image='/store.png' 
        live='https://riddy-store.vercel.app/' 
        github='https://github.com/codingwithKenny/RiddyStore'
        description={
          <>
            A modern e-commerce platform with <span className="text-purple-500 font-semibold">Stripe</span> integration, secure checkout, cart management, and user-friendly navigation.
          </>
        }
      />

      <Card 
        image='/Gramsterly.png' 
        live='' 
        github=''
        description="A social media platform clone that allows users to share posts, interact, and build a community — focusing on responsiveness and clean UI."
      />

      <Card 
        image='/newproject.png' 
        live='https://muslimgroupofschools.com/' 
        github='https://github.com/codingwithKenny/lms'
        description="A School Management System featuring student portals for checking results, managing profiles, and tracking academic progress — designed for efficiency and accessibility."
      />
    </div>
  );
};

export default Pro;
