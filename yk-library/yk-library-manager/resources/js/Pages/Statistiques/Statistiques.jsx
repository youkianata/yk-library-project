import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Title from '@/Components/Title';
import Partial1 from './Partials/Partial1';
import Partial2 from './Partials/Partial2';
import Partial3 from './Partials/Partial3';
import Partial4 from './Partials/Partial4';
import Partial5 from './Partials/Partial5';
import Partial6 from './Partials/Partial6';
import Partial7 from './Partials/Partial7';
import Partial8 from './Partials/Partial8';
import Partial9 from './Partials/Partial9';
import { useState } from 'react';
import Footer from '@/Components/Footer';

export default function Statistiques({ auth,
                                      colisUtilisateur,
                                      colisUtilisateurLivreRecemment,
                                      tousBonsDeLivraisonUtilisateur,
                                      BonsDeLivraisonNonRecuUtilisateur,
                                      colisUtilisateurEnCours,
                                      tousBonDeRetourUtilisateur,
                                      tousBonDeRetourNouveauUtilisateur,
                                      tousFacturesClients,
                                      facturesAvecInformationsColisEtCoutsExtra,
                                      toutesReclamationsUtilisateur,
                                      toutesReclamationsEnCoursTraitementUtilisateur,
                                      tousChangementColis,
                                      totalChangementColisAcceptes,
                                      totalChangementColisAnnules,
                                      totalChangementColisNouveaux}) {

    const [numberCount,setNumberCount]=useState(1000000)
    function incrementCounter() {
        var counterElement = document.getElementById("counter");
        var currentValue = parseInt(counterElement.textContent);
        var nextValue = currentValue + 1;

        if (nextValue <= numberCount) {
          counterElement.textContent = nextValue;
          setTimeout(incrementCounter, 1)
        }
      }

      window.onload = incrementCounter;

    return (
        <AuthenticatedLayout user={auth.user}>
          <Title titre="statistique" />
          <div className='grid  grid-rows-9 sm:grid-rows-4 flex-nowrapsm:grid-cols-4 py-12 gap-4 relative px-6 items-centre w-full'>
            <Partial1 
              colisUtilisateurEnCours = {colisUtilisateurEnCours}
              colisUtilisateurLivreRecemment = {colisUtilisateurLivreRecemment}
            />

            <Partial2 
              tousBonsDeLivraisonUtilisateur = {tousBonsDeLivraisonUtilisateur}
              BonsDeLivraisonNonRecuUtilisateur = {BonsDeLivraisonNonRecuUtilisateur}
            />

            <Partial3 
              tousBonDeRetourUtilisateur = {tousBonDeRetourUtilisateur}
              tousBonDeRetourNouveauUtilisateur = {tousBonDeRetourNouveauUtilisateur}
            />
            <Partial4 
              tousFacturesClients = {tousFacturesClients}
              facturesAvecInformationsColisEtCoutsExtra = {facturesAvecInformationsColisEtCoutsExtra}
            />
            <Partial5 
              toutesReclamationsUtilisateur = {toutesReclamationsUtilisateur}
              toutesReclamationsEnCoursTraitementUtilisateur = {toutesReclamationsEnCoursTraitementUtilisateur}
            />
            <Partial6 
              totalChangementColisAcceptes = {totalChangementColisAcceptes}
              totalChangementColisAnnules = {totalChangementColisAnnules}
              totalChangementColisNouveaux = {totalChangementColisNouveaux}
            />

            <Partial7 />
            <Partial8 />
            <Partial9 />
          </div>
          <div className='2xl:mt-8'>
            <Footer className='sticky'/>
          </div>
        </AuthenticatedLayout>
    );
}
