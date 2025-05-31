import { useEffect, useState } from 'react';
import Counter from '../../../Components/Counter';
export default function Partial2 ({tousBonsDeLivraisonUtilisateur , BonsDeLivraisonNonRecuUtilisateur}){

    return (

            <div className='bg-white sm:col-span-2 xl:col-span-1  p-4 flex flex-col gap-3 rounded-md hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
                  <div>
                  <span className='uppercase text-md font-bold text-blue-500 dark:text-[#ced4da] '> bons de livraison </span>

                  </div>
                  <div className='flex flex-row justify-between items-center'>
                        <div>
                             <span className='capitalize text-3xl font-bold text-blue-950 counter dark:text-[#0ab39c]' ><Counter start={0} end={tousBonsDeLivraisonUtilisateur.length} delay={1} /></span>
                        </div>
                        <div className="bg-amber-100 px-3.5 py-3.5 rounded-md shadow dark:bg-[#413a2e]">
                              <svg class="w-5 h-5 text-amber-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                              </svg>
                         </div>
                  </div>
                  <div>
                       <span className=' text-sm font-bold text-bluelight dark:text-gray-400 '> {BonsDeLivraisonNonRecuUtilisateur.length} Non reçu ({(BonsDeLivraisonNonRecuUtilisateur.length / tousBonsDeLivraisonUtilisateur.length * 100).toFixed(2)}%) </span>
                  </div>
            </div>
    )
}
