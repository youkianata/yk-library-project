export default function DselectInput ({ children ,className,...props}) {
    return (
        <>

                <select {...props} id="countries" class={`bg-white border border-gray-300 text-gray-900 text-sm mt-2 focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  placeholder:capitalize  ${className}`}>
                    {children}
                </select>

        </>
    );
}
