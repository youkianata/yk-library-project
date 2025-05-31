import React from 'react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import '../../css/app.css'
import NavBar from '@/Components/NavBar';
import HeaderBar from '@/Components/HeaderBar';
import Footer from '@/Components/Footer';
import SmallNav from '@/Components/SmallNav';
import '../../css/BurgerIcons.css'
import { usePage } from '@inertiajs/react'
export default function AuthenticatedLayout({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [index, setIndex] = useState();
    const [nbr, setNbr] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleIndexChange = (e) => {
        setIndex(e);
    };
    const {url}=usePage();

    return (
        <div id="parent" className={`min-h-screen w-full bg-gray-100  flex flex-row dark:bg-red-100 `}  >
                <NavBar onIndexChange={handleIndexChange} open={open} className='w-1/6  dark:bg-[#212529] '   />
                <SmallNav onIndexChange={handleIndexChange} open={open} className='w-1/6 '   />
            <main className={` flex-grow bg-gray-100 dark:bg-[#1a1d21]  w-5/6  lg:transition-all    ease-in-out	pointer-events-auto	 ${open?" lg:ms-20  lg:duration-[670ms] ":"lg:ms-64 lg:delay-100 lg:duration-1000 "}`}>
                <div className='bg-white dark:bg-[#292e32]  max-[460px]:px-2 px-4 sticky top-0 z-40 	border-b-2 dark:border-none	'>
                    <HeaderBar nav={index} auth={auth} />
                       <div  className='hidden lg:block absolute   left-6 bottom-6'>
                            <label  className="buttons__burger" for="burger">
                                <input type="checkbox" id="burger" onClick={()=>{ setOpen(!open) }}/>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                       </div>
                </div>
                <div className='flex flex-col relative'>
                    {children}
                </div>
            </main>
        </div>
    );
}
