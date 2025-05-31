
export default function FileInput({className ,...props}) {



    return (
        <>

  <label class="block mt-4   ">
    <input {...props} type="file" class={`block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-500
      hover:file:bg-violet-100
      file:cursor-pointer
      focus:outline-none
      cursor-pointer
      dark:file:bg-[#223644] dark:hover:file:dark:bg-[#223644] 
           ${className}
`}
    />
  </label>
  </>
    );
}
