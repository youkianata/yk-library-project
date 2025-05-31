import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/app.css";
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import { Table } from "flowbite-react";
import { createContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import { Link, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Alert } from "flowbite-react";
import PaginatedItems from "./PaginatedItemsClients";
import PaginatedItemsClients from "./PaginatedItemsClients";
export const ClientsContext = createContext();


export default function IndexClients({ auth, clients }) {
    
    const { flash } = usePage().props;
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 5;
    const handleExport = () => {
        // Using Inertia to trigger the download
        router.visit("/clients/export", {
            // This ensures the browser handles the file download
            only: [],
            preserveState: false,
        });
    };

    const contextValue = {
        clients: clients,
        itemsPerPage: 10,
        currentPage,
        setCurrentPage,
        itemsPerPage :ITEMS_PER_PAGE,
    }

    return (
        <ClientsContext.Provider value={contextValue}>
            <AuthenticatedLayout auth={auth}>
                <Title titre="Tableau des clients" />

                {/* Centered Form Container */}
                <div className="flex justify-center pt-4 pb-16">
                    <div className="flex flex-col gap-y-4 bg-white shadow-lg hover:shadow-gray-700 hover:shadow-2xl transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529] w-[95%]">
                        <div className="px-2 py-2 sm:px-6">
                            <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                                <div>
                                    <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                        Liste Des clients
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href={route("clients.export")}
                                        class="inline-flex items-center p-1  shadow-lg border border-transparent  text-black rounded-md font-semibold text-xs px-3 capitalize  focus:outline-none  hover:font-semibold  undefined flex justify-center bg-emeraldLight  hover:bg-emeraldDark text-white py-2 dark:bg-[#1d3a3a] dark:hover:dark:bg-[#1d3a3a] dark:text-emerald-500 "
                                    >
                                        <i class="bi bi-cloud-arrow-down text-md mx-0.5 font-extrabold "></i>
                                        Télécharger État
                                    </a>

                                    <Link
                                        href={route("clients.create")}
                                        className="inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs px-3 capitalize focus:outline-none hover:font-semibold undefined flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500"
                                    >
                                        <i className="bi bi-plus-lg text-md mx-0.5 font-extrabold"></i>
                                        Ajouter Nouveau client
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-3">
                                {flash?.success && (
                                    <Alert color="success" withBorderAccent>
                                        <span>
                                            <span className="font-medium">
                                                Message:
                                            </span>{" "}
                                            {flash.success}
                                        </span>
                                    </Alert>
                                )}
                                <div id={"divDuTableauPrincipal"} className="">
                                    <table className="min-w-full text-sm text-left text-gray-500 border-collapse divide-y divide-gray-200 table-fixed rtl:text-right dark:text-gray-400">
                                        <caption className="my-4 font-bold text-left underline caption-top underline-offset-1">
                                            <i className="text-base font-bold bi bi-info-square-fill me-2"></i>
                                            Tableau des clients
                                        </caption>
                                        <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                            <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Id client
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Nom client
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Prenom client
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Telephone client
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {clients.data.map((client, index) => {
                                                return (
                                                    <tr
                                                        key={index}
                                                        className="text-center bg-white border-b dark:border-gray-700 hover:bg-yellow-200"
                                                    >
                                                        <td
                                                            scope="col"
                                                            className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                checked={''}
                                                                onChange={''}
                                                                className="w-8 h-8 text-red-600 bg-gray-100 border-gray-300 rounded hover:cursor-pointer focus:ring-red-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {client.id_client}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {client.nom_client}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {client.prenom_client}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {
                                                                client.telephone_client
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex flex-row justify-center">
                                                                <div className="relative flex justify-center group">
                                                                    <Link
                                                                        href={route(
                                                                            "clients.edit",
                                                                            client.id_client
                                                                        )}
                                                                        className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                    >
                                                                        <i className="bi bi-pencil-fill"></i>{" "}
                                                                        Modifier
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody> */}
                                        
                                            <PaginatedItemsClients />
                                        
                                    </table>
                                </div>
                                {/* <div className="flex justify-center m-12">
                                    {clients.links && (
                                        <div className="flex space-x-2">
                                            {clients.links.map((link, index) => {
                                                // Translate "Previous" and "Next" to French
                                                const translatedLabel = link.label
                                                    .replace(
                                                        /&laquo;\s*Previous/,
                                                        "&laquo; Précédent"
                                                    )
                                                    .replace(
                                                        /Next\s*&raquo;/,
                                                        "Suivant &raquo;"
                                                    );

                                                return (
                                                    <Link
                                                        key={index}
                                                        href={link.url || "#"}
                                                        dangerouslySetInnerHTML={{
                                                            __html: translatedLabel,
                                                        }}
                                                        className={`px-4 py-2 border rounded-lg transition duration-300 
                                ${
                                    link.active
                                        ? "bg-purple-600 text-white font-semibold shadow-lg"
                                        : "bg-green-100 text-gray-700 hover:bg-purple-500 hover:text-white"
                                }
                                ${
                                    !link.url
                                        ? "cursor-not-allowed opacity-50"
                                        : "cursor-pointer"
                                }`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 2xl:mt-8">
                    <Footer className="fixed bottom-0" />
                </div>
            </AuthenticatedLayout>
        </ClientsContext.Provider>
    );
}
