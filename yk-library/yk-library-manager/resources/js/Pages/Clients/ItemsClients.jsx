import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const ItemsClients = ({ items }) => {
    // useEffect(() => {
    //     console.log(selectedClients);
    // }, [selectedClients]);
    
    const [selectedClients, setSelectedClients] = useState([]);
    const handleCheckboxChange = (clientId) => {
        setSelectedClients((prev) =>
            prev.includes(clientId)
                ? prev.filter((id) => id !== clientId)
                : [...prev, clientId]
        );
    };
    return (
        <>
            {items.map((client, index) => {
                return (
                    <tr
                        key={index}
                        className="text-center bg-white border-b dark:border-gray-700 hover:bg-yellow-200"
                    >
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
                            {client.telephone_client}
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
        </>
    );
};

export default ItemsClients;
