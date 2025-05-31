import { useEffect, useState } from 'react';
import Counter from '../../../Components/Counter';


export default function Partial3 ({ tousBonDeRetourUtilisateur,
                                    tousBonDeRetourNouveauUtilisateur                              
                                                                      }){
    return (
     <div className='bg-white sm:col-span-2 xl:col-span-1  p-4 flex flex-col gap-3 rounded-md  hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
          <div>
               <span className='uppercase text-md font-bold text-blue-500 dark:text-[#ced4da] '> bon de retour </span>
          </div>
          <div className='flex flex-row justify-between items-center'>
               <div>
                    <span className='capitalize text-3xl font-bold text-blue-950 counter dark:text-[#0ab39c]' > <Counter start={0} end={tousBonDeRetourUtilisateur.length} delay={1} /> </span>
               </div>
               <div className="bg-purple-100 px-3.5 py-3.5 rounded-md shadow dark:bg-[#262b37]">
                    <svg class="w-5 h-5 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 7 3-3-3-3m0 12H5.5a4.5 4.5 0 1 1 0-9H14"/>
                    </svg>
               </div>
          </div>
          <div>
               <span className=' text-sm font-bold text-bluelight dark:text-gray-400 '>
                    {tousBonDeRetourNouveauUtilisateur.length} Non reçu ({(tousBonDeRetourNouveauUtilisateur.length / tousBonDeRetourUtilisateur.length * 100).toFixed(2)}%) 
               </span>
          </div>
     </div>
    )
}
