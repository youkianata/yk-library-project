export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2.5 bg-[#0ab39c] border border-gray-300 rounded-md font-semibold text-xs text-white capitalize tracking-widest shadow-sm hover:bg-[#099885] focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
