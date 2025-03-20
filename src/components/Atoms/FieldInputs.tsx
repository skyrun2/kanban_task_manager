import { FC } from "react";
import { InputProps } from "../../lib/types/store";

const FieldInput : FC<InputProps> = ({width,value,disabled}) =>{
    const style = {
        opacity: disabled? "30%" : "",
        width
    }
    return(
        // <div className=" h-[2.2rem] shrink-0"  >
            <input className={` px-[1rem] py-[.5rem] w-full h-[2.2rem] shrink-0 font-medium border-2 border-input focus:border-purple rounded-[.2rem]`} type="text" style={style}
                defaultValue={value? value:""}
                disabled ={disabled?true:false}
                
            />

        // </div>
    )
}
export default FieldInput;