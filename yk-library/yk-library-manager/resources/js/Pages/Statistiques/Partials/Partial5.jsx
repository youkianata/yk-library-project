import Counter from '../../../Components/Counter';
export default function Partial5 ({ toutesReclamationsUtilisateur, toutesReclamationsEnCoursTraitementUtilisateur }){


    return (
                 <div className='bg-white h-36 p-4 flex flex-col gap-3 sm:col-span-2 rounded-lg hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
                        <div>
                               <span className='uppercase text-md font-bold text-blue-500   dark:text-[#ced4da]'> reclamations </span>
                        </div>
                        <div className='flex flex-row justify-between'>
                              <div>
                                 <span className='capitalize text-3xl font-bold text-blue-950 counter dark:text-[#0ab39c]'><Counter start={0} end={toutesReclamationsUtilisateur.length} delay={1} /> </span>
                              </div>
                              <div className="bg-red-100 px-3.5 py-3.5 rounded-md dark:bg-[#402e2e]">
                                <svg class="w-5 h-5 text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                                </svg>
                             </div>

                        </div>
                        <div>
                            <span className=' text-sm font-bold text-bluelight dark:text-gray-400  '> {toutesReclamationsEnCoursTraitementUtilisateur.length <= 1 ? `${toutesReclamationsEnCoursTraitementUtilisateur.length} Réclamation` : `${toutesReclamationsEnCoursTraitementUtilisateur.length} Réclamations`} en cours de traitement ({toutesReclamationsUtilisateur.length == 0 ? (0).toFixed(2) : (toutesReclamationsEnCoursTraitementUtilisateur.length /  toutesReclamationsUtilisateur.length * 100).toFixed(2)}%)</span>
                        </div>
                  </div>

    )
}
