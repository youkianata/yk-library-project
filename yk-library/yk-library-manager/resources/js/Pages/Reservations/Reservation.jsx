import Title from '@/Components/Title'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { createContext ,useState } from 'react'
import PaginatedItems from './PaginatedItems';


export const ReservationContext=createContext();

export default function Reservation({auth,reservations}) {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredReservations= reservations.filter((reservation) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            reservation.libelle_service.toLowerCase().includes(lowerCaseSearchTerm) ||
            reservation.nom_client.toString().toLowerCase().includes(lowerCaseSearchTerm)
        );
    }).sort((a, b) => {
        return new Date(b.id_reservation) - new Date(a.id_reservation);
    });    
    
    

    const afficherStatus = (status, couleur) => {   
        const valeurStyle = {
            border: `3px solid ${couleur}` ,
            color: 'white',
            background: couleur
        };

        return (
            <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                <button type='button' style={valeurStyle} className='p-1 rounded'>
                    {status}
                </button>    
            </td>
        )
    }

    const valueContext ={
        currentPage,
        setCurrentPage,
        afficherStatus     
    } 
   return (
            <ReservationContext.Provider value={valueContext}>
                <AuthenticatedLayout auth={auth}>
                   <Title titre={'Reservation'} />
                  <div className="px-2 sm:px-6 py-10">
                      <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                                             
  
                          <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                              <div>
                                  <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                      les Réservations
                                  </span>
                              </div>
                          </div>
  
                          {/* Search Bar */}
                          <div className="flex flex-row gap-2 px-4">
                              
                            <div className="w-full">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Rechercher reservation (Par Libellé service, Nom de client)"
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
                              <div id="divDuTableauPrincipal" className="relative overflow-auto p-4 sm:rounded-lg">
                                  <table className="min-w-full divide-y divide-gray-200 table-fixed text-sm border-collapse text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                      <caption className="caption-top my-4 font-bold underline underline-offset-1 text-left">
                                          <i className="bi bi-info-square-fill text-base me-2 font-bold"></i>
                                          Tableau Général des réservations
                                      </caption>
                                      <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                          <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">id </th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">id demande</th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">Service</th>
                                              
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">id_client </th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">nom </th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">prenom </th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">date reservation </th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">Debut</th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">Fin</th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">commentaire</th>
                                              <th scope="col" className="px-3 py-3 text-center whitespace-nowrap break-all">status </th>
                                              
                                          </tr>
                                      </thead>
                                     
                                         <PaginatedItems reservations={filteredReservations} itemsPerPage={10}/>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </AuthenticatedLayout>
            </ReservationContext.Provider>
              
   )
}
