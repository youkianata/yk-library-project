import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import OutSideInputText from '@/Components/OutSideInputText';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import emailGif from '../../images/iconPng/email.gif'
import Label from '@/Components/Label';
export default function ForgotPassword({ status }) {
    const { data, setData, post, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <div className='flex   flex-col justify-center rounded-md p-6    shadow-md bg-white items-center max-[490px]:w-full w-[450px] mx-auto  bg-white -mt-44 mb-10 relative  z-40'>
                    <div className='  w-48  mx-auto mb-4 '>
                            <Link href="/" >
                                    <ApplicationLogo className="w-24 h-20 fill-current text-gray-500" />
                            </Link>
                    </div>
                    <div className='text-center '>
                         <h1 className='text-base text-[#405189] mb-2'>Mot de passe oublié ?</h1>
                         <h1 className='text-xs text-[#a5a7b3] '>Réinitialiser le mot de passe avec Quick Livraison .</h1>
                    </div>
                    <div>
                        <img src={emailGif} className='w-28  -mt-2'/>
                    </div>
                    <div className='bg-[#fef4e4] text-[#d29c40] font-bold px-2 py-3 text-xs'>
                       Entrez votre adresse e-mail et des instructions vous seront envoyées !
                    </div>
                    <form onSubmit={submit} className='  mt-6   md:shadow-none rounded-xl    w-full   flex flex-col justify-center '>
                            <Label>Email</Label>
                            <div className='w-full'>
                                <OutSideInputText
                                id="email"
                                type="email"
                                name="email"
                                placeholder="email "
                                value={data.email}
                                className="mt-1 "
                                autoComplete="email"
                                label="email"
                                onChange={(e) => setData('email', e.target.value)}/>
                                <InputError message={errors.email} className="mt-2"  />
                            </div>

                            <div className="  mt-4 ">
                                <PrimaryButton className="mb-4 flex w-full justify-center " >
                                      Envoyer
                                </PrimaryButton>

                            </div>

                       </form>

            </div>

          {/* <Head title="Forgot Password" />
          <div className=" fomulaire flex flex-col mt-10  items-center h-screen relative" >
            <div className=' h-20 w-48  mx-auto mt-2 mb-2'>
                            <ApplicationLogo className="w-24 h-20 fill-current text-gray-500" />
            </div>
            <div className='p-6 mx-auto mb-10  bg-slate-50 rounded-lg shadow  shadow border-s-8 border-emerald-700 w-9/12 text-center md:text-justify '>
                             <p className="font-bold text-sm sm:text-lg mb-2 ml-4">
                                Avis important : Récupération du mot de passe
                             </p>
                             <p className="text-xs sm:text-sm ml-4 text-blue-950 ">
                             Mot de passe oublié ? Pas de problème. Il vous suffit de nous
                              communiquer votre adresse e-mail, et nous vous enverrons un
                              lien de réinitialisation de mot de passe par e-mail.
                             Ce lien vous permettra de choisir un nouveau mot de passe.
                             </p>
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className=' w-72 sm:w-80 md:w-96 flex flex-col items-center' >
                <OutSideInputText
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    value={data.email}
                    className="mt-1 block w-full "
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton >
                         Envoyer
                    </PrimaryButton>
                </div>
            </form>
          </div> */}
        </GuestLayout>

    );
}
