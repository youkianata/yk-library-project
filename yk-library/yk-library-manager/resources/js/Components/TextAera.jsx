import { Children, forwardRef, useEffect, useRef } from 'react';
import "../../css/app.css"
export default forwardRef(function TextInput({  className = '', isFocused = false, placeholder,...props }, ref) {

    return (
        <textarea  {...props} class={`py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  ${className}`} rows="3"  placeholder={placeholder} >
                {Children}
        </textarea>
    );
});
