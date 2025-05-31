import { useState ,useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ApplicationLogoLight from '@/Components/ApplicationLogoLight';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [activeBtn,setActiveBtn]=useState(true)
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        
    };

    const handelIConPassword=()=>{

        let elem=document.getElementById("password");
        let icon = document.getElementById("iconPassword");
            if(elem.type==="password"){
             elem.type="text"
             icon.classList.remove("bi-eye-slas")
             icon.classList.add("bi-eye")

           }
             else{
             elem.type="password"
             icon.classList.remove("bi-eye")

             icon.classList.add("bi-eye-slash")
           }
     }

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className='flex flex-col justify-center  gap-y-3'>
                    <div className='w-48  mx-auto  block lg:hidden'>
                             <ApplicationLogoLight/>
                    </div>

                        {activeBtn&&
                           <form onSubmit={submit}>
                                <div className='text-center mb-4 '>
                                        <h1 className='text-xl font-bold text-[#405189] mb-2'>Créer un compte</h1>
                                        <h1 className='text-sm text-gray-500 '>Obtenez votre compte Bellacure gratuit maintenant .</h1>
                                </div>
                                <div>
                                    <div className='flex flex-row gap-1'>
                                        <InputLabel htmlFor="name" value="Nom " />
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        placeholder="entez votre nom "
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <div className='flex flex-row gap-1'>
                                        <InputLabel htmlFor="prenom" value="Prenom " />
                                        <span className='text-red-500'>*</span>
                                    </div>
                                    <TextInput
                                        id="prenom"
                                        name="prenom"
                                        value={data.prenom}
                                        placeholder="entez votre prenom "
                                        className="mt-1 block w-full"
                                        autoComplete="prenom"
                                        isFocused={true}
                                        onChange={(e) => setData('prenom', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.prenom} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <div className='flex flex-row gap-1'>
                                        <InputLabel htmlFor="email" value="E-mail " />
                                        <span className='text-red-500'>*</span>
                                    </div>

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="entez votre adresse e-mail "
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Mot de passe" />

                                    <div className='relative'>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="entez voter mot de passe "
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                autoComplete="current-password"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />

                                            <InputError message={errors.password} className="mt-2" />
                                            <i class="bi bi-eye-slash absolute text-lg right-7 cursor-pointer text-gray-500  z-40 bottom-1  " id="iconPassword" onClick={handelIConPassword}></i>
                                    </div>

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Confirmez le mot de passe" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirmez votre adresse mot de passe "
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                                <div className='mt-4 '>
                                <PrimaryButton className=" mb-4 flex w-full justify-center" onClick={()=>setActiveBtn(false)} disabled={processing}>
                                        suivant
                                    </PrimaryButton>
                                </div>
                                <p class=" text-center text-sm mt-4 ">
                                    Vous avez déjà un compte ?
                                    <Link href={route('login')} class="font-semibold leading-6 text-gray-500 ms-2">Se connecter</Link>
                                </p>
                          </form>
                        }
                        {
                          !activeBtn&&
                          <form>
                                <div className='rounded-full w-20 h-20 bg-[#e2e5ed] flex justify-center items-center mx-auto'>
                                        <svg class="w-8 h-8 text-[#405189] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"/>
                                        </svg>
                                </div>
                                <div className='text-center my-4 '>
                                        <h1 className='text-xl font-bold text-[#405189] mb-2'>Vérifiez votre e-mail</h1>
                                        <h1 className='text-sm text-gray-500 '>Veuillez saisir le code à 4 chiffres envoyé à example@abc.com</h1>
                                </div>
                                <div className='flex flex-row gap-8 px-6 justify-center'>
                                   <input type='text' class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  `} />
                                   <input type='text' class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  `} />
                                   <input type='text' class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  `} />
                                   <input type='text' class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  `} />
                                </div>
                                <div className='mt-8 px-6 '>
                                    <PrimaryButton className=" mb-4 flex w-full justify-center" onClick={()=>setActiveBtn(false)} disabled={processing}>
                                        Confirmer
                                    </PrimaryButton>
                                </div>
                                <p class=" text-center text-sm mt-4 ">
                                    Vous n'avez pas reçu de code ?
                                    <Link href={route('login')} class="font-semibold leading-6 text-gray-500 ms-2">Renvoyer</Link>
                                </p>
                          </form>
                        }

            </div>
        </GuestLayout>
    );
}
