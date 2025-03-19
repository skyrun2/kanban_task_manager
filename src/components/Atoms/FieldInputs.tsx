import { FC } from "react";
import { InputProps } from "../../lib/types/store";

const FieldInput : FC<InputProps> = ({width}) =>{
    let widthClass = "";
    
    return(
        // <div className=" h-[2.2rem] shrink-0"  >
            <input className={` px-[1rem] py-[.5rem] w-full h-2.2rem  font-medium border-2 border-input  rounded-[.2rem]`} type="text" style={width? {width:`${width}`}:{}} />

        // </div>
    )
}
export default FieldInput;