import react, {useState, useEffect, useRef } from 'react';
import ModalForTable from './ModalForTable';
import InSideInputText from './InSideInputText';
import { useFocusTrap } from 'focus-trap-react';

/**
 *
 * J'ai utilisé le Item du package react-paginate
 */
export default function Items({ currentItems, compteur, reclamations, status, villes, etats, historiquesColis, callBackGestionProblemModal3Etape2 }) {



    const [listeReclamations, setListeReclamations] = useState([]);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    // Des variables qui concernent la partie réclamation (Modal N°3):
    const [reclamation, setReclamation] = useState(0);
    const [nouveauPrix, setNouveauPrix] = useState(0);
    const [nouveauNomDestinataire, setNouveauNomDestinataire] = useState('');
    const [detailsNouveauDestinataire, setDetailsNouveauDestinaire] = useState('');

    // Des fonctions qui concernent la partie réclamation (Modal N°3):
    const handleNouveauPrix = (nombre) => {
        if(nombre < 0){
            setNouveauPrix(0);
        }
        else{
            setNouveauPrix(nombre);
        }
    }
    const handleNomNouveauDestinataire = (nom) => {
        setNouveauNomDestinataire(nom);
    }

    const [modal2HistoriquesColis, setModal2HistoriqesColis] = useState([]);
    const [titreModal2, setTitreModal2] = useState('');

    const [modal3Reclamation, setModal3Reclamation] = useState('');
    const [nouveauPrixPourModal3, setNouveauPrixPourModal3] = useState(0);

    const [elementCache1Modal3, setElementCache1Modal3] = useState('hidden');
    const [elementCache2Modal3, setElementCache2Modal3] = useState('hidden');
    const [elementCache3Modal3, setElementCache3Modal3] = useState('hidden');
    const [elementCache4Modal3, setElementCache4Modal3] = useState('hidden');


    const handleModal1 = () => {
        callBackGestionProblemModal3Etape2(false);
        setShowModal1(true);
    }

    const closeModal1 = () => {
        callBackGestionProblemModal3Etape2(true);
        setShowModal1(false);
    }

    const handleModal2 = (id_colis, code_colis) => {
        callBackGestionProblemModal3Etape2(false);
        setTitreModal2(code_colis);
        const tableauTemp = [];
        for(let i=0; i<historiquesColis.length; i++){
            if(historiquesColis[i].parcel_history_parcel === id_colis){
                tableauTemp.push(historiquesColis[i]);
            }
        }
        setModal2HistoriqesColis(tableauTemp);
        setShowModal2(true);
    }

    const closeModal2 = () => {
        callBackGestionProblemModal3Etape2(true);
        setShowModal2(false);
    }

    const handleModal3 = (parcel) => {

        callBackGestionProblemModal3Etape2(false);
        setReclamation(0);
        setModal3Reclamation(parcel);
        setShowModal3(true);
    }

    const closeModal3 = () => {
        callBackGestionProblemModal3Etape2(true);
        setReclamation(0);
        setElementCache1Modal3('hidden');
        setElementCache2Modal3('hidden');
        setElementCache3Modal3('hidden');
        setElementCache4Modal3('hidden');
        setShowModal3(false);
        setNouveauPrix(0);
        setNouveauNomDestinataire('');
    }

    function couleurPlusDouce(couleur, pourcentage) {
        couleur = couleur.substring(1);
        var num = parseInt(couleur, 16),
            amt = Math.round(2.55 * pourcentage),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
    }

    const definitionFormeDuBouttonReclamation = (reclamationObj) => {
        if ((reclamationObj) && (reclamationObj['claims_statut'] == 1)){
            return <button className='text-red-500 font-bold p-0.5 text-sm border-2 border-red-500 rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'><i className="bi bi-exclamation-circle-fill text-sm mx-0.5 font-extrabolder "></i>{"En cours"}</button>
        }
        else if((reclamationObj) && (reclamationObj['claims_statut'] == 3)) {
            return <button className='text-green-500 font-bold text-sm p-0.5 border-2 border-green-500 rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'><i className="bi bi-exclamation-circle-fill text-sm mx-0.5 font-extrabolder "></i>{"Traitée"}</button>
        }
        else{
            return <button className='text-[#25A0D7] font-bold text-sm p-0.5 border-2 border-[#25A0D7] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'><i className="bi bi-exclamation-circle-fill text-sm mx-0.5 font-extrabolder "></i>{"Aucune"}</button>
        }
    }

    const definitionFormeDuBouttonStatut = (statutObj) => {
        if (statutObj == 'NEW_PARCEL'){
            return <button style={{backgroundColor : 'white', borderColor: 'orange', color : 'orange'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'NOUVEAU COLIS'}</button>
        }
        else if(statutObj == 'DELIVERED'){
            return <button style={{backgroundColor : 'white', borderColor: 'green', color : 'green'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'LIVRÉ'}</button>
        }
        else if(statutObj == 'REFUSE'){
            return <button style={{backgroundColor : 'white', borderColor: 'red', color : 'red'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'REFUSÉ'}</button>
        }
        else if(statutObj == 'RETURNED'){
            return <button style={{backgroundColor : 'white', borderColor: 'black', color : 'black'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'RETOURNÉ'}</button>
        }
        else if(statutObj == 'RECEIVED'){
            return <button style={{backgroundColor : 'white', borderColor: 'blue', color : 'blue'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'RETOURNÉ'}</button>
        }
    }

    const definitionFormeDuBouttonStatutPourModal = (statutObj) => {
        // if (statutObj == 'NOT_PAID'){
        //     return <button style={{backgroundColor : 'white', borderColor: 'orange', color : 'orange'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{statutObj}</button>
        // }
        // else if(statutObj == 'INVOICED'){
        //     return <button style={{backgroundColor : 'white', borderColor: 'blue', color : 'blue'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{statutObj}</button>
        // }
        // else if(statutObj == 'PAID'){
        //     return <button style={{backgroundColor : 'white', borderColor: 'GREEN', color : 'red'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{statutObj}</button>
        // }

    }

    const definitionFormeDuBouttonEtat = (etatObj) => {
        if (etatObj == 'NOT_PAID'){
            return <button style={{backgroundColor : 'white', borderColor: 'red', color : 'red'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'NON PAYÉ'}</button>
        }
        else if(etatObj == 'INVOICED'){
            return <button style={{backgroundColor : 'white', borderColor: 'blue', color : 'blue'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'FACTURÉ'}</button>
        }
        else if(etatObj == 'PAID'){
            return <button style={{backgroundColor : 'white', borderColor: 'green', color : 'green'}} className={`font-bold p-0.5 border-2 text-sm rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-file-earmark-check text-sm mx-0.5 font-extrabolder "></i>{'PAYÉ'}</button>
        }
    }

    const definitionFormeDuBouttonEtatPourModal = (etatObj) => {
        if ((etatObj)){
            return <button style={{backgroundColor : etatObj.couleur, borderColor: etatObj.couleur, color : 'white'}} className={`font-bold text-[0.6rem] border-2 rounded-md whitespace-nowrap break-all`}>{etatObj.valeur}</button>
        }
    }
    const definitionFormeDuSecondBouttonStatut = (statutObj) => {
        if (statutObj){
            return <button style={{backgroundColor : couleurPlusDouce(statutObj.couleur, 95) , borderColor : statutObj.couleur, color:statutObj.couleur}} className={`font-bold p-0.5 text-sm border-2 rounded-md whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-question-circle text-sm mx-0.5 font-extrabolder "></i>{statutObj.valeur}</button>
        }
        else if(!statutObj){
            return <button className={`text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab`}><i className="bi bi-question-circle text-sm mx-0.5 font-extrabolder "></i>{"Aucun"}</button>
        }

    }

    const definitionFormeDuSecondBouttonStatutPourModal = (statutObj) => {
        if ((statutObj)){
            return <button style={{backgroundColor : statutObj.couleur, borderColor : statutObj.couleur, color:'white'}} className={`font-bold text-[0.6rem] border-2 rounded-md whitespace-nowrap break-all `}>{statutObj.valeur}</button>
        }
    }

    const handleReclamation = (idReclamtion) => {

        setReclamation(idReclamtion);


        if(idReclamtion == 1){
            setElementCache1Modal3('block');
            setElementCache2Modal3('hidden');
            setElementCache3Modal3('hidden');
            setElementCache4Modal3('hidden');
        }
        else if(idReclamtion == 2){
            setElementCache2Modal3('block');
            setElementCache1Modal3('hidden');
            setElementCache3Modal3('hidden');
            setElementCache4Modal3('hidden');
        }
        else if(idReclamtion == 3){
            setElementCache3Modal3('block');
            setElementCache1Modal3('hidden');
            setElementCache2Modal3('hidden');
            setElementCache4Modal3('hidden');
        }
        else if(idReclamtion == 4){
            setElementCache4Modal3('block');
            setElementCache1Modal3('hidden');
            setElementCache2Modal3('hidden');
            setElementCache3Modal3('hidden');
        }



    }

    const remplissageDesReclamations = () => {
        let reclmations = [
            {
                id : 1,
                objet : "Changement de prix"
            },
            {
                id : 2,
                objet : "Changement de destinataire"
            },
            {
                id : 3,
                objet : "Changement des informations (Adresse, Téléphone...)"
            },
            {
                id : 4,
                objet : "Ajouter un autre numéro"
            },
            {
                id : 5,
                objet : "Rappeler le client"
            },
            {
                id : 6,
                objet : "Annuler le colis"
            },
            {
                id : 7,
                objet : "Demander le retour"
            },
            {
                id : 8,
                objet : "Plainte concernant le livreur"
            },
            {
                id : 9,
                objet : "Autres"
            }

        ];
        return reclmations;
    }

    useEffect(() => {
        setListeReclamations(remplissageDesReclamations());
    }, []);

    return (
      <>

        {currentItems.length > 0  ?
          currentItems.map((colis, index) => {
            return(

                <tr
                key={index}
                className={
                (compteur + index) % 2 === 0
                    ? "bg-white hover:shadow-2xl hover:bg-[#F6F6F7] border-b dark:hover:bg-[#1f2937] dark:border-gray-700"
                    : "bg-white hover:shadow-2xl hover:bg-[#F6F6F7] border-b dark:hover:bg-[#1f2937] dark:border-gray-700"
                } >
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_code
                        }
                    </td>
                    <td scope="row" className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_from_stock == 0
                            ?
                            <button className='text-emeraldLight font-bold p-0.5 text-sm border-2 border-emeraldLight rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-box-seam-fill text-sm mx-0.5 font-extrabolder "></i>
                                {"Colis Normal"}
                            </button>
                            :
                            <button className='text-blue-500 font-bold p-0.5 text-sm border-2 border-blue-500 rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-house-door-fill text-sm mx-0.5 font-extrabolder "></i>
                                {"Colis Stock"}
                            </button>

                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_time != "-"
                            ?
                            new Date(colis.parcel_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>{"Pas Info"}</button>
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_last_update != "-"
                            ?
                            new Date(colis.parcel_last_update * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-info-circle-fill text-sm mx-0.5 font-extrabolder "></i>
                                {"Pas Info"}
                            </button>
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {

                            colis.parcel_delivery_time != "-"
                            ?
                            new Date(colis.parcel_delivery_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-info-circle-fill text-sm mx-0.5 font-extrabolder "></i>
                                {"Pas Info"}
                            </button>

                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_receiver
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            // (() => {
                            //     const statutObj = etats && etats.length > 0 ? etats.find(statut => colis.parcel_situation === statut['code']) : null;
                            //     return definitionFormeDuBouttonEtat(statutObj);
                            // })()
                            definitionFormeDuBouttonEtat(colis.parcel_situation)
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {

                            // (() => {
                            //     const statutObj = status && status.length > 0 ? status.find(statut => colis.parcel_status === statut['code']) : null;
                            //     return definitionFormeDuBouttonStatut(statutObj);
                            // })()
                            definitionFormeDuBouttonStatut(colis.parcel_status)
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {

                            (() => {
                                const statutObj = status && status.length > 0 ? status.find(statut => colis.parcel_status_second === statut['code']) : null;
                                return definitionFormeDuSecondBouttonStatut(statutObj);
                            })()
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_product_name
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_product_qty
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_price + " MAD"
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_address
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                    {
                        (() => {
                            const villeObj = villes && villes.length > 0 ? villes.find(ville => colis.parcel_city === ville['configs_id']) : null;
                            return villeObj ? villeObj['configs_val'].toUpperCase() : "Aucune ville mentionnée";
                        })()
                    }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_pickup_time != "-"
                            ?
                            new Date(colis.parcel_pickup_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-info-circle-fill text-sm me-2 font-bold "></i>
                                {"Pas Info"}
                            </button>
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_sent_time != "-"
                            ?
                            new Date(colis.parcel_sent_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-info-circle-fill text-sm me-2 font-bold "></i>
                                {"Pas Info"}
                            </button>
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_received_time != "-"
                            ?
                            new Date(colis.parcel_received_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                            :
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-info-circle-fill text-sm mx-0.5 font-bold "></i>
                                {"Pas Info"}
                            </button>
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            colis.parcel_note.length == 0
                            ?
                            <button className='text-[#daa520] font-bold p-0.5 text-sm border-2 border-[#daa520] rounded-md text-center whitespace-nowrap break-all hover:cursor-grab'>
                                <i className="bi bi-chat-left-text-fill text-sm mx-0.5 font-bold "></i>
                                {"Pas Info"}
                            </button>
                            :
                            colis.parcel_note
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        {
                            (() => {
                                const reclamationObj = reclamations.find(reclamation => colis.parcel_code === reclamation['parcel_code']);
                                return definitionFormeDuBouttonReclamation(reclamationObj);

                            })()
                        }
                    </td>
                    <td className="px-3 py-3 text-center font-medi whitespace-nowrap break-all">
                        {
                            <div className='flex flex-row'>
                                <div class="group relative flex justify-center" onClick={() => handleModal1(colis)}>
                                    <i className="bi bi-eye-fill text-orange-600 mx-3 text-2xl stroke-2 font-bold hover:cursor-pointer z-0"></i>
                                    <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Informations</span>
                                </div>
                                {
                                    /**
                                     * première Modal
                                     */
                                }

                                <ModalForTable show={showModal1}>
                                        <div className='text-center font-extrabold text-2xl mt-0 mb-2 py-3 rounded-t-md bg-emeraldLight text-white' >
                                            Informations supplémentaires du colis ||
                                        </div>
                                        <div className='text-center text-md mt-5  w-1/2 mx-auto'>
                                            <i className="bi bi-info-circle-fill text-3xl me-2 font-bold "></i>
                                            <p>
                                                Veuillez spécifier la durée à partir duquel vous voulez télécharger les états de vos colis
                                            </p>
                                        </div>
                                        <button className='p-3 bg-red-500 hover:bg-red-800 text-white rounded-xl m-1'  onClick={closeModal1}>Annuler</button>
                                </ModalForTable>

                                <div class="group relative flex justify-center" onClick={() => handleModal2(colis.parcel_id, colis.parcel_code)}>
                                    <i className="bi bi-graph-up text-green-600 mx-3 text-2xl font-bold hover:cursor-pointer z-0"></i>
                                    <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Suivi</span>
                                </div>
                                {
                                    /**
                                     * deuxième Modal
                                     */
                                }

                                <ModalForTable show={showModal2} maxWidth='4xl'>
                                        <div className='relative font-extrabold mt-0 pl-2 py-3 rounded-t-md bg-emeraldLight text-white' >
                                            <div className='text-2xl'>
                                                <span className='inline-block mx-2'>Détails de suivi du colis {titreModal2}</span>
                                                <i className="absolute inline-block mx-2 right-3 bi bi-x-circle-fill text-3xl me-2 font-bold hover:cursor-pointer" onClick={closeModal2}></i>
                                            </div>
                                        </div>

                                        <div className='relative overflow-auto p-4 max-h-96'>
                                            <table className="min-w-full min-h-full divide-y divide-gray-200 table-fixed text-sm border-collapse text-left rtl:text-right  text-gray-500  dark:text-gray-400">
                                                <caption class="caption-top mb-5 font-bold underline underline-offset-1 ">
                                                    Historique des changements des états de votre colis
                                                </caption>
                                                <thead className="text-xs text-black font-bold  uppercase bg-white dark:bg-[#282b2e] dark:text-gray-400">
                                                    <tr className='bg-emeraldLight text-white dark:border-gray-700 dark:bg-[#282b2e] '>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all ">État</th>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all">Statut</th>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all">Autre Statut</th>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all">Date</th>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all">Ville</th>
                                                        <th scope="col" className="px-1 py-1 text-[0.7rem] text-center whitespace-nowrap break-all">Information</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {

                                                        modal2HistoriquesColis.map((parcel, index) => (
                                                            <tr
                                                                key={index}
                                                                className={
                                                                (compteur + index) % 2 === 0
                                                                    ? "bg-blue-100 hover:shadow-2xl hover:bg-yellow-100 border-b dark:hover:bg-[#1f2937] dark:border-gray-700"
                                                                    : "bg-white hover:shadow-2xl hover:bg-yellow-100 border-b dark:hover:bg-[#1f2937] dark:border-gray-700"
                                                                }
                                                            >


                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">

                                                                {
                                                                    (() => {
                                                                        const statutObj = etats && etats.length > 0 ? etats.find(statut => parcel.parcel_history_situation === statut['code']) : null;
                                                                        return definitionFormeDuBouttonEtatPourModal(statutObj);
                                                                    })()
                                                                }

                                                                </td>
                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                                                                {

                                                                    (() => {
                                                                        const statutObj = status && status.length > 0 ? status.find(statut => parcel.parcel_history_status === statut['code']) : null;
                                                                        return definitionFormeDuBouttonStatutPourModal(statutObj);
                                                                    })()
                                                                }
                                                                </td>
                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                                                                {

                                                                    (() => {
                                                                        const statutObj = status && status.length > 0 ? status.find(statut => parcel.parcel_history_status_second === statut['code']) : null;
                                                                        return definitionFormeDuBouttonStatutPourModal(statutObj);
                                                                    })()
                                                                }
                                                                </td>
                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                                                                    {
                                                                        new Date(parcel.parcel_history_time * 1000).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
                                                                    }
                                                                </td>
                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                                                                {
                                                                    (() => {
                                                                        const villeObj = villes && villes.length > 0 ? villes.find(ville => parcel.parcel_history_city == ville['configs_id']) : null;
                                                                        return villeObj ? villeObj['configs_val'].toUpperCase() : "";
                                                                    })()
                                                                }
                                                                </td>
                                                                <td className="text-[0.7rem] text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                                                                    {parcel.parcel_history_comment}
                                                                </td>
                                                            </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <div className='text-right'>
                                                <button type="submit" className='p-3 bg-emeraldLight hover:bg-emeraldDark text-white rounded-xl m-3'>Télécharger</button>
                                            </div>
                                        </div>
                                </ModalForTable>

                                <button class="group relative flex justify-center" onClick={() => handleModal3(colis)}>
                                    <i className="bi bi-send-exclamation-fill text-red-600 mx-3 text-2xl font-bold hover:cursor-pointer z-0"></i>
                                    <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Ajout réclamation</span>
                                </button>
                                {
                                    /**
                                     * troisième Modal
                                     */
                                }
                                <ModalForTable show={showModal3} maxWidth='4xl'>

                                        <div className='text-center font-extrabold text-2xl py-3 rounded-t-md bg-emeraldLight text-white' >
                                            Ajout d'une réclamation sur le colis {modal3Reclamation.parcel_code}
                                        </div>

                                        <div>
                                            <div className='mt-2 mx-3'>
                                                <label htmlFor={'reclamation'}>
                                                    1. Veuillez spécifier l'object de la réclamation ci-dessous :
                                                </label>
                                                <select autoFocus name={'reclamation'} id={'reclamation'} value={reclamation} onChange={(e)=>{handleReclamation(e.target.value)}} className={`cursor-pointer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mt-1 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `}>
                                                    <option value={0}>Objet de réclamation</option>
                                                    {
                                                        listeReclamations.map((reclmation, index) => {
                                                            return(
                                                                <option key={index} value={reclmation.id}>{(reclmation.objet).toUpperCase()}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className={`mt-2 mx-3 ${elementCache1Modal3}`} id={'elementModal2NouveauPrix'}>
                                                <label>
                                                    2. Veuillez spécifier le nouveau prix :
                                                </label>
                                                <div className='flex flex-row'>
                                                    <div className='w-1/3 mx-1 my-0'>
                                                        <input type="text" value={`Ancien prix : ${modal3Reclamation.parcel_price} DH`} className={`h-full mt-0 cursor-pointer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `} readOnly/>
                                                    </div>
                                                    <div className='w-2/3 mx-1 my-0 h-full'>
                                                        <div class="relative">
                                                            <input type={'number'} name='nouveauPrix' value={nouveauPrix} onChange={(e) => {handleNouveauPrix(e.target.value)}} className='peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f]' />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`mt-2 mx-3 ${elementCache2Modal3}`}>
                                                <label>
                                                    2. Veuillez spécifier le nouveau nom du nouveau destinataire :
                                                </label>
                                                <div className='flex flex-row'>
                                                    <div className='w-1/2 mx-1 my-0'>
                                                        <input type="text" value={`Ancien Destinataire : ${modal3Reclamation.parcel_receiver} `} className={`h-full mt-0 cursor-pointer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `} readOnly/>
                                                    </div>
                                                    <div htmlFor={'nouveauNomDestinataire'} className='w-1/2 mx-1 my-0 h-full'>
                                                            <div class="relative">
                                                                <input type={'text'} id={'nouveauNomDestinataire'} name={'nouveauNomDestinataire'} value={nouveauNomDestinataire} onChange={(e) => {handleNomNouveauDestinataire(e.target.value)}} className='peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f]' placeholder='Entrez Nouveau Destinaire'/>
                                                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                                                    <circle cx="12" cy="7" r="4"/>
                                                                </svg>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-2 mx-3'>
                                                    <label>
                                                        3. Veuillez spécifier plus de détails sur le nouveau destinaire (comme l'adresse, la ville, le numéro de téléphone etc...):
                                                    </label>
                                                    <textarea  class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `} rows="3"  placeholder='Entrez plus de détails sur le nouveau destinateur : ' >

                                                    </textarea>
                                                </div>
                                            </div>

                                            <div className={`text-md mt-2 mx-3 ${elementCache3Modal3}`}>
                                                <div className='mt-5'>
                                                    <label>
                                                        2. Veuillez spécifier les nouvelles informations (comme l'adresse, la ville, le numéro de téléphone etc...):
                                                    </label>
                                                    <textarea  class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `} rows="3"  placeholder='Entrez plus de détails sur le nouveau destinateur : ' >

                                                    </textarea>
                                                </div>
                                            </div>

                                            <div className={`text-md mt-2 mx-3 ${elementCache4Modal3}`}>
                                                <label>
                                                    2. Veuillez ajouter un autre numéro de téléphone :
                                                </label>
                                                <div className='flex flex-row'>
                                                    <div className='w-1/2 mx-1 my-0'>
                                                        <input type="text" value={`Numéro actuel : ${modal3Reclamation.parcel_phone} `} className={`h-full mt-0 cursor-pointer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] `} readOnly/>
                                                    </div>
                                                    <div className='w-1/2 mx-1 my-0 h-full'>
                                                            <div class="relative">
                                                                <input type={'text'} className='peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f]' />
                                                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                                                    <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
                                                                    </svg>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='m-5 mt-20 relative'>
                                            <div className='absolute right-1 bottom-0'>
                                                <button type="submit" className={`p-3 bg-emeraldLight hover:bg-emeraldDark text-white rounded-xl m-1`} >Soumettre</button>
                                                <button className='p-3 bg-red-500 hover:bg-red-800 text-white rounded-xl m-1' onClick={closeModal3}>Annuler</button>
                                            </div>
                                        </div>
                                </ModalForTable>
                            </div>
                        }
                    </td>

                    <td className="px-3 py-3 text-center font-medium text-black dark:text-white whitespace-nowrap break-all">
                        <div className='flex flex-row'>
                            <div class="group relative flex justify-center">
                                <i className="bi bi-whatsapp text-[#25D366] mx-3 text-2xl stroke-2 font-bold hover:cursor-pointer z-0"></i>
                                <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Whatssap</span>
                            </div>
                            <div class="group relative flex justify-center">
                                <i className="bi bi-headset text-[#299cdb] mx-3 text-2xl stroke-2 font-bold hover:cursor-pointer z-0"></i>
                                <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Tél. standard</span>
                            </div>
                            <div class="group relative flex justify-center">
                                <i className="bi bi-person-fill text-black mx-3 text-2xl stroke-2 font-bold hover:cursor-pointer z-0"></i>
                                <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">Agent</span>
                            </div>
                        </div>
                    </td>
                </tr>
            )

        }

        )
        :
                <tr>
                    <td colSpan={20} className='text-center py-5 font-semibold'>
                        Aucune entrée correspondant trouvée
                    </td>
                </tr>
        }
      </>
    );
  }
