import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import imgprofile from '../images/bodyImage/imgprofil.jpg'
import React, { useState } from 'react';
import Checkbox from './Checkbox';
import ApplicationLogo from '@/Components/ApplicationLogo';
import imgFR from '../images/ImagePayes/france (1).png'
import imgAR from "../images/ImagePayes/morocco.png"
import imgRS from "../images/ImagePayes/russia.png"
import imgUSA from "../images/ImagePayes/united-states (1).png"
import imgSP from "../images/ImagePayes/spain (1).png"
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import NavBarMobile from './NavBarMobile';
import Dropdown from "./Dropdown"

export default function HeaderBar({auth}) {

     const [numberNotification,setNumberNotification]=useState(1);
     const [numberTous,setNumberTous]=useState(0);
     const [isActive,setIsActive]=useState(1);
     const [checkboxChecked, setCheckboxChecked] = useState(0);
     const [confirmingSelecteursDeletion, setConfirmingSelecteursDeletion] = useState(false);
     const [toggel,setToggel]=useState(0)
     const [imagePayes,setImagePayes]=useState(imgFR)
     const [confirmingSelecteurs, setConfirmingSelecteurs] = useState(false);
     const [confirmingUtilisateur, setConfirmingUtilisateur] = useState(false);
     const [confirmingNotification, setConfirmingNotification] = useState(false);
     const [confirmingPayes, setConfirmingPayes] = useState(false);


    // close all models
    const closeNavBarMobile = () => {
        setConfirmingSelecteurs(false);
        reset();
    }
    const closeUtilisateur = () => {
        setConfirmingUtilisateur(false);

    }
    const closeNotification = () => {
        setNumberNotification(0)
        setConfirmingNotification(false);
        reset();
    }
    const closePayes = () => {
        setConfirmingPayes(false);
        reset();
    }

    // confirming all Models
    const confirmSelecteurs = () => {
        setConfirmingSelecteurs(true);
    };
    const confirmSelecteursDeletion = () => {
        setConfirmingSelecteursDeletion(true);
    };
    const confirmUtilisateur = (e) => {
        e.preventDefault()
        setConfirmingUtilisateur(true);
    };
    const confirmNotification = () => {
        setConfirmingNotification(true);
    };
    const confirmPayes = () => {
        setConfirmingPayes(true);
    };

     const handleCheckboxChange = (event) => {
        event.target.checked ? setCheckboxChecked(checkboxChecked + 1) :
                               setCheckboxChecked(checkboxChecked - 1)

      };
      const { url, component } = usePage();


    const deleteSelecteurs = (e) => {
        // e.preventDefault();

        // destroy(route(''), {
        //     preserveScroll: true,
        //     onSuccess: () => closeModal(),
        //     onError: () => passwordInput.current.focus(),
        //     onFinish: () => reset(),
        // });
    };

    const closeModal = () => {
        setConfirmingSelecteursDeletion(false);
        reset();
    }
    const handDarckMode=()=>{
        toggel ===0?setToggel(1): setToggel(toggel-1);
        let elem = document.getElementById("iconPayes")
        if(toggel===1){
            elem.innerHTML=' <svg class=" max-[450px]:h-4 max-[450px]:w-4 w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/></svg>'
        }
        else{
            elem.innerHTML='<svg class="max-[450px]:h-4 max-[450px]:w-4 w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>';
        }
        document.body.classList.toggle("dark")
    }
     return (
 <>
            {/* header nav */}
            <nav className={`   flex justify-between lg:justify-end  items-center   ` } >
                <div className='flex flex-row items-center gap-x-4'>
                    <div className='  lg:hidden hover:rounded-full hover:bg-blue-100 active:rounded-full active:bg-blue-100 max-[450px]:p-2  p-3 cursor-pointer hover:dark:bg-[#1d2125] ms-4 sm:ms-6 'onClick={confirmSelecteurs}>
                        <svg className="  max-[450px]:h-4 max-[450px]:w-4 w-6 h-6 text-[#878a99] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" onClick={()=>setToggel(1)} fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </div>
                </div>
            <div className='flex flex-row max-[450px]:gap-x-2 gap-x-1   items-center '>

                <Link onClick={(e)=>confirmUtilisateur(e)}  className={`flex flex-row items-center gap-x-4  md:bg-gray-100 md:dark:bg-[#1d2125]  md:px-4 py-4 lg:py-3 font-semibold hover:text-white  text-slateColor  `}   >
                    <div className='bg-white  shadow rounded-full  max-[450px]:w-6 w-7'>
                        <img src={imgprofile} alt=""  className=' w-full rounded-full  '/>
                    </div>
                    <div className='flex flex-col mb-1 hidden lg:block'>
                        <div className='text-blue-950 flex flex-row'>
                            <h1 className=' max-[450px]:text-xs text-xs me-2 text-blue-950 capitalize dark:text-white'>
                                {`${auth.user.name}`}
                            </h1>
                        </div>
                        <div className='text-xs text-green-500 dark:text-white '>
                            vérifié
                        </div>
                    </div>
                </Link>
            </div>



            </nav>
            {/* start deopDown utilisateur */}
             <Dropdown className=" bg-white  px-0 py-3  rounded-b-md shadow mt-2   top-14   right-4  w-52   absolute " show={confirmingUtilisateur} onClose={closeUtilisateur} >

                <div className='  flex flex-col gap-y-1 '>
                    <Link method="post" href={route('logout')} className={`flex flex-row text-sm  text-gray-400 dark:text-[#ced4da]  block  px-5 py-2  hover:bg-gray-100 active:bg-gray-100 hover:bg-gray-100 dark:hover:bg-[#292e32]   ${url==="/logout"?"bg-gray-100 dark:bg-[#292e32]":""}`} >
                        <svg className="flex-shrink-0 w-4 h-4  mr-2  text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
                        </svg>
                        Se déconnecter
                    </Link>
                    </div>
             </Dropdown>

            {/* model */}
            <Modal show={confirmingSelecteursDeletion} onClose={closeModal}>
                    <form onSubmit={deleteSelecteurs} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                        Êtes-vous sûr(e) de vouloir supprimer votre compte ?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                        Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez entrer votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.
                        </p>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>

                            <DangerButton className="ml-3">
                                Supprimer
                            </DangerButton>
                        </div>
                    </form>
            </Modal>
            <NavBarMobile show={confirmingSelecteurs}  onClose={closeNavBarMobile}/>

    </>
    );
}
