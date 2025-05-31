import React, { createContext, useState } from "react";
import { Link, router } from "@inertiajs/react";
import SlateButton from "@/Components/SlateButton";
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PaginatedItems from "@/Pages/Services/PaginatedItems";


// Create the context
export const ServicesContext = createContext();

const Index = ({ services, auth }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 5;

    const toggleStatus = (id) => {
        //console.log(id);
        router.patch(
            route("services.toggle", id),
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    setMessage("Statut mis à jour avec succès !");
                    setModalOpen(true);

                    setTimeout(() => {
                        setModalOpen(false);
                    }, 1000);
                },
                onError: (errors) => console.error(errors),
                only: ["services"],
            }
        );
    };

    // Filter and sort services
    const filteredServices = services.filter((service) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            service.libelle_service.toLowerCase().includes(lowerCaseSearchTerm) ||
            service.code_service.toLowerCase().includes(lowerCaseSearchTerm) ||
            service.prix_service.toString().toLowerCase().includes(lowerCaseSearchTerm)
        );
    }).sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });

    // Context value
    const contextValue = {
        services: filteredServices,
        toggleStatus,
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage,
        setCurrentPage,
        searchTerm,
        setSearchTerm
    };

    return (
        <ServicesContext.Provider value={contextValue}>
            <AuthenticatedLayout auth={auth}>
                <Title titre={'Services'} />
                <div className="px-2 py-10 sm:px-6">
                    <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                        {/* Success Modal */}
                        {modalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="p-6 bg-white rounded-lg shadow-lg">
                                    <h2 className="text-lg font-bold text-green-600">
                                        Succès
                                    </h2>
                                    <p className="text-gray-700">{message}</p>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                            <div>
                                <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                    Liste Des Services
                                </span>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <SlateButton
                                    lien={route("services.create")}
                                    className="flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500"
                                >
                                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                                    </svg>
                                    Ajouter Nouveau Services
                                </SlateButton>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex flex-row gap-2 px-4">
                            <div className="w-full">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Rechercher Services (Par Libellé service, Code service, ou Prix service)"
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(0);
                                        }}
                                        className="mt-1 peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]"
                                    />
                                </div>
                            </div>
                            <div className="flex items-end">
                                <a className="bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white active:text-white active:bg-blue-500 cursor-pointer h-11 w-11 flex items-center justify-center rounded-md dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div id="divDuTableauPrincipal" className="relative p-4 overflow-auto sm:rounded-lg">
                                <table className="min-w-full text-sm text-left text-gray-500 border-collapse divide-y divide-gray-200 table-fixed rtl:text-right dark:text-gray-400">
                                    <caption className="my-4 font-bold text-left underline caption-top underline-offset-1">
                                        <i className="text-base font-bold bi bi-info-square-fill me-2"></i>
                                        Tableau Général des Services
                                    </caption>
                                    <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                        <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                            <th scope="col" className="px-3 py-3 text-center break-all whitespace-nowrap">Code</th>
                                            <th scope="col" className="px-3 py-3 text-center break-all whitespace-nowrap">Nom</th>
                                            <th scope="col" className="px-3 py-3 text-center break-all whitespace-nowrap">Prix</th>
                                            <th scope="col" className="px-3 py-3 text-center break-all whitespace-nowrap">Active</th>
                                            <th scope="col" className="px-3 py-3 text-center break-all whitespace-nowrap">Action</th>
                                        </tr>
                                    </thead>

                                    <PaginatedItems/>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </ServicesContext.Provider>
    );
};

export default Index;