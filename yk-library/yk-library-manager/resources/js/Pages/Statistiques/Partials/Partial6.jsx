import Counter from '../../../Components/Counter';
export default function Partial6 ({
        totalChangementColisAcceptes,
        totalChangementColisAnnules,
        totalChangementColisNouveaux
}){
    return (

            <div className='bg-white h-36 p-4 flex flex-col gap-3 sm:col-span-2 rounded-lg hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
                  <div>
                         <span className='uppercase text-md font-bold text-blue-500   dark:text-[#ced4da] '> modifications colis Acceptées </span>
                  </div>
                  <div className='flex flex-row justify-between'>
                        <div>
                           <span className='capitalize text-3xl font-bold text-blue-950 counter  dark:text-[#0ab39c]'  > <Counter start={0} end={totalChangementColisAcceptes.length} delay={1} /> </span>
                        </div>
                        <div className="bg-gray-100 px-3.5 py-3.5 rounded-md dark:bg-[#262b37]">
                          <svg class="w-5 h-5 text-blue-900 " aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                          </svg>
                       </div>
                  </div>
                  <div>
                        <span className=' text-sm font-bold text-bluelight dark:text-gray-400  '> {totalChangementColisNouveaux.length <= 1 ? `${totalChangementColisNouveaux.length} Nouvelle Modification` : `${totalChangementColisNouveaux.length} Nouvelles Modifications`} | {totalChangementColisAnnules.length <= 1 ? `${totalChangementColisAnnules.length} Modification Annulée ` : `${totalChangementColisAnnules.length} Modifications Annulées`}  </span>
                 </div>
            </div>
    )
}
