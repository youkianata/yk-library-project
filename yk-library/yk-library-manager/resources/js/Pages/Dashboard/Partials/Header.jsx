import React, { useState } from 'react';
import DateInput from "@/Components/DateInput"
import GreenButton from "@/Components/GreenButton"
import HistoryModal from '@/Components/HistoryModal';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import { Link} from '@inertiajs/react';

export default function Header ({ auth }) {

     return (
        <>
            <div className="flex md:flex-row gap-y-4 flex-col md:items-center p-6 justify-between bg-white mx-6 mt-10 rounded-md hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529] ">
                <div >
                    <h1 className="capitalize text-center md:text-left md:text-xl text-blue-950  font-bold text-lg mb-1 dark:text-[#ced4da]">bienvenue {`${auth.user.name}`}  !</h1>
                    <h2 className="text-sm  text-center md:text-left text-blue-500 dark:text-[#878a99]">Voici ce qui se passe dans votre tableau de bord aujourd'hui. </h2>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                    <Link href={""}>
                        <GreenButton className='uppercase w-[100%] py-3 bg-pink-100 text-xs text-pink-500 hover:bg-pink-500 hover:text-white active:text-white  active:bg-pink-500 dark:bg-[#173433] dark:hover:bg-emerald-500 '>
                            <svg className="w-3 h-3 me-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            Element 1
                        </GreenButton>
                    </Link>

                    <Link href={""}>
                        <GreenButton className='uppercase w-[100%] py-3 bg-blue-100 text-xs text-blue-500 hover:bg-blue-500 hover:text-white active:text-white  active:bg-blue-500 dark:bg-[#173433] dark:hover:bg-emerald-500 '>
                            <svg className="w-3 h-3 me-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            ELement 2
                        </GreenButton>
                    </Link>

                    <Link href={""}>
                        <GreenButton className='uppercase w-[100%] py-3 bg-orange-100 text-xs text-orange-500 hover:bg-orange-500 hover:text-white active:text-white  active:bg-orange-500 dark:bg-[#173433] dark:hover:bg-emerald-500 '>
                            <svg className="w-3 h-3 me-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            Element 3
                        </GreenButton>
                    </Link>
                </div>
            </div>
        </>
     )
}
