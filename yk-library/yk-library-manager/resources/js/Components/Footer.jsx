import React from 'react';
export default function  Footer({ active = false,onNumberChange, className = '',nav, children,...props}) {


     return (
     <>
          <nav className={`  p-4 bg-white dark:bg-[#212529] shadow-inner bottom-0 w-full 2xl:fixed ${className} ` } >
               <p className='text-base text-gray-400 capitalize text-center sm:text-start'>&copy; 2025 Bellacure</p>
          </nav>
     </>
    );
}
