import { Link } from '@inertiajs/react';
import { useState ,useEffect } from 'react';
import img from '../images/light-logo.png';
import '../../css/app.css'

export default function GuestLayout({ children }) {
    const [active,setActive]=useState(0)
    setTimeout(()=>{active ===2? setActive(0):setActive(active+1)}, 3000)


    return (
        <div className="mt-10">
            <div className='flex  flex-col lg:flex-row justify-center px-4 sm:px-10 md:px-24 lg:px-12 xl:px-16 mx-auto '  >
                <div className={` hidden lg:block relative w-full  lg:w-1/2 p-10 shadow-md  sm:rounded-l-lg transition-all duration-[0.6s]  ease-in-out `} style={{backgroundImage:`url(${img})` , backgroundSize:"cover"}} >
                    <div className='w-full h-full absolute top-0 left-0   bg-[#364574]  opacity-80 sm:rounded-l-lg	  backdrop-filter backdrop-blur-lg ' >
                    </div>
                    <div className=' flex justify-center items-center  relative lg:absolute top-0 left-0  w-full h-full'>
                        <div className='  flex   lg:px-6 flex-col gap-y-4'>
                            <svg class="w-8 h-8 text-[#09a490]  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">

                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <div className=' h-14'>
                            {active==0 && <p className='text-[#ffffffef] ml-4 text-lg text-center'>"Explorez des programmes sur mesure pour un corps tonifié et en santé !"</p>}
                            {active==1 && <p className='text-[#ffffffef] ml-4 text-lg text-center'>"Recevez un accompagnement dédié pour optimiser votre parcours vers la légèreté !"</p>}
                            {active==2 && <p className='text-[#ffffffef] ml-4 text-lg text-center'>"Dévoilez votre potentiel avec des conseils adaptés à vos besoins spécifiques !"</p>}
                            </div>
                            <div className='flex flex-row gap-x-2  self-center '>
                                <button className={` ${active===0?"bg-white":"bg-[#ffffff80]"} px-4 py-0.5 `}>
                                </button>
                                <button className={`${active===1?"bg-white":"bg-[#ffffff80]"} px-4 py-0.5`}>
                                </button>
                                <button className={`${active===2?"bg-white":"bg-[#ffffff80]"} px-4 py-0.5`}>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={` w-full lg:w-1/2 shadow-md  pb-14 px-14 pt-4   bg-white h-full overflow-hidden  lg:rounded-r-lg transition-all duration-[0.6s] ease-in-out `}>
                    {children}
                </div>
            </div>

            <div className='text-center text-[#0f0707] mt-2 text-base'>
               <p>© 2025 yk-library</p>
            </div>
        </div>

    );
}
