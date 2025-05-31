import { forwardRef, useEffect, useRef } from 'react';
import "../../css/app.css"
export default function InSideInputText({ type, className = '', isFocused = false, placeholder,children, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <>
            <div class="relative">
                <input {...props} type={type} class={`peer py-3 px-4 ps-11 block w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da] ${className} `} placeholder={placeholder}/>
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    {children}
                </div>
            </div>
        </>
    );
}
