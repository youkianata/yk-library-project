import {useState,useEffect} from 'react'
import { Link } from '@inertiajs/react';
import "../../css/app.css"
import ApplicationLogo from '@/Components/ApplicationLogo';
import { usePage } from '@inertiajs/react'

export default function SmallNav({ active = false, className = '', onIndexChange,onNumberChange, children,open,...props}) {
    const [selectedLink, setSelectedLink] = useState(1);
    const [selectedLinkChild, setSelectedLinkChild] = useState(null);
    const { url, component } = usePage();
    const idNav=document.getElementById("bigNav")
    const [isOpen,setIsOpen]=useState([false,false,false,false,false])

    onIndexChange(idNav,0)
    // handl Dropdown


    //   handle Link style
    const handleLinkClick = (linkId, event) => {
        //  event.preventDefault();
         setSelectedLink(linkId);
      }


    return (
 <>
    {/* big nav */}
    <div className='w-64 fixed overflow-auto h-full hidden lg:block' id="bigNav">

     </div>
    {/* snall nav */}

    </>
    );
}
