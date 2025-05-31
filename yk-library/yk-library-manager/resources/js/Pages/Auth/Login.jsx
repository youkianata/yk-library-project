import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
        reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post('/login');
        toast.info('Vérification en cours...', {
        position: "bottom-left",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    };

    const handelIConPassword=()=>{
        let elem=document.getElementById("password");
        let icon = document.getElementById("iconPassword");
        if(elem.type==="password"){
            elem.type="text";
            icon.classList.remove("bi-eye-slas");
            icon.classList.add("bi-eye");
        }
        else{
            elem.type="password";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        }
    }

    return (
        <GuestLayout>
            <Head title="Connexion" />
            <div className='flex flex-col justify-center  gap-y-1'>
                <div className='text-center mb-4 '>
                <h1 className='text-xl font-bold text-[#405189] mb-2'>Bienvenue !</h1>
                <h1 className='text-sm text-gray-500 '>Veuillez vous connecter pour accéder à votre espace Bellacure</h1>
            </div>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email (*)" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Entrez votre adresse mail"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div class=" flex flex-row justify-between items-center text-sm text-end mt-4" >
                        <InputLabel htmlFor="password" value="Mot de passe (*)" />
                            <div>
                                <Link href={route('password.request')} class="font-semibold text-gray-500 text-xs">Mot de passe oublié ?</Link>
                            </div>
                    </div>
                    <div className="relative">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <i class="bi bi-eye-slash text-lg absolute right-7 cursor-pointer text-gray-500  z-40 bottom-1" id="iconPassword" onClick={handelIConPassword}></i>
                    </div>
                    <div>
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>

        <div className="block mt-4">
        <label className="flex items-center">
        <Checkbox
        name="remember"
        checked={data.remember}
        onChange={(e) => setData('remember', e.target.checked)}
        />
        <span className="text-sm text-black font-black hover:cursor-pointer">Se souvenir de moi</span>
        </label>
        </div>

        <div className="mt-4">
        <PrimaryButton className="mb-4 flex w-full justify-center" disabled={processing}>
        S'identifier
        </PrimaryButton>
        </div>
        <div className='flex flex-col w-full gap-y-4 mt-6'>
        <div className='flex flex-row justify-center gap-x-2'>
        </div>
        </div>
        </form>
        </div>

            <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

        </GuestLayout>
    );
}
