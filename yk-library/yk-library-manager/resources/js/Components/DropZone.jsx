import React, {useCallback ,useState} from 'react'
import {useDropzone} from 'react-dropzone'
import SlateButton from '@/Components/ButtonSlate';

export default function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
         setShowFile(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 const [showFile , setShowFile]=useState("")
 let changerFile=()=>{
    setShowFile("")
}
  return (
    <>
    <div {...getRootProps()} className='bg-slate-100  py-10 px-8  rounded-lg w-5/6   sm:w-3/4   md:w-3/5 shadow-lg cursor-pointer dark:bg-[#282b2e]' >
      <input {...getInputProps()} />
      {
        showFile ===""?
                            isDragActive ?
                                <div className='flex flex-col items-center gap-y-2 '>
                                    <svg class="w-[47px] h-[47px]  dark:text-[#ced4da] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p  className='text-sm md:text-base lg:text-lg text-blue-950 font-black dark:text-[#ced4da]'>Déposez les fichiers ici...</p>
                                </div>
                                :
                                <div className='flex flex-col items-center gap-y-2'>
                                    <svg class="w-[47px] h-[47px] text-blue-800 dark:text-[#ced4da]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className='text-sm md:text-base lg:text-lg text-blue-950 font-black dark:text-[#ced4da]'>Faites glisser et déposez un fichier <span className='text-blue-800'>Exel</span>  ici</p>
                                    <p className='text-xs md:text-sm  text-gray-400'>Seuls les fichiers Excel sont autorisés</p>

                                </div>
                       :
                            <div className='flex flex-col items-center gap-y-2 '>
                                    {showFile.map((elem)=>
                                     elem.name.endsWith(".xlsx")?
                                            <div className='flex flex-col items-center gap-y-2'>
                                                    <svg class="w-[47px] h-[47px] text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                    </svg>
                                                    <p className='text-sm  md:text-base lg:text-lg text-blue-950 font-black dark:text-[#ced4da]'>Votre fichier <span className='text-green-500'>Exel</span> a été téléchargé avec succès  </p>
                                                    <p className='text-xs md:text-sm  text-gray-400'>{elem.name}</p>
                                            </div>
                                       :
                                            <div className='flex flex-col items-center gap-y-2'>
                                                    <svg class="w-[47px] h-[47px] text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                    </svg>
                                                    <p className='text-sm  md:text-base lg:text-lg text-blue-950 font-black dark:text-[#ced4da]'>Le fichier que vous avez fourni n'est pas au format <span className='text-red-500'>Excel</span></p>

                                            </div>

                                    )

}
                            </div>

      }
    </div>
    {
                showFile.length !==0&&

            <SlateButton className='bg-red-400 text-white flex flex-row mt-4 p-2   gap-x-2 dark:bg-[#402e2e] dark:text-red-500' onClick={changerFile}>
                    <svg class="w-4 h-4 text-white dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                    </svg>
                    changer
            </SlateButton>
    }
    </>
  )
}
