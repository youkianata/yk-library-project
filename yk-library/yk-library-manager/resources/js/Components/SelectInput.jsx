export default function SelectInput ({ children ,className, name, id, value, ...props}) {
    return (
        <>

                <select {...props} name={name} id={id} value={value} class={`py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mt-1 focus:outline-none disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:bg-[#262a2f] ${className}`}>
                    {children}
                </select>

        </>
    );
}
