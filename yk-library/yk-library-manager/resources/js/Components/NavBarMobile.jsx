import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {useState,useEffect} from 'react'
import { Link } from '@inertiajs/react';
import "../../css/app.css"
import ApplicationLogo from '@/Components/ApplicationLogo';
import { usePage } from '@inertiajs/react'
export default function NavBarMobile({ children, show = false, maxWidth = '2xl', closeable = true, onClose = () => {} }) {
    const [selectedLink, setSelectedLink] = useState(1);
    const [selectedLinkChild, setSelectedLinkChild] = useState(null);
    const { url, component } = usePage();
    const idNav=document.getElementById("bigNav")
    const [isOpen,setIsOpen]=useState([false,false,false,false,false] )

    // handl Dropdown


    //   handle Link style
    const handleLinkClick = (linkId, event) => {
        //  event.preventDefault();
         setSelectedLink(linkId);
      }
     //   handle Link style
     const handleLinkClickChild = (linkId, event) => {
        event.preventDefault();
        setSelectedLinkChild(linkId);
     };

     useEffect(() => {
        const listUrlColis=["/Colis/NouveauColis","/Colis/ListColis",'/Colis/ColisPourRelance',"/Colis/ColisPourRamassage","/Colis/ColisDeStock"]
        const listUrlImport=["/import/importColis","/import/importColisStock"]
        const listColisLivraison=["/bonDeLivraison","/bonDeLivraisonStock"]
        const listColisStock=["/gestionDeStock/ajouterProduit","/gestionDeStock/inventory"]
        const listColisRetour=["/bonDeRetour","/bonDeRetourStock"]
        if ( listUrlColis.includes(url)){
            setIsOpen([true,false,false,false,false])
        }
        else if(listUrlImport.includes(url)){
            setIsOpen([false,true,false,false,false])
        }
        else if(listColisLivraison.includes(url)){
            setIsOpen([false,false,true,false,false])
        }
        else if(listColisStock.includes(url)){
            setIsOpen([false,false,false,true,false])
        }
        else if(listColisRetour.includes(url)){
            setIsOpen([false,false,false,false,true])
        }
        else{
            setIsOpen([false,false,false,false,false])

        }

      }, [url]);

    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    return (
        <Transition show={show} as={Fragment} leave="duration-200" >
            <Dialog
                as="div"
                id="modal"
                className=" fixed inset-0  flex overflow-y-auto px-4  sm:px-0 lg:hidden   z-50 transform transition-all"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-700"
                    enterFrom="opacity-0 translate-x-4  "
                    enterTo="opacity-100 translate-x-0 "
                    leave="ease-in-out duration-700"
                    leaveFrom="opacity-100 translate-x-0 "
                    leaveTo="opacity-0 translate-x-4"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-700"
                    enterFrom="opacity-0 -translate-x-80  "
                    enterTo="opacity-100 translate-x-0 "
                    leave="ease-in-out duration-700"
                    leaveFrom="opacity-100 translate-x-0 "
                    leaveTo="opacity-0 -translate-x-80"
                >
                    <Dialog.Panel id="bigNav" className={`  rounded-l-md h-full w-72   bg-red-100 absolute left-0 overflow-y-auto shadow-xl transform transition-all   ${maxWidthClass}`}>

                    <nav  id="bigNav" className={` overflow-auto  bg-white  transition-all     ease-in-out top-0   shadow-lg   dark:bg-[#212529] ` }  >

                    </nav>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
    }
