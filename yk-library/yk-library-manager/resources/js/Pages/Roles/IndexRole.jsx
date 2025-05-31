import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/app.css";
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import { Table } from "flowbite-react";
import { createContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Alert } from "flowbite-react";
import PaginatedItemsRoles from "./PaginatedItemsRoles";
export const RolesContext = createContext();

export default function IndexRole({ auth, roles }) {
    // useEffect(()=> {
    //     console.log(roles);
    // })
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 5;

    const { flash } = usePage().props;
    
    const contextValue = {
        roles: roles,
        itemsPerPage: 10,
        currentPage,
        setCurrentPage,
        itemsPerPage :ITEMS_PER_PAGE,
    }


    return (
        <RolesContext.Provider value={contextValue}>
            <AuthenticatedLayout auth={auth}>
                <Title titre="Tableau des Roles" />

                {/* Centered Form Container */}
                <div className="flex justify-center pt-4 pb-16">
                    <div className="flex flex-col gap-y-4 bg-white shadow-lg hover:shadow-gray-700 hover:shadow-2xl transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529] w-[95%]">
                        <div className="px-2 py-2 sm:px-6">
                            <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                                <div>
                                    <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                        Liste Des Roles
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <form>
                                        {/* <button
                                            type="submit"
                                            className="inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs px-3 capitalize focus:outline-none hover:font-semibold undefined flex justify-center bg-emeraldLight hover:bg-emeraldDark text-white py-2 dark:bg-[#1d3a3a] dark:hover:dark:bg-[#1d3a3a] dark:text-emerald-500"
                                        >
                                            <i className="bi bi-cloud-arrow-down text-md mx-0.5 font-extrabold"></i>
                                            Télécharger État
                                        </button> */}
                                    </form>
                                    <Link
                                        href={route("roles.create")}
                                        className="inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs px-3 capitalize focus:outline-none hover:font-semibold undefined flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500"
                                    >
                                        <i className="bi bi-plus-lg text-md mx-0.5 font-extrabold"></i>
                                        Ajouter Nouveau Role
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
                                            Tableau des roles
                                        </caption>
                                        <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                            <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Id role
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    code role
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-center break-all whitespace-nowrap"
                                                >
                                                    Libellé role
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
                                            {roles.data.map((role, index) => {
                                                return (
                                                    <tr
                                                        key={index}
                                                        className="text-center bg-white border-b dark:border-gray-700 hover:bg-yellow-200"
                                                
                                                >
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {role.id_role}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {role.code_role}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            {role.libelle_role}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex flex-row justify-center">
                                                                <div className="relative flex justify-center group">
                                                                    <Link
                                                                        href={route('roles.edit', role.id_role)}
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
                                        <PaginatedItemsRoles />
                                    </table>
                                    {/* <div className="flex justify-center m-12">
                                    {roles.links && (
                                        <div className="flex space-x-2">
                                            {roles.links.map((link, index) => {
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
                </div>

                <div className="mt-3 2xl:mt-8">
                    <Footer className="fixed bottom-0" />
                </div>
            </AuthenticatedLayout>
        </RolesContext.Provider>
    );
}
