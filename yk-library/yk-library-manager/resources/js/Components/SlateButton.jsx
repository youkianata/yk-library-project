import { Link } from "@inertiajs/react";

export default function SlateButton({ className = '', disabled,lien ,children, ...props }) {
    return (
        <Link
            {...props}
            className={
                `inline-flex items-center p-1  shadow-lg border border-transparent  text-black rounded-md font-semibold text-xs px-3 capitalize  focus:outline-none  hover:font-semibold  ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
            href={lien}
            
        >
            {children}
        </Link>
        

        
    );
}
