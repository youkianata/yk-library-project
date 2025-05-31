import Counter from '../../../Components/Counter';
import { useState, useEffect } from 'react';
export default function Partial4 ({tousFacturesClients , facturesAvecInformationsColisEtCoutsExtra}){

     const [totalNetProfit, setTotalNetProfit] = useState(0);


    const calculertotalNetProfit = (facturesAvecInformationsColisEtCoutsExtra) => {
        if(facturesAvecInformationsColisEtCoutsExtra.length === 0){
            setTotalNetProfit(0);
        }
        else if(facturesAvecInformationsColisEtCoutsExtra['genre'] === 'tableauSansExtraCout'){
            // Absence de charges de plus
            let totalCOD = 0;
            let totalChargeLivraison = 0;
            for(var i = 0; i < facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'].length; i++){
                totalCOD += Number(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_cod']);
                totalChargeLivraison += Number(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_fees']);
            }
            setTotalNetProfit(Number(totalCOD) - Number(totalChargeLivraison));
        }
        else if(facturesAvecInformationsColisEtCoutsExtra['genre'] === 'tableauAvecExtraCout'){
            // Présence de charges de plus
            
            // Information sur les colis livrés (DELIVERED)
            let totalCODPourColisLivresDELIVERED = 0;
            let totalChargeLivraisonPourColisLivresDELIVERED = 0;

            // Information sur les colis refusés (REFUSED)
            let totalChargeLivraisonPourColisRefusesREFUSED = 0;

            // Information sur les colis retournés (RETURNED)
            let totalChargeLivraisonPourColisretournesRETURNED = 0;

            // Les charges supplémentaires comme l'emballage etc...
            let totalChargesSupplementaires = 0;

            for(let i = 0; i < facturesAvecInformationsColisEtCoutsExtra['partieFactureColisAvecCoutsExtra'].length; i++){
                totalChargesSupplementaires += Number(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisAvecCoutsExtra'][i]['invoice_extra_total']);
            }

            for(let i = 0; i < facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'].length; i++){
                if(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_statut'] === 'DELIVERED'){
                    totalCODPourColisLivresDELIVERED += facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_cod'];
                    totalChargeLivraisonPourColisLivresDELIVERED += facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_fees'];
                }
                else if(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_statut'] === 'REFUSE'){
                    totalChargeLivraisonPourColisRefusesREFUSED +=  facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_fees'];
                }
                else if(facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_statut'] === 'RETURNED'){
                    totalChargeLivraisonPourColisretournesRETURNED += facturesAvecInformationsColisEtCoutsExtra['partieFactureColisSansCoutsExtra'][i]['invoice_parcels_parcel_fees'];
                }
            }
            /*
            La formule de calcule du Total Net Profit est basé uniquement sur les factures qui sont payé et voici la formule :
                A: La différence entre Les CRBTs et les Frais de tous les colis qui sont livrés (DELIVERED)
                B: Les frais de livraison de tous les colis marqués comme refusés (REFUSE)
                C: Les frais de livraison de tous les colis marqués comme retournés (RETURNED) 
            */
            setTotalNetProfit(totalCODPourColisLivresDELIVERED - totalChargeLivraisonPourColisLivresDELIVERED - totalChargeLivraisonPourColisRefusesREFUSED - totalChargeLivraisonPourColisretournesRETURNED - totalChargesSupplementaires);

        }
    }
    
    useEffect(() => {
        calculertotalNetProfit(facturesAvecInformationsColisEtCoutsExtra);
    });

    return (

        <div className='bg-white sm:col-span-2 xl:col-span-1  p-4 flex flex-col gap-3 rounded-md hover:shadow-gray-700 hover:shadow-2xl shadow transition ease-in-out duration-1000 dark:bg-[#212529]'>
                <div>
                    <span className='uppercase text-md font-bold text-blue-500   dark:text-[#ced4da]'> factures </span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                            <span className='capitalize text-3xl font-bold text-blue-950 counter dark:text-[#0ab39c] '  > <Counter start={0} end={tousFacturesClients.length} delay={1} /> </span>
                    </div>
                    <div className="bg-blue-100 px-3.5 py-3.5 rounded-md dark:bg-[#223644]">
                            <svg class="w-5 h-5 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
                            </svg>
                    </div>
                </div>
                <div>
                    <span className=' text-sm font-bold text-bluelight dark:text-gray-400  '> Total Net {totalNetProfit.toFixed(2)} MAD </span>
                </div>
        </div>
    )
}
