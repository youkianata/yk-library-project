import React from "react";
import { Link } from "@inertiajs/react";

const ItemsRoles = ({ items }) => {
    return (
        <>
            {/* {items.map((service, index) => (
                <tr
                    key={service.id_service}
                    className={`border-b dark:border-gray-700 hover:shadow-2xl
                        ${index % 2 === 0 ? "bg-blue-200 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}
                        hover:bg-yellow-300 dark:hover:bg-[#1f2937]`}
                >
                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        {service.code_service}
                    </td>
                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        {service.libelle_service}
                    </td>
                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        {service.prix_service}DH
                    </td>
                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={service.actif_service}
                                onChange={() => toggleStatus(service.id_service)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700
                                peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800
                                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                                peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5
                                after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                                after:h-5 after:w-5 after:transition-all dark:border-gray-600
                                peer-checked:bg-green-600 dark:peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </td>
                    <td>
                        <Link
                            href={route("services.edit", service.id_service)}
                            className="text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                            <i className="text-white bi bi-pencil"></i> Modifier
                        </Link>
                    </td>
                </tr>
            ))} */}

            {items.map((role, index) => {
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
                                        href={route("roles.edit", role.id_role)}
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
        </>
    );
};

export default ItemsRoles;
