import TextInput from "@/Components/TextInput";
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { createContext, useEffect, useState } from "react";
import PaginatedItems from "./PaginatedItems";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import InSideInputText from "@/Components/InSideInputText";
import SelectInput from "@/Components/SelectInput";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import TextAera from "@/Components/TextAera";

export const demandeReservationContext = createContext();
export default function DemandeReservation({
    auth,
    demandeReservations,
    statusD,
}) {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 5;
    const [showModalModifyStatus, setShowModalModifyStatus] = useState(false);
    const [status, setStatus] = useState(3);
    const [libelleStatus, setLibelleStatus] = useState(null);
    const [id_demande, setId_demande] = useState(1);
    const [comnt, setComnt] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [commentaire_D_Reservation, setCommentaire_D_Reservation] =
        useState();

    useEffect(() => {
        setCommentaire_D_Reservation(comnt);
    }, [comnt]);

    const afficherStatus = (status, couleur) => {
        const valeurStyle = {
            border: `3px solid ${couleur}`,
            color: "white",
            background: couleur,
        };
        return (
            <td
                scope="row"
                className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all"
            >
                <button
                    type="button"
                    style={valeurStyle}
                    className="p-1 rounded"
                >
                    {status}
                </button>
            </td>
        );
    };

    //function filter
    const filteredDemandeReservations = demandeReservations
        .filter((demandeReservation) => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return (
                demandeReservation.libelle_sr
                    .toLowerCase()
                    .includes(lowerCaseSearchTerm) ||
                demandeReservation.nom_c
                    .toString()
                    .toLowerCase()
                    .includes(lowerCaseSearchTerm)
            );
        })
        .sort((a, b) => new Date(b.id_d) - new Date(a.id_d));

    const valueContext = {
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage,
        setCurrentPage,
        afficherStatus,
        showModalModifyStatus,
        setShowModalModifyStatus,
        id_demande,
        setId_demande,
        status,
        setStatus,
        comnt,
        setComnt,
    };

    //api
    const handleUpdateStatus = async () => {
        setIsLoading(true);
        setMessage("");

        try {
            // First API call - update status
            const statusResponse = await axios.post(
                "/api/demande-reservation/update-status",
                {
                    status: status,
                    id_demande: id_demande,
                    commentaire_d: commentaire_D_Reservation,
                }
            );

            if (statusResponse.data.success) {
                try {
                    // Second API call - store reservation
                    const reservationResponse = await axios.post(
                        "/api/reservation/store",
                        {
                            id_demande: id_demande,
                            status: status,
                            commentaire_d: commentaire_D_Reservation,
                        }
                    );

                    // Check if response has data
                    if (!reservationResponse.data) {
                        throw new Error(
                            "Empty response from reservation store endpoint"
                        );
                    }

                    if (reservationResponse.data.success) {
                        setMessage(
                            "Status updated and reservation stored successfully"
                        );
                    } else {
                        setMessage(
                            reservationResponse.data.message ||
                                "Reservation storage had issues"
                        );
                    }
                } catch (reservationError) {
                    console.error("Detailed reservation store error:", {
                        error: reservationError,
                        response: reservationError.response?.data,
                        status: reservationError.response?.status,
                    });
                    setMessage(
                        reservationError.response?.data?.message ||
                            "Status updated but failed to store reservation"
                    );
                }

                setTimeout(() => {
                    setShowModalModifyStatus(false);
                  
                   router.reload();
                    
                }, 1000);
            }
        } catch (error) {
            // ... existing error handling ...
        } finally {
            setIsLoading(false);
        }
    };

    const modifyStatus = (id_status) => {
        return setStatus(id_status);
    };

    return (
        <demandeReservationContext.Provider value={valueContext}>
            <AuthenticatedLayout auth={auth}>
                <Title titre={" Demande de Reservation"} />
                <div className="px-2 sm:px-6 py-10">
                    <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                        <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                            <div>
                                <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                    les demande de Réservations
                                </span>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex flex-row gap-2 px-4">
                            <div className="w-full">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Rechercher demande de reservation (Par Libellé service, Nom de client)"
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
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white"
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
                                            strokeWidth="2"
                                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Modal show={showModalModifyStatus} maxWidth={"xl"}>
                            <div className="m-10">
                                <div className="mb-10">
                                    <h2 className="text-green-700 text-3xl my-5 text-center font-bold">
                                        {" "}
                                        <i className="bi bi-pencil "></i>{" "}
                                        Modifier le status
                                    </h2>

                                    <div className="flex flex-row justify-around mb-7">
                                        {statusD.map((statuss) => (
                                            <button
                                                style={{
                                                    backgroundColor:
                                                        statuss.couleur_status_demande,
                                                }}
                                                onClick={() =>
                                                    modifyStatus(
                                                        statuss.id_status_demande
                                                    )
                                                }
                                                className="text-white w-[95%] bg-orange-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                {statuss.libelle_status_demande}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-3">
                                        <TextInput
                                            type="text"
                                            placeholder="Ajouter une commentaire"
                                            value={commentaire_D_Reservation}
                                            onChange={(e) =>
                                                setCommentaire_D_Reservation(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-row justify-center items-center">
                                        <div className="w-3/6">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowModalModifyStatus(
                                                        false
                                                    )
                                                }
                                                className="text-white w-[95%] bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-2xl py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                <i className="bi bi-arrow-left-square-fill mr-2"></i>
                                                Retour
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleUpdateStatus}
                                            disabled={isLoading}
                                            className="text-white w-[50%] bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            {isLoading ? (
                                                "Chargement..."
                                            ) : (
                                                <>
                                                    <i className="bi bi-check-square-fill mr-2"></i>
                                                    Valider
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        <div>
                            <div
                                id="divDuTableauPrincipal"
                                className="relative overflow-auto p-4 sm:rounded-lg"
                            >
                                <table className="min-w-full divide-y divide-gray-200 table-fixed text-sm border-collapse text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <caption className="caption-top my-4 font-bold underline underline-offset-1 text-left">
                                        <i className="bi bi-info-square-fill text-base me-2 font-bold"></i>
                                        Tableau Général des réservations
                                    </caption>
                                    <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                        <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                id{" "}
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                nom{" "}
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                pernom{" "}
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                date reservation{" "}
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Debut
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Fin
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                commentaire
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Service
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Prix
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                active
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center whitespace-nowrap break-all"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <PaginatedItems
                                        demandeReservations={
                                            filteredDemandeReservations
                                        }
                                    />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </demandeReservationContext.Provider>
    );
}
