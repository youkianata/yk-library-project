import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DateInput = ({className}) => {

  const [value, setValue] = useState({
      startDate: null,
      endDate: null
    });

    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);

    }

    return (
       <>
            <div className={`${className}`}>

          <Datepicker
          inputClassName=" peer py-3 px-4  text-sm lg:text-xs xl:text-sm text-black  mt-1 w-full bg-gray-100  rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-transparent focus:outline-none dark:bg-[#262a2f] dark:caret-[#ced4da] dark:text-[#ced4da]  "
          primaryColor={"blue"}
          useRange={false}
          value={value}
          onChange={handleValueChange}
          separator={"à"}
          i18n={"fr"}
          popoverDirection="down"
          containerClassName="text-black relative"
          readOnly={true}

          />
          </div>
       </>
    );
  };

export default DateInput;
