import react, {useState, useEffect, useRef } from 'react';
import ModalForTable from './ModalForTable';
import InSideInputText from './InSideInputText';
import { useFocusTrap } from 'focus-trap-react';
import { Link } from '@inertiajs/react';

/**
 *
 * J'ai utilisé le Item du package react-paginate
 */
export default function Items2({ currentItems, compteur }) {

    return (
        <>
            {currentItems.map((BonDelivraison, index) => (

                <tr key={index}>
                    <td className='px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all'>
                        {BonDelivraison.delivery_note_ref}
                    </td>
                    <td className='px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all'>
                        {BonDelivraison.delivery_note_delivered ?
                         <button className='text-green-500 font-bold text-sm p-0.5 border-2 border-green-500 rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'><i className="bi bi-exclamation-circle-fill text-sm mx-0.5 font-extrabolder "></i>{"Reçu"}</button>
                         :
                         <button className='text-red-500 font-bold p-0.5 text-sm border-2 border-red-500 rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'><i className="bi bi-exclamation-circle-fill text-sm mx-0.5 font-extrabolder "></i>{"Non reçu"}</button>
                         }
                        </td>
                    <td className='px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all'>
                        {new Date(BonDelivraison.delivery_note_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </td>
                    <td className='px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all'>
                        {new Date(BonDelivraison.delivery_note_import_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </td>
                    <td className='px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all'>
                    <a href={route('BonDeLivraisonpdf', { n: BonDelivraison.delivery_note_ref })}>
                            <i className="bi bi-download text-green-600 mx-3 text-2xl font-bold hover:cursor-pointer z-0"></i>
                            <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Télécharger PDF</span>
                    </a>
                    </td>
                </tr>
            ))}
        </>
    );
}

