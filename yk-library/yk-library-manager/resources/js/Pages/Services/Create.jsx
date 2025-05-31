import SlateButton from "@/Components/ButtonSlate";
import DselectInput from "@/Components/DselectInput";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router, useForm } from "@inertiajs/react";
import React from "react";

export default function Create({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
    code_service: "",
    libelle_service: "",
    prix_service: "",
    actif_service: true,
});

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("services.store"));
    };

    return (
        <AuthenticatedLayout auth={auth}>
              <Title titre={'Ajouter Services'} />
            <div className="px-2 sm:px-6 py-10">
                <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                    <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b  border-dashed sm:items-center dark:border-b-[#32383e]">
                        <div>
                            <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                Ajouter des Services
                            </span>
                        </div>

                        <div className="flex sm:flex-row flex-col gap-3">
                            {/*onClick={(e) => setShowModalAjoutNouvelleProduit(true)} */}
                            <Link
                                href={route("services.index")}
                                className="flex justify-center items-center  rounded-md font-semibold text-xs px-3 capitalize  focus:outline-none  hover:font-semibold bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500 "
                            >
                                <i className="bi bi-plus-lg text-md mx-0.5 font-extrabold "></i>
                                <svg
                                    class="w-6 h-6 text-white dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                                    />
                                </svg>
                                Liste des services
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="relative overflow-auto p-4 sm:rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-1">
                                        <InputLabel 
                                            value="Code de service" 
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
                                        />

                                        {/* Wrapper div to position the icon inside the input */}
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                            {/* SVG Icon */}
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V9a3 3 0 0 0-3-3h-3m1.5-2-2 2 2 2"/>
                                            </svg>
                                            </span>

                                            <TextInput
                                            type="text"
                                            value={data.code_service}
                                            onChange={(e) => setData("code_service", e.target.value)}
                                            placeholder="Code de service"
                                            className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                            />
                                        </div>

                                        {errors.code_service && <div className="text-red-500">{errors.code_service}</div>}
                                        </div>



                                        <div className="w-full">
                                                                                    
                                            <InputLabel 
                                                value="Libelle de service" 
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" 
                                            />

                                            {/* Wrapper div for positioning */}
                                            <div className="relative">
                                                {/* Icon inside input */}
                                                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                                <svg 
                                                    className="w-[22px] h-[22px] text-gray-800 dark:text-white" 
                                                    aria-hidden="true" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="24" 
                                                    height="24" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                    stroke="currentColor" 
                                                    stroke-linejoin="round" 
                                                    stroke-width="1.1" 
                                                    d="m7.14284 11 4.99996-6 5 6m-9.99996 0h-3v8H20.1428v-8h-3m-9.99996 0H3.14285l3-4h4.33735l-3.33736 4Zm9.99996 0h4l-3-4h-4.3374l3.3374 4Zm-3 2c0 1.1046-.8954 2-2 2-1.1045 0-2-.8954-2-2s.8955-2 2-2c1.1046 0 2 .8954 2 2Z"
                                                    />
                                                </svg>
                                                </div>

                                                {/* Input field with left padding to prevent overlap */}
                                                <TextInput 
                                                type="text"
                                                value={data.libelle_service}
                                                onChange={(e) => setData("libelle_service", e.target.value)}
                                                placeholder="Libelle de service"
                                                className="pl-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                                />
                                            </div>

                                            {errors.libelle_service && <div className="text-red-500">{errors.libelle_service}</div>}
                                            </div>



                                    <div class="w-full">
                                    <InputLabel value='Prix' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                           
                                        <TextInput type="number"
                                        value={data.prix_service}
                                        onChange={(e) => setData("prix_service", e.target.value)}
                                        placeholder="DH   Prix"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required />
          
                                    {errors.prix_service && <div className="text-red-500">{errors.prix_service}</div>}
                                    </div>

                                    <div>
                                        <InputLabel value='Active' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                                       
                                        <DselectInput value={data.actif_service} onChange={(e) => setData("actif_service", e.target.value === "true")} >
                                            <option value="true">Oui</option>
                                            <option value="false">Non</option>
                                        </DselectInput>

                                    </div>
                                </div>
                                <div className="py-5 flex items-center space-x-40 justify-center ">
                                
                                <button 
                                        type="button"
                                        onClick={() => reset()}
                                        className="bg-blueLight hover:bg-blueDark text-white px-5 py-2.5 rounded-full flex items-center gap-2"
                                    >
                                        <i className="bi bi-arrow-clockwise"></i> Réinitialiser
                                    </button>

                                    <button
                                    type="submit"
                                    className="bg-blueLight hover:bg-blueDark text-white px-5 py-2.5 rounded-full flex items-center gap-2"
                                    disabled={processing}
                                >
                                    <svg className="w-[22px] h-[22px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M5 12h14m-7 7V5"/>
                                    </svg>
                                    Ajouter
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
