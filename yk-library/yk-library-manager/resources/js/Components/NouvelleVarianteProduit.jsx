import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InSideInputText from "./InSideInputText";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../images/produits/default-product-image.jpg';

export default function NouvelleVarianteProduit({index, ajouterNouvelleVariante, errors}){

    const [variante, setVariante] = useState({
        "valeurIndex" : index,
        "nomDeLaVariante": "",
        "referenceDeLaVariante": "",
        "quantiteDeLaVariante" : 0
    });

    const remonterInformationVariante = () => {
        const {nomDeLaVariante, referenceDeLaVariante, quantiteDeLaVariante} = variante;
        if( (nomDeLaVariante.length == 0 ) || (referenceDeLaVariante.length == 0) || (quantiteDeLaVariante <= 0)){
            return ajouterNouvelleVariante(false, variante);
        }
        else{
            return ajouterNouvelleVariante(true, variante);
        }
    };

    const handleNegativeValue = () => {
        if(Number(variante.quantiteDeLaVariante) == 0){
            toast.warning('La quantité ne peut pas être négative', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            remonterInformationVariante();
        }
        else{
            setVariante({
                ...variante,
                quantiteDeLaVariante: Number(variante.quantiteDeLaVariante) - 1
            });
            remonterInformationVariante();
        }
    }

    const handlePositiveValue = () => {
        setVariante({
            ...variante,
            quantiteDeLaVariante: Number(variante.quantiteDeLaVariante) + 1
        });
        remonterInformationVariante();
    }

    useEffect(() => {
        remonterInformationVariante();
    });

    return(
        <>
            <div className='my-5 col-span-2 rounded-xl border-dashed border-2 border-indigo-600'>
                <div className="h-10  mt-2 mb-0 flex justify-center items-center">
                    <p className="text-xl font-bold text-indigo-600">
                        <i className="bi bi-arrow-down me-2"></i>
                        Variante <span className="bg-indigo-600 px-2 rounded-3xl text-white">{index + 1}</span></p>
                </div>
            <div class="grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3 px-6 gap-4 w-full my-6">
                <div>
                    <InputLabel htmlFor="nomDeLaVariante" value="Nom De La Variante * : " />
                        <div className='relative'>
                            <InSideInputText
                                id="nomDeLaVariante"
                                type="text"
                                name="nomDeLaVariante"
                                value={variante.nomDeLaVariante}
                                placeholder="Nom De La Variante"
                                className="mt-1 px-12"
                                autoComplete="nomDeLaVariante"
                                onChange={(e) => {
                                    setVariante({
                                        ...variante,
                                        nomDeLaVariante: e.target.value
                                    });
                                    remonterInformationVariante();
                                }}
                                required
                            >
                            <i className="bi bi-cart-plus text-md mx-0.5 font-extrabold text-gray-500"></i>
                            </InSideInputText>
                        </div>
                    <InputError className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="referenceDeLaVariante" value="Référence De La Variante * : " />
                    <div className='relative'>
                        <InSideInputText
                            id="referenceDeLaVariante"
                            type="text"
                            name="referenceDeLaVariante"
                            value={variante.referenceDeLaVariante}
                            placeholder="Référence De La Variante"
                            className="mt-1 px-12"
                            autoComplete="referenceDeLaVariante"
                            onChange={(e) => {
                                setVariante({
                                    ...variante,
                                    referenceDeLaVariante: e.target.value
                                });
                                remonterInformationVariante();
                            }}
                            required
                        >
                    <i className="bi bi-pencil-square text-md mx-0.5 font-extrabold text-gray-500"></i>
                    </InSideInputText>
                    </div>
                        <InputError className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="quantite" value="Quantité De la variante * : " />
                        <div className='relative'>
                        <InSideInputText
                            id="quantite"
                            type="text"
                            name="quantite"
                            value={variante.quantiteDeLaVariante}
                            placeholder="Quantité De la variante"
                            className="mt-1 px-12 text-center"
                            autoComplete="quantite"
                            onChange={(e) => {
                                setVariante({
                                    ...variante,
                                    quantiteDeLaVariante: e.target.value
                                });
                            }}
                            required
                            readOnly
                        />
                        <i class="bi bi-dash-lg absolute text-lg  cursor-pointer border-e  px-3 py-1.5 text-gray-500 z-30 bottom-0 dark:border-e-[#292e32] "
                         onClick={() => {handleNegativeValue();}} ></i>
                        <i class="bi bi-plus-lg absolute text-lg  cursor-pointer border-s right-0  px-3 py-1.5 text-gray-500 z-30 bottom-0 dark:border-s-[#292e32]  " 
                        onClick={()=>{handlePositiveValue();}} ></i>

                        </div>
                            <InputError className="mt-2" />
                    </div>

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
                theme="colored"
                className={"z-50"}
            />
        </div>
        </>
    )
}