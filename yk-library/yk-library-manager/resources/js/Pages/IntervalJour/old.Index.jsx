import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import { Link } from '@inertiajs/react';
// import "bootstrap-icons/bootstrap-icons.css";

export default function Index({ auth, intervals}) {
    console.log(intervals)
  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Tableau des intervals" />
            <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
                <div className="flex flex-col gap-y-4 bg-white shadow-lg hover:shadow-gray-700 hover:shadow-2xl transition ease-in-out duration-1000 rounded-lg dark:bg-[#212529] w-full max-w-[95%]">
                    <div className="px-2 py-10 sm:px-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 pb-6 border-b border-dashed sm:items-center dark:border-b-[#32383e]">
                            <span className="text-blue-500 text-xl font-bold capitalize dark:text-[#ced4da]">
                                Liste des intervals de travail
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between px-4 gap-4">
                            <form>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs sm:text-sm px-3 capitalize focus:outline-none hover:font-semibold flex justify-center bg-emeraldLight hover:bg-emeraldDark text-white py-2 dark:bg-[#1d3a3a] dark:hover:dark:bg-[#1d3a3a] dark:text-emerald-500"
                                >
                                    <i className="bi bi-cloud-arrow-down text-md mx-0.5 font-extrabold"></i>
                                    Télécharger État
                                </button>
                            </form>
                            <Link
                                href={route('intervals.ajouterJour')}
                                className="w-full sm:w-auto inline-flex items-center p-1 shadow-lg border border-transparent text-black rounded-md font-semibold text-xs sm:text-sm px-3 capitalize focus:outline-none hover:font-semibold flex justify-center bg-blueLight hover:bg-blueDark text-white py-2 dark:bg-[#223644] dark:hover:dark:bg-[#223644] dark:text-blue-500"
                            >
                                <i className="bi bi-plus-lg text-md mx-0.5 font-extrabold"></i>
                                Ajouter Nouveau interval
                            </Link>
                        </div>

                        <div className="relative p-4 overflow-x-auto">
                            <table className="min-w-full text-sm text-left text-gray-500 border-collapse divide-y divide-gray-200 table-fixed rtl:text-right dark:text-gray-400">
                                <caption className="my-4 font-bold text-left underline caption-top underline-offset-1">
                                    <i className="text-base font-bold bi bi-info-square-fill me-2"></i>
                                    Tableau des intervals
                                </caption>
                                <thead className="top-0 sticky text-xs text-black font-bold uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                    <tr className="bg-[#F3F6F9] text-[#878a99] dark:border-gray-700 dark:bg-[#282b2e]">
                                        <th className="px-3 py-3 text-center">ID </th>
                                        <th className="px-3 py-3 text-center">libelle</th>
                                        <th className="px-3 py-3 text-center">valeur</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {intervals.map((interval) => (
                                        <tr key={interval.id_interval_jour} className="text-center bg-white border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {interval.id_interval_jour}
                                            </td>
                                            <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                               {interval.libelle_interval_jour}
                                            </td>
                                            <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {interval.valeur_interval_jour}
                                            </td>
                                            <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex justify-center space-x-2">
                                                    <Link
                                                        href={route('intervals.editJour', {id: interval.id_interval_jour})}
                                                        className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-full px-3 py-1.5 text-sm"
                                                    >
                                                        <i className="bi bi-pencil-fill mr-1"></i>
                                                        Modifier
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3 2xl:mt-8 pb-16 sm:pb-0">
                <Footer className="fixed bottom-0" />
            </div>
        </AuthenticatedLayout>
    );
}