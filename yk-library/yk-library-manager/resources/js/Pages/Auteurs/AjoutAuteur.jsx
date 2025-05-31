import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function AjoutAuteur({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nomAuteur: '',
    prenomAuteur: '',
    bioAuteur: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('auteurs.store'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Ajouter un Auteur" />

      <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
        <div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg w-[95%]">
          <div className="p-4 border-b border-dashed">
            <div className="flex justify-between items-center">
              <h3 className="text-blue-500 text-xl font-bold">
                <i className="bi bi-plus-lg mr-1"></i>Nouvel Auteur
              </h3>
              <Link
                href={route('auteurs.index')}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Retour à la liste
              </Link>
            </div>
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

              <div className="pt-4">
                <SecondaryButton
                  type="submit"
                  disabled={processing}
                  className="px-6 py-2 bg-green-600 text-white rounded-md"
                >
                  {processing ? 'Enregistrement...' : 'Ajouter Auteur'}
                </SecondaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </AuthenticatedLayout>
  );
}
