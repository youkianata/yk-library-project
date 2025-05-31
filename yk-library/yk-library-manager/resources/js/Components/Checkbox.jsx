import { Children } from "react";
import "../../css/app.css"
import { useState } from "react";
export default function Checkbox({ className = '', children,...props }) {
   const [checked,setChecked]=useState(false)
    return (
       <>
        <div class=" flex flex-row items-center    ">
            <div className="checkbox-wrapper-31 mt-1  ">
            <input {...props} id="draft" class="peer-input  " type="checkbox" name="status"  onClick={()=>setChecked(!checked)} />
            <svg viewBox="0 0 35.6 35.6" className="w-7 h-7 text-red-100  ">
                <circle class="background " cx="17.8" cy="17.8" r="17.8"></circle>
                <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
            </div>
            <div>
            <label for="draft" class={`peer-label me-3  text-sm ${checked?"text-green-500 ":"text-black dark:text-[#878a99]"}`}>{children}</label>
            </div>
        </div>
       </>
    );
}
