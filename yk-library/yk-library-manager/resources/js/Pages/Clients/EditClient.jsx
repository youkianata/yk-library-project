import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/app.css";
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useForm } from "@inertiajs/react";
import { HiMail } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function EditClient({ auth, client }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nom_client: client.nom_client,
        telephone_client: client.telephone_client,
        prenom_client: client.prenom_client,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(data);
        post(route("clients.update", client.id_client));
    };

    const handleReset = () => {
        setData({
            nom_client: "",
            telephone_client: "",
            prenom_client: "",
        });
        //reset();
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Title titre="clients" />
            {/* <div className="max-h-screen p-4 overflow-y-auto">
                <div className="m-10">
                    <h2 className="my-5 text-3xl font-bold text-center text-green-700">
                    <i class="bi bi-patch-plus-fill"></i> {" "}
                        Ajouter Nouveau client
                    </h2>
                    <h3 className="mb-10 text-2xl font-semibold text-center">
                        Ajouter toutes les informations
                    </h3>
                    <div className="mb-10">
                        <div>
                            <div>
                                <label
                                    htmlFor="libelleProduit"
                                    className="block text-sm text-blue-500 mt-2 capitalize dark:text-[#878a99]"
                                >
                                    Code du client : *
                                </label>
                                <div className="relative">
                                    <input
                                        id="libelleProduit"
                                        name="libelleProduit"
                                        autoComplete="libelleProduit"
                                        required
                                        type="text"
                                        className="peer py-3 px-4 ps-11 block w-full bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] mt-1 px-12"
                                        placeholder="Saisir le code du client"
                                    />
                                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 font-extrabold text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 12 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="libelleProduit"
                                    className="block text-sm text-blue-500 mt-2 capitalize dark:text-[#878a99]"
                                >
                                    Libellé du client : *
                                </label>
                                <div className="relative">
                                    <input
                                        id="libelleProduit"
                                        name="libelleProduit"
                                        autoComplete="libelleProduit"
                                        required
                                        type="text"
                                        className="peer py-3 px-4 ps-11 block w-full bg-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] mt-1 px-12"
                                        placeholder="Saisir le libellé du client"
                                    />
                                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 font-extrabold text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 12 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="flex justify-center pt-4 pb-16">
                <div class="flex flex-col gap-y-4 bg-white shadow-lg hover:shadow-gray-700 hover:shadow-2xl transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529] w-[95%]">
                    <div class="px-2 py-2 sm:px-6">
                        <div class="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                            <div>
                                <span class="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                    Modifier un client
                                </span>
                            </div>
                            <div class="flex flex-col gap-3 sm:flex-row">
                                <form>
                                    {/* <button
                                        type="submit"
                                        class="inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs px-3 capitalize focus:outline-none hover:font-semibold undefined flex justify-center bg-emeraldLight hover:bg-emeraldDark text-white py-2 dark:bg-[#1d3a3a] dark:hover:dark:bg-[#1d3a3a] dark:text-emerald-500"
                                    >
                                        <i class="bi bi-cloud-arrow-down text-md mx-0.5 font-extrabold"></i>
                                        Télécharger État
                                    </button> */}
                                </form>
                                <Link
                                    href={route("clients.index")}
                                    class="inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs px-3 capitalize focus:outline-none hover:font-semibold undefined flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-list"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                        />
                                    </svg>
                                    {"  "}
                                    Liste des clients
                                </Link>
                            </div>
                        </div>
                        {errors && Object.keys(errors).length > 0 && (
                            <div className="flex-row-reverse mt-3 space-y-2">
                                {Object.keys(errors).map((key, i) => (
                                    <div className="">
                                        <Alert
                                            key={i}
                                            color="failure"
                                            icon={HiInformationCircle}
                                        >
                                            <span className="font-medium">
                                                Error:
                                            </span>{" "}
                                            {errors[key]}
                                        </Alert>
                                    </div>
                                ))}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div>
                                <div
                                    id="divDuTableauPrincipal"
                                    className="relative p-4 overflow-auto sm:rounded-lg"
                                >
                                    <div className="max-h-screen p-4 overflow-y-auto">
                                        <div className="m-10">
                                            <div className="mb-10">
                                                {/* Container for the three inputs */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* First Input */}
                                                    <div className="flex-1">
                                                        <label
                                                            htmlFor="nom_client"
                                                            className="block text-sm text-blue-500 mt-2 capitalize dark:text-[#878a99]"
                                                        >
                                                            Nom du client : *
                                                        </label>
                                                        <div className="relative">
                                                            <input
                                                                value={
                                                                    data.nom_client
                                                                }
                                                                id="codeclient"
                                                                name="nom_client"
                                                                autoComplete="nom_client"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nom_client",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                type="text"
                                                                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] mt-1"
                                                                placeholder="Saisir le code du client"
                                                            />
                                                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
                                                                <svg
                                                                    className="flex-shrink-0 w-5 h-5 font-extrabold text-gray-500"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 12 20"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Second Input */}
                                                    <div className="flex-1">
                                                        <label
                                                            htmlFor="prenom_client"
                                                            className="block text-sm text-blue-500 mt-2 capitalize dark:text-[#878a99]"
                                                        >
                                                            Prénom du client : *
                                                        </label>
                                                        <div className="relative">
                                                            <input
                                                                id="prenom_client"
                                                                value={
                                                                    data.prenom_client
                                                                }
                                                                name="prenom_client"
                                                                autoComplete="prenom_client"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "prenom_client",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                type="text"
                                                                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] mt-1"
                                                                placeholder="Saisir le prénom du client"
                                                            />
                                                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-bookmarks"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                                                                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Third Input (Telephone) */}
                                                    <div className="col-span-2">
                                                        <label
                                                            htmlFor="telephone_client"
                                                            className="block text-sm text-blue-500 mt-2 capitalize dark:text-[#878a99]"
                                                        >
                                                            Téléphone du client
                                                            : *
                                                        </label>
                                                        <div className="relative">
                                                            <input
                                                                id="telephone_client"
                                                                value={
                                                                    data.telephone_client
                                                                }
                                                                name="telephone_client"
                                                                autoComplete="telephone_client"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "telephone_client",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                type="text"
                                                                className="peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] mt-1"
                                                                placeholder="06xxxxxxxx"
                                                            />
                                                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-telephone"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Container for the buttons */}
                                                <div className="flex gap-4 mt-6">
                                                    <button
                                                        type="submit"
                                                        disabled={processing}
                                                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                                    >
                                                        <i className="bi bi-download"></i>{" "}
                                                        {processing
                                                            ? "Modification..."
                                                            : "Modifier"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={handleReset}
                                                        className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
                                                    >
                                                        <i class="bi bi-arrow-clockwise"></i>{" "}
                                                        Réinitialiser
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-3 2xl:mt-8">
                <Footer className="fixed bottom-0" />
            </div>
        </AuthenticatedLayout>
    );
}
