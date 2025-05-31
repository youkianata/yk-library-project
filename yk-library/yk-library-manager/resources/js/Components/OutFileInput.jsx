 export default function OutFileInput({className ,...props}){
    return (
        <>

            <input {...props} type="file" name="small-file-input" id="small-file-input" class={`block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                file:bg-gray-50 file:border-0
                file:bg-gray-100 file:me-4
                file:py-2 file:px-4 ${className}
                `}/>

        </>
    )
 }
