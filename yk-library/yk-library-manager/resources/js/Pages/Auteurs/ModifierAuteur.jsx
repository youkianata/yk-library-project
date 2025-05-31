import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link, router } from '@inertiajs/react';
import InputError from "@/Components/InputError";
import InputLabel from '@/Components/InputLabel';
import TextInput from "@/Components/TextInput";
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect, useState } from 'react';

export default function ModifierAuteur({ auth, auteur }) {
  // store original server data
  const [original, setOriginal] = useState({
    nomAuteur: auteur.nom_auteur,
    prenomAuteur: auteur.prenom_auteur,
    bioAuteur: auteur.bio_auteur || '',
  });

  // init form
  const { data, setData, patch, processing, errors, reset } = useForm({
    ...original,
  });

  // submit
  const handleSubmit = e => {
    e.preventDefault();
    patch(route('auteurs.update', auteur.id_auteur), {
      preserveScroll: true,
      onSuccess: () => {},
    });
  };

  // refresh from server
  const handleRefresh = () => {
    router.reload({
      only: ['auteur'],
      onSuccess: page => {
        const fresh = {
          nomAuteur: page.props.auteur.nom_auteur,
          prenomAuteur: page.props.auteur.prenom_auteur,
          bioAuteur: page.props.auteur.bio_auteur || '',
        };
        setOriginal(fresh);
        reset(fresh);
      },
    });
  };

  // reset if props change
  useEffect(() => {
    const fresh = {
      nomAuteur: auteur.nom_auteur,
      prenomAuteur: auteur.prenom_auteur,
      bioAuteur: auteur.bio_auteur || '',
    };
    setOriginal(fresh);
    reset(fresh);
  }, [auteur]);

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Modifier un Auteur" />

      <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
        <div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg w-[95%]">
          <div className="p-4 border-b border-dashed flex justify-between items-center">
            <h3 className="text-blue-500 text-xl font-bold">
              <i className="bi bi-pencil-square mr-1"></i>Modifier Auteur
            </h3>
            <Link
              href={route('auteurs.index')}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Retour à la liste
            </Link>
          </div>

          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <InputLabel htmlFor="nomAuteur" value="Nom de l'auteur *" />
                <TextInput
                  id="nomAuteur"
                  value={data.nomAuteur}
                  onChange={e => setData('nomAuteur', e.target.value)}
                  className="mt-1 block w-full"
                />
                <InputError message={errors.nomAuteur} className="mt-1" />
              </div>

              {/* Prénom */}
              <div>
                <InputLabel htmlFor="prenomAuteur" value="Prénom de l'auteur *" />
                <TextInput
                  id="prenomAuteur"
                  value={data.prenomAuteur}
                  onChange={e => setData('prenomAuteur', e.target.value)}
                  className="mt-1 block w-full"
                />
                <InputError message={errors.prenomAuteur} className="mt-1" />
              </div>

              {/* Bio */}
              <div>
                <InputLabel htmlFor="bioAuteur" value="Biographie" />
                <textarea
                  id="bioAuteur"
                  value={data.bioAuteur}
                  onChange={e => setData('bioAuteur', e.target.value)}
                  className="mt-1 block w-full border rounded-lg p-2"
                  rows="4"
                />
                <InputError message={errors.bioAuteur} className="mt-1" />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <SecondaryButton
                  type="button"
                  onClick={handleRefresh}
                  className="px-6 py-2 bg-gray-200 text-black rounded-md"
                >
                  Réinitialiser
                </SecondaryButton>
                <PrimaryButton
                  type="submit"
                  disabled={processing}
                  className="px-6 py-2 bg-green-600 text-white rounded-md"
                >
                  {processing ? 'Enregistrement...' : 'Mettre à jour'}
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </AuthenticatedLayout>
  );
}
