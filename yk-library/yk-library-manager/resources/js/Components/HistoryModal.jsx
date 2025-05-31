import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Steps from './Steps';
export default function HistoryModal({ children, show = false, maxWidth = '2xl', closeable = true, onClose = () => {} }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[maxWidth];

    return (
        <Transition show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className=" fixed inset-0  flex overflow-y-auto px-4  sm:px-0   z-50 transform transition-all"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-700"
                    enterFrom="opacity-0 translate-x-4  "
                    enterTo="opacity-100 translate-x-0 "
                    leave="ease-in-out duration-700"
                    leaveFrom="opacity-100 translate-x-0 "
                    leaveTo="opacity-0 translate-x-4"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-700"
                    enterFrom="opacity-0 translate-x-4  "
                    enterTo="opacity-100 translate-x-0 "
                    leave="ease-in-out duration-700"
                    leaveFrom="opacity-100 translate-x-0 "
                    leaveTo="opacity-0 translate-x-4"
                >
                    <Dialog.Panel className={` bg-white rounded-l-md h-full  w-3/4  sm:w-96 bg-red-100 absolute right-0 overflow-y-auto shadow-xl transform transition-all dark:bg-[#212529]   ${maxWidthClass}`}>
                            <div className="flex flex-col gap-4">
                                 <div className=' py-2 px-8 bg-white  sticky top-0 z-40  text-base text-blue-950 font-bold capitalize dark:bg-[#212529] dark:text-[#ced4da]'>
                                          Activités récentes
                                 </div>
                                 <div className='h-96  overflow-y-auto'>

                                 <Steps/>

                                 </div>

                            </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
    }
