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

export default function ModifierBookStatus({ auth, bookStatus }) {
  // store original server data
  const [original, setOriginal] = useState({
    libelle: bookStatus.libelle_status,
  });

  // init form
  const { data, setData, patch, processing, errors, reset } = useForm({
    ...original,
  });

  // submit
  const handleSubmit = e => {
    e.preventDefault();
    patch(route('bookstatus.update', bookStatus.id_status), {
      preserveScroll: true,
      onSuccess: () => {},
    });
  };

  // refresh from server
  const handleRefresh = () => {
    router.reload({
      only: ['bookStatus'],
      onSuccess: page => {
        const fresh = {
          libelle: page.props.bookStatus.libelle_status,
        };
        setOriginal(fresh);
        reset(fresh);
      },
    });
  };

  // reset if props change
  useEffect(() => {
    const fresh = {
      libelle: bookStatus.libelle_status,
    };
    setOriginal(fresh);
    reset(fresh);
  }, [bookStatus]);

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Modifier un Statut de Livre" />

      <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
        <div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg w-[95%]">
          <div className="p-4 border-b border-dashed flex justify-between items-center">
            <h3 className="text-blue-500 text-xl font-bold">
              <i className="bi bi-pencil-square mr-1"></i>Modifier Statut
            </h3>
            <Link
              href={route('bookstatus.index')}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Retour à la liste
            </Link>
          </div>

          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Libellé */}
              <div>
                <InputLabel htmlFor="libelle" value="Libellé du statut *" />
                <TextInput
                  id="libelle"
                  value={data.libelle}
                  onChange={e => setData('libelle', e.target.value)}
                  className="mt-1 block w-full"
                />
                <InputError message={errors.libelle} className="mt-1" />
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
