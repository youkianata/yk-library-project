import Counter from '../../../Components/Counter';
export default function Partial1 ({ colisUtilisateurEnCours, colisUtilisateurLivreRecemment }){

    return (
<div className='bg-white sm:col-span-2 xl:col-span-1   p-4 flex flex-col gap-3 hover:peer rounded-md hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
     <div>
          <span className='uppercase text-md font-bold text-blue-500 dark:text-[#ced4da]'> colis </span>
     </div>
     <div className='flex flex-row justify-between items-center'>
          <div>
               <span className='capitalize text-3xl font-bold text-blue-950 counter dark:text-[#0ab39c] ' ><Counter start={0} end={(colisUtilisateurEnCours.length + colisUtilisateurLivreRecemment.length)} delay={1} /></span>
          </div>
          <div className="bg-green-100 px-3.5 py-3.5 rounded-md shadow peer-invalid:bg-red-100 dark:bg-[#1d3a3a]">
               <svg class="w-5 h-5 text-emerald-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
               </svg>
          </div>
     </div>
     <div>
          <span className=' text-sm font-bold text-bluelight dark:text-gray-400  '> {colisUtilisateurLivreRecemment.length <= 1 ? colisUtilisateurLivreRecemment.length + ' livré' : colisUtilisateurLivreRecemment.length + ' livrés'} de {colisUtilisateurEnCours.length + colisUtilisateurLivreRecemment.length} ({(colisUtilisateurLivreRecemment.length / (colisUtilisateurEnCours.length + colisUtilisateurLivreRecemment.length) * 100).toFixed(2)}%) </span>
     </div>
</div>
    )
}
