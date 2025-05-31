import React, { useContext } from 'react';

import { demandeReservationContext } from './DemandeReservation';

const Items = ({ items }) => {
    const {afficherStatus,
        showModalModifyStatus,
        setShowModalModifyStatus,
        id_demande,
        setId_demande,
        status,
        setStatus,
        setComnt,
        comnt
    }= useContext(demandeReservationContext);

    return (
        <>
                {items.map((demande, index) => (
                <tr
                    key={demande.id_d}
                    className={`border-b dark:border-gray-700 hover:shadow-2xl
                        ${index % 2 === 0 ? "bg-blue-200 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}
                        hover:bg-yellow-300 dark:hover:bg-[#1f2937]`}
                >
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.id_d}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.nom_c}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.prenom_c}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.date_r}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.h_d}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.h_f}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">

                        {demande.comnt}

                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.libelle_sr}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {demande.prix_s}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        { demande.active ? 'active' :'disactive'}
                    </td>
                    {
                        afficherStatus(demande.libelle_status,demande.couleur)
                    }
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        <button type='button' className='text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 
                        focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700

                        dark:focus:ring-green-800' onClick={()=>{setShowModalModifyStatus(true);setId_demande(demande.id_d);setComnt(demande.comnt)}}>
                            Modifier
                        </button>
                      
                    </td>
                    
                </tr>
            ))}
        </>
    );
};

export default Items;