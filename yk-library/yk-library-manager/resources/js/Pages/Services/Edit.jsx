import SlateButton from "@/Components/ButtonSlate";
import DselectInput from "@/Components/DselectInput";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Title from "@/Components/Title";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Edit({ auth, service }) {
    const { data, setData, put, processing, errors } = useForm({
        code_service: service.code_service,
        libelle_service: service.libelle_service,
        prix_service: service.prix_service,
        actif_service: service.actif_service,
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("services.update", service.id_service));
    };

    return (
                <AuthenticatedLayout auth={auth}>
                    <Title titre={'Editer'} />
                    <div className="px-2 py-10 sm:px-6">
                        <div className="flex flex-col gap-y-4 bg-white hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529]">
                            <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b  border-dashed sm:items-center dark:border-b-[#32383e]">
                                <div>
                                    <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                        Ajouter des Services
                                    </span>
                                </div>
        
                                <div className="flex flex-col gap-3 sm:flex-row">
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
                                <div className="relative p-4 overflow-auto sm:rounded-lg">
                                    <form onSubmit={handleSubmit}>
                                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                            <div class="sm:col-span-1">
                                            
                                             
                                             <InputLabel value='Code de service' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                                            <TextInput type="text"
                                                value={data.code_service}
                                                onChange={(e) => setData("code_service", e.target.value)}
                                                placeholder="Code de service"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required />
        
                                            {errors.code_service && <div className="text-red-500">{errors.code_service}</div>}
                                            </div>
        
                                            <div class="w-full">
                                             <InputLabel value='Libelle de service' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                                   
                                            <TextInput type="text"
                                                value={data.libelle_service}
                                                onChange={(e) => setData("libelle_service", e.target.value)}
                                                placeholder="Libelle de service"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required />
                                            {errors.libelle_service && <div className="text-red-500">{errors.libelle_service}</div>}
                                              
                                            </div>
                                            <div class="w-full">
                                            <InputLabel value='Prix' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                                   
                                                <TextInput type="number"
                                                value={data.prix_service}
                                                onChange={(e) => setData("prix_service", e.target.value)}
                                                placeholder="Prix"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required />
                  
                                            {errors.prix_service && <div className="text-red-500">{errors.prix_service}</div>}
                                            </div>
        
                                            <div>
                                                <InputLabel value='Active' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                                               
                                                <DselectInput onClick={(e) => setData("actif_service", e.target.value === "true")} >
                                                    <option value="true" selected={data.actif_service === 1}>Oui</option>
                                                    <option value="false" selected={data.actif_service === 0}>Non</option>
                                                </DselectInput>
        
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center py-5">
                                        <button
                                            type="submit"
                                            className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-full "
                                            disabled={processing}
                                        >
                                            Enregistrer
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
