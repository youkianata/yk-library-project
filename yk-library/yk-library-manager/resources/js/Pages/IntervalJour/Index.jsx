// import SlateButton from '@/Components/ButtonSlate';
// import Footer from '@/Components/Footer'
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React, { createContext, useState } from "react";
import PaginatedItems from "./paginatedItems";

export const intervalJourContext = createContext();

export default function Index({ auth, intervals }) {
    const [currentPage, setCurrentPage] = useState(0);

    const valueContext = {
        intervals,
    };

    return (
        <intervalJourContext.Provider value={valueContext}>
            <AuthenticatedLayout auth={auth}>
                <Title titre={"Services"} />
                <div className="px-2 py-10 sm:px-6">
                    <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                        <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                            <div>
                                <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                    Liste Des Interval
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={route("intervals.create")}
                                    className="flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500 rounded-lg p-2"
                                >
                                    <svg
                                        className="w-6 h-6 text-white dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14m-7 7V5"
                                        />
                                    </svg>
                                    Ajouter
                                </Link>
                            </div>
                        </div>

                        <div
                            id="divDuTableauPrincipal"
                            className="relative p-4 overflow-auto sm:rounded-lg"
                        >
                            <table className="min-w-full text-sm text-left text-gray-500 border-collapse divide-y divide-gray-200 table-fixed rtl:text-right dark:text-gray-400">
                                <caption className="my-4 font-bold text-left underline caption-top underline-offset-1">
                                    <i className="text-base font-bold bi bi-info-square-fill me-2"></i>
                                    Tableau Général des intervals
                                </caption>
                                <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                    <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-center break-all whitespace-nowrap"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-center break-all whitespace-nowrap"
                                        >
                                            libelle
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-center break-all whitespace-nowrap"
                                        >
                                            valeur
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3 text-center break-all whitespace-nowrap"
                                        >
                                            action
                                        </th>
                                    </tr>
                                </thead>

                                <PaginatedItems
                                    itemsPerPage={5}
                                    currentPage={currentPage}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </intervalJourContext.Provider>
    );
}
