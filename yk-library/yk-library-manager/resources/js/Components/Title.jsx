export default function Title ({ className = '', ...props }) {
    return (

        <>
            <div className="bg-[#63aa32] border-b-4 border-b-[#9322e2] border-t-2 border-t-[#459d77]  py-2 shadow-lg max-[460px]:px-8  relative px-6 flex flex-col   sm:flex-row gap-2 justify-between dark:bg-[#212529] ">
                <div>
                 <h1 className={` text-white font-black  dark:text-[#ced4da]  text-xs  uppercase fontTitle ${className}`}>{props.titre}</h1>
                 </div>
                 <div>
                 <h1 className={` text-white dark:text-[#878a99] text-xs  capitalize ${className}`}>{props.titre2}</h1>
                 </div>
            </div>
         </>
    );
}
