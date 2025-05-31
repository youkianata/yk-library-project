import React, { useContext } from 'react';
import { ReservationContext } from './Reservation';

const Items = ({ items }) => {
   const {
    afficherStatus
    }= useContext(ReservationContext);
 
    return (
        <>
         
         {items.map((reservation, index) => (
                <tr
                    key={reservation.id_reservation}
                    className={`border-b dark:border-gray-700 hover:shadow-2xl
                        ${index % 2 === 0 ? "bg-blue-200 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}
                        hover:bg-yellow-300 dark:hover:bg-[#1f2937]`}
                >
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.id_reservation}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.id_demande_reservation}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.libelle_service}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.id_client}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.nom_client}
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.prenom_client}
                    </td>
                   
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                            {new Date(reservation.date_reservation).toLocaleDateString('fr-FR')}
                        </td>
                        <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                            {new Date(reservation.horaire_debut_reservation).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                            {new Date(reservation.horaire_fin_reservation).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {reservation.commentaire_reservation}
                        </td>
                        {
                            afficherStatus(reservation.libelle_status,reservation.couleur_status)
                        }
                                  
                </tr>
            ))}                         
        </>
    );
};

export default Items;