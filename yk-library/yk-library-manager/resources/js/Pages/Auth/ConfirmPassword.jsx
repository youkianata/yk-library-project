import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import OutSideInputText from '@/Components/OutSideInputText';
import { Head, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
export default function ConfirmPassword() {
    const { data, setData, post, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />
            <div className=" fomulaire flex flex-col mt-10  items-center h-screen relative" >
            <div className=' h-20 w-48  mx-auto mt-2 mb-2'>
                            <ApplicationLogo className="w-24 h-20 fill-current text-gray-500" />
            </div>
            <div className='p-6 mx-auto mb-10  bg-slate-50 rounded-lg shadow  shadow border-s-8 border-emerald-700 w-9/12 text-center md:text-justify '>
                             <p className="font-bold text-sm sm:text-lg mb-2 ml-4">
                                Avis important : Confirmation du mot de passe
                             </p>
                             <p className="text-xs sm:text-sm ml-4 text-blue-950 ">
                               Ceci est une zone sécurisée de l'application. Veuillez confirmer
                               votre mot de passe avant de continuer.

                             </p>
            </div>

            <form onSubmit={submit} className='w-72 sm:w-80 md:w-96 flex flex-col items-center'>


                    <OutSideInputText
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" >
                         Confirmez
                    </PrimaryButton>
                </div>
            </form>
            </div>

        </GuestLayout>
    );
}
