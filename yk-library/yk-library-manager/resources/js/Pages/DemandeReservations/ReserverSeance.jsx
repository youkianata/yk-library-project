import { useEffect, useState } from 'react';
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const ReserverSeance = ({ auth, services, type_demandeurs, jours, intervals, clients, errors }) => {
    const { data, setData, post, processing, reset } = useForm({
        nom_client_demande_reservation: '',
        prenom_client_demande_reservation: '',
        telephone_client_demande_reservation: '',
        horaire_debut_demande_reservation: '',
        horaire_fin_demande_reservation: '',
        commentaire_demande_reservation: '',
        id_service: '',
        id_type_demandeur: '',
        id_jour: '',
        date_demande_reservation: '',
        id_client: '',
    });
    useEffect(() => {
        console.log(jours);
    }, [jours])

    const [availableSlots, setAvailableSlots] = useState([]);
    useEffect(() => {
        if (data.id_type_demandeur == 2) { // If type is "new client"
            setData({
                ...data,
                id_client: null,
            });
        } else if (data.id_type_demandeur == 1) { // If type is "existing client"
            setData({
                ...data,
            });
        }
    }, [data.id_type_demandeur]);

    useEffect(() => {
        const calculateTimeSlots = () => {
            if (!data.id_jour) return [];

            const selectedJour = jours.find(j => j.id_jour == data.id_jour);
            if (!selectedJour) return [];

            setData({
                ...data,
                date_demande_reservation: selectedJour.date_jour
            });

            const interval = intervals.find(i =>
                i.id_interval_jour === selectedJour.id_interval_jour
            )?.valeur_interval_jour || 60;

            const [startHour, startMinute] = selectedJour.heure_debut_jour.split(':').map(Number);
            const [endHour, endMinute] = selectedJour.heure_fin_jour.split(':').map(Number);

            const startTotal = startHour * 60 + startMinute;
            const endTotal = endHour * 60 + endMinute;

            const slots = [];
            for (let minutes = startTotal; minutes < endTotal; minutes += interval) {
                const end = Math.min(minutes + interval, endTotal);
                const startTime = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
                const endTime = `${String(Math.floor(end / 60)).padStart(2, '0')}:${String(end % 60).padStart(2, '0')}`;

                slots.push({
                    horaire_debut_demande_reservation: startTime,
                    horaire_fin_demande_reservation: endTime
                });
            }

            return slots;
        };

        setAvailableSlots(calculateTimeSlots());
    }, [data.id_jour]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('reservations.demande_store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Title titre="Ajouter une Demande de Réservation" />

            <div className="w-[100%] mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h3 className="mb-6 text-lg font-medium text-blue-600 dark:text-blue-400">
                        Formulaire de Réservation
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Client Information Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-1">
                                <InputLabel htmlFor="nom_client_demande_reservation" value="Nom du client *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <TextInput
                                        id="nom_client_demande_reservation"
                                        value={data.nom_client_demande_reservation}
                                        onChange={(e) => setData('nom_client_demande_reservation', e.target.value)}
                                        className="w-full pl-10"
                                    />
                                </div>
                                <InputError message={errors.nom_client_demande_reservation} />
                            </div>

                            <div className="space-y-1">
                                <InputLabel htmlFor="prenom_client_demande_reservation" value="Prénom du client *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <TextInput
                                        id="prenom_client_demande_reservation"
                                        value={data.prenom_client_demande_reservation}
                                        onChange={(e) => setData('prenom_client_demande_reservation', e.target.value)}
                                        className="w-full pl-10"
                                    />
                                </div>
                                <InputError message={errors.prenom_client_demande_reservation} />
                            </div>
                        </div>

                        {/* Service and Type Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-1">
                                <InputLabel htmlFor="telephone_client_demande_reservation" value="Téléphone *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <TextInput
                                        id="telephone_client_demande_reservation"
                                        type="tel"
                                        value={data.telephone_client_demande_reservation}
                                        onChange={(e) => setData('telephone_client_demande_reservation', e.target.value)}
                                        className="w-full pl-10"
                                        maxLength="15"
                                    />
                                </div>
                                <InputError message={errors.telephone_client_demande_reservation} />
                            </div>
                            <div className="space-y-1">
                                <InputLabel htmlFor="id_service" value="Service *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194-1.238-1.13-2.116-2.37-2.116a2.184 2.184 0 00-2.37 2.116" />
                                    </svg>
                                    <select
                                        id="id_service"
                                        value={data.id_service}
                                        onChange={(e) => setData('id_service', e.target.value)}
                                        className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        {services.map((service) => (
                                            <option key={service.id_service} value={service.id_service}>
                                                {service.libelle_service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <InputError message={errors.id_service} />
                            </div>

                            <div className="space-y-1">
                                <InputLabel htmlFor="id_type_demandeur" value="Type de demandeur *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <select
                                        id="id_type_demandeur"
                                        value={data.id_type_demandeur}
                                        onChange={(e) => setData('id_type_demandeur', e.target.value)}
                                        className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionnez un type</option>
                                        {type_demandeurs.map((type) => (
                                            <option key={type.id_type_demandeur} value={type.id_type_demandeur}>
                                                {type.libelle_type_demandeur}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <InputError message={errors.id_type_demandeur} />
                            </div>
                            <div>
                            <InputLabel htmlFor="id_client" value="client *" />


                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <select
                                        id="id_client"
                                        value={data.id_client}
                                        onChange={(e) => setData('id_client', e.target.value)}
                                        className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >

                                        <option value="">Sélectionnez un client</option>
                                        {clients.map((client) => (
                                            <option key={client.id_client} value={client.id_client}>
                                                {data.id_type_demandeur == 1 &&
                                                <>
                                                {client.nom_client} {client.prenom_client}
                                                </>
                                            }
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <InputError message={errors.id_type_demandeur} />
                            </div>
                        </div>

                        {/* Jour Selection */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-1">
                                <InputLabel htmlFor="id_jour" value="Jour *" />
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <select
                                        id="id_jour"
                                        value={data.id_jour}
                                        onChange={(e) => setData('id_jour', e.target.value)}
                                        className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionnez un jour</option>
                                        {jours.map((jour) => (
                                            <option key={jour.id_jour} value={jour.id_jour}>
                                                {new Date(jour.date_jour).toLocaleDateString()} - {jour.heure_debut_jour} à {jour.heure_fin_jour}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <InputError message={errors.id_jour} />
                                <InputError message={errors.date_demande_reservation} />
                            </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div className="space-y-1">
                            <InputLabel value="Créneau horaire *" />
                            {data.id_jour ? (
                                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                                    {availableSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setData({
                                                ...data,
                                                horaire_debut_demande_reservation: slot.horaire_debut_demande_reservation,
                                                horaire_fin_demande_reservation: slot.horaire_fin_demande_reservation
                                            })}
                                            className={`p-2 text-sm rounded-md border transition-colors ${
                                                data.horaire_debut_demande_reservation === slot.horaire_debut_demande_reservation
                                                    ? 'bg-blue-500 text-white border-blue-600'
                                                    : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                                            }`}
                                        >
                                            {slot.horaire_debut_demande_reservation} - {slot.horaire_fin_demande_reservation}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-sm text-red-500">
                                    Sélectionnez d'abord un jour
                                </div>
                            )}
                            <InputError message={errors.horaire_debut_demande_reservation} />
                            <InputError message={errors.horaire_fin_demande_reservation} />
                        </div>

                        {/* Comment Field */}
                        <div className="space-y-1">
                            <InputLabel htmlFor="commentaire_demande_reservation" value="Commentaire" />
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 text-gray-400 left-3 top-4 dark:text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <textarea
                                    id="commentaire_demande_reservation"
                                    value={data.commentaire_demande_reservation}
                                    onChange={(e) => setData('commentaire_demande_reservation', e.target.value)}
                                    className="w-full pl-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    rows="3"
                                    maxLength="500"
                                />
                            </div>
                            <InputError message={errors.commentaire_demande_reservation} />
                        </div>

                        {/* Hidden Fields */}
                        <input type="hidden" name="date_demande_reservation" value={data.date_demande_reservation} />

                        {/* Submit Button */}
                        <div className="flex justify-end mt-8">
                            <SecondaryButton
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                {processing ? 'Enregistrement...' : 'Enregistrer la Réservation'}
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
};

export default ReserverSeance;
