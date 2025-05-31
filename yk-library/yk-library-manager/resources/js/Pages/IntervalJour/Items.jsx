import react, {useState, useContext, useEffect  } from 'react';
import { Link, router } from '@inertiajs/react';


/**
 *
 * J'ai utilisé le Item du package react-paginate
 */


export default function Items({currentItems}) {

    function parseTime(time){
        const result = `${Math.floor(time/60)%24 } h ${time%60} min`
        return result
    }

    return (
      <>

        {currentItems.length > 0  ?
          currentItems.map((interval, index) => {
            return(

                <tr
                key={interval.id_interval_jour}
                className={`${
                  index % 2 === 0
                    ? "bg-blue-200 hover:shadow-2xl hover:bg-yellow-200"
                    : "bg-white hover:shadow-2xl hover:bg-yellow-200"
                } border-b dark:hover:bg-[#1f2937] dark:border-gray-700`}
                >


                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        {
                            interval.id_interval_jour ? interval.id_interval_jour : ""
                        }
                    </td>

                    <td scope="row" className="font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                        {
                            interval.libelle_interval_jour? interval.libelle_interval_jour : "aucune libelle"
                        }
                    </td>

                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">
                    {
                            parseTime(interval.valeur_interval_jour)
                        }
                    </td>

                    <td scope="row" className="px-3 py-3 font-medium text-center text-black break-all dark:text-white whitespace-nowrap">

                        <Link className='text-white bg-yellow-400 hover:bg-yellow-500 rounded-full px-3 py-1.5 text-sm' href={route('intervals.edit', [interval.id_interval_jour])}>edit</Link>
                    </td>

                </tr>
            )

        }

        )
        :
                <tr>
                    <td colSpan={20} className='py-5 font-semibold text-center'>
                        Aucune entrée correspondant
                    </td>
                </tr>
        }
      </>
    );
  }
