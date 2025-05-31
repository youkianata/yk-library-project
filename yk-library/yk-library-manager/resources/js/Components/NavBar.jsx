import {useState,useEffect} from 'react'
import { Link, router } from '@inertiajs/react';
import "../../css/app.css";
import ApplicationLogoLight from '@/Components/ApplicationLogoLight';
import { usePage } from '@inertiajs/react';

export default function NavBar({ active = false, className = '', onIndexChange,onNumberChange, children,open,...props}) {
    const [selectedLink, setSelectedLink] = useState(1);
    const [selectedLinkChild, setSelectedLinkChild] = useState(null);
    const { url, component } = usePage();
    const idNav = document.getElementById("bigNav");
    const [isOpen,setIsOpen]=useState([false, false, false, false, false, false, false]);
    onIndexChange(idNav,0);

    //   handle Link style
    const handleLinkClick = (linkId, event) => {
        event.preventDefault();
        localStorage.setItem("selectedNavItem", linkId); // Store selected nav item
        router.visit(event.currentTarget.getAttribute("href"));

        setSelectedLink(linkId);
      }
     //   handle Link style
     const handleLinkClickChild = (linkId, event) => {
        event.preventDefault();
        setSelectedLinkChild(linkId);
     };
    //  handle show nav
     const hiddenNav =()=>{
        idNav.classList.toggle('hidden');
        onNumberChange(0);
     }

    useEffect(() => {
        const selectedNavItem = localStorage.getItem("selectedNavItem");
        if (selectedNavItem) {
            const navItem = document.getElementById(`nav-item-${selectedNavItem}`);
            if (navItem) {
                navItem.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            localStorage.removeItem("selectedNavItem"); // Clear storage after scrolling
        }
    }, []);

    return (
 <>
    {/* big nav */}
    <nav id="bigNav" className={`bg-white overflow-auto	fixed transition-all hidden  lg:block  ease-in-out top-0 z-50 w-64 shadow-lg dark:bg-[#212529]   ${className} ${open?"-translate-x-64 delay-300 duration-[1090ms]":"translate-x-0 duration-700 "}` }  >
        <div className="relative flex flex-1 h-screen ">
            <div className=" md:flex md:flex-col">
                <div className="relative flex flex-col flex-grow pb-10 "  >
                    <div className='flex flex-row lg:flex-col shadow sticky top-0 z-40 justify-between pb-4 pt-6 lg:pt-6 bg-white dark:bg-[#212529]  '>
                        {/* logo */}
                       <div className='w-1/2 lg:w-4/5 ms-2' >
                            <Link href={route('dashboard')} >
                                <ApplicationLogoLight className="w-24 h-20 text-gray-500 fill-current" />
                            </Link>
                       </div>
                       <div className='cursor-pointer' onClick={hiddenNav}>
                          <svg className="w-[28px] h-[28px] text-gray-400 lg:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                          </svg>
                       </div>

                    </div>
                    <div className="px-4 ">
                        <hr className="border-gray-200 dark:border-[#292e32]" />
                         </div>

                    <div className="flex flex-col flex-1 w-full px-3 mt-2 ">
                        <div className="w-full space-y-4">
                            {/* debut de default nav */}
                            <nav className="flex-1 space-y-2">
                            <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Tableau de board</h1>
                                <Link href={route('dashboard')}  id="nav-item-1" onClick={(event) => handleLinkClick(1, event)} className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff]   ${url === "/dashboard" ? "text-white  bg-[#86be3f]  rounded-lg dark:text-[#ffffff] dark:bg-[#212529]" : "text-gray-900 dark:text-[#5f6270] "} `} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mr-4 " xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Accueil
                                </Link>
                                <Link  href={route('statistiques.index')}  id="nav-item-2" onClick={(event) => handleLinkClick(2, event)} className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff]  ${url === "/statistiques" ? "text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]" : "text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Statistiques
                               </Link>

                            </nav>
                           {/* fin de default nav */}

                            <hr className="border-gray-200 dark:border-[#292e32]" />
                            {/* debut du nav de clients*/}
                            <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Gestion des auteurs</h1>

                                <Link href={route('auteurs.index')}  id="nav-item-3" onClick={(event) => handleLinkClick(3, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/demande_reservation'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                                </svg>
                                    <span className='capitalize me-1'>gerer auteurs</span>
                                </Link>

                                <Link href={route('auteurs.create')}  id="nav-item-3" onClick={(event) => handleLinkClick(3, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/demande_reservation/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                    <span className='capitalize me-1'>ajouter un auteur</span>
                                </Link>
                            </nav>
                               <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Gestion des roles</h1>
                                 <Link href={route('roles.index')}  id="nav-item-5" onClick={(event) => handleLinkClick(1, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/roles'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Gerer les roles</span>
                                </Link>
                                <Link href={route('roles.create')}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/roles/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Ajouter un role</span>
                                </Link>
                            </nav>
                            {/* fin du nav de clients */}
                               <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Gestion des book status</h1>
                                 <Link href={route('bookstatus.index')}  id="nav-item-5" onClick={(event) => handleLinkClick(1, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/roles'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Gerer les bookstatus</span>
                                </Link>
                                <Link href={route('bookstatus.create')}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/roles/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Ajouter un bookstatu</span>
                                </Link>
                            </nav>
                            {/* fin du nav de clients */}
                            <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>GESTION DES JOURS</h1>
                                 {/* <Link href={route('jours.ajouterJour')}  id="nav-item-5" onClick={(event) => handleLinkClick(5, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/jours/ajouterJour'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Ajouter un nouveau jour   </span>
                                </Link>
                                <Link href={route('jours.listeJour')}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/jours/listeJour'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Historique des jours</span>
                                </Link> */}
                            </nav>

                            <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Gestion des Sérvices</h1>
                                {/* <Link href={route('services.create')}  id="nav-item-3" onClick={(event) => handleLinkClick(3, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/services/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14m-8-7h2m0 0h2m-2 0v2m0-2v-2m12 1h-6m6 4h-6M4 19h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"/>
                                    </svg>

                                    <span className='gap-2 capitalize me-1'>Ajouter des Services</span>
                                </Link>
                                <Link href={route('services.index')}  id="nav-item-4" onClick={(event) => handleLinkClick(4, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/services'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                                </svg>

                                    <span className='capitalize me-1'>Liste des Sérvices </span>
                                </Link> */}
                            </nav>

                           <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Suivi des Calories</h1>
                                 <Link href={""}  id="nav-item-5" onClick={(event) => handleLinkClick(5, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/nouvelle-facture'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Mesurer les Calories</span>
                                </Link>
                                <Link href={""}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/liste-ventes'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Historique des Calories</span>
                                </Link>
                            </nav> <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Intervals des Jours</h1>
                                 {/* <Link href={route('intervals.index')}  id="nav-item-5" onClick={(event) => handleLinkClick(5, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/intervals'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Afficher Intervals</span>
                                </Link>
                                <Link href={route('intervals.create')}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/interval/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                    <svg className="flex-shrink-0 w-5 h-5 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    </svg>
                                    <span className='capitalize me-1'>Ajouter Intervals</span>
                                </Link> */}
                            </nav>

                            <hr className="border-gray-200 dark:border-[#292e32]" />
                           {/* debut du nav de factures*/}
                           <nav className="flex-1 w-full space-y-2 ">
                                 <h1 className='uppercase text-sm px-4  py-2 text-white  font-bold bg-[#9322e2] shadow-lg my-4 rounded-lg dark:bg-[#292e32]'>Gestion des clients</h1>
                                 {/* <Link href={route('clients.index')}  id="nav-item-5" onClick={(event) => handleLinkClick(1, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/clients'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                 <i class="bi bi-people-fill me-2"></i>
                                    <span className='capitalize me-1'>Gerer les clients</span>
                                </Link>
                                <Link href={route('clients.create')}  id="nav-item-6" onClick={(event) => handleLinkClick(6, event)}  className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900  hover:text-green-800 hover:bg-green-100 hover:rounded-lg dark:text-[#5f6270] dark:hover:bg-[#212529] dark:hover:text-[#ffffff] ${url==='/clients/create'?"text-white  bg-[#86be3f] rounded-lg dark:text-[#ffffff] dark:bg-[#212529]":"text-gray-900 "}`} tabIndex={0}>
                                <i class="bi bi-person-fill-add me-2"></i>
                                    <span className='capitalize me-1'>Ajouter un client</span>
                                </Link> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {/* big nav */}

    </>
    );
}
