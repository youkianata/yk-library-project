import { forwardRef, useEffect, useRef } from 'react';
import "../../css/app.css"
export default forwardRef(function OutSideInputText ({ type = 'text', className = '', isFocused = false,label, placeholder,...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <input {...props}  type={type} class="bg-white border border-gray-300 text-gray-900 text-sm mt-2 focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  placeholder:capitalize" placeholder={placeholder}/>
        </>
    );
});

