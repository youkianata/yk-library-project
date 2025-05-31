export default function SlateButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center p-1  shadow-lg border border-transparent  text-black rounded-md font-semibold text-xs px-3 capitalize  focus:outline-none  hover:font-semibold  ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
