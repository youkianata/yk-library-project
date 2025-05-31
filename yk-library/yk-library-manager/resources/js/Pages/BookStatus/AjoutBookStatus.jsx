import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function AjoutBookStatus({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    libelle: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('bookstatus.store'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Ajouter un Statut de Livre" />

      <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
        <div className="flex flex-col gap-y-4 bg-white shadow-lg rounded-lg w-[95%]">
          <div className="p-4 border-b border-dashed">
            <div className="flex justify-between items-center">
              <h3 className="text-blue-500 text-xl font-bold">
                <i className="bi bi-plus-lg mr-1"></i>Nouveau Statut
              </h3>
              <Link
                href={route('bookstatus.index')}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Retour à la liste
              </Link>
            </div>
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
              <div className="pt-4">
                <SecondaryButton
                  type="submit"
                  disabled={processing}
                  className="px-6 py-2 bg-green-600 text-white rounded-md"
                >
                  {processing ? 'Enregistrement...' : 'Ajouter Statut'}
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
