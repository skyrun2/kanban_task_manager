import { FC } from "react";
import { InputProps } from "../../lib/types/store";

const FieldInput : FC<InputProps> = ({id,width,value,disabled,required}) =>{
    const style = {
        opacity: disabled? "30%" : "",
        width
    }
    return(
        <div className=" relative flex items-end" >
            <input id={id} className={` px-[1rem] py-[.5rem] w-full h-[2.2rem] shrink-0 font-medium border-2 border-input focus:border-purple rounded-[.2rem]`} type="text" style={style}
                defaultValue={value? value:""}
                disabled ={disabled?true:false}

            />            
            {required?<Required/>:null}
        </div>
    )
}

const Required: FC = () =>{
    return(
        <span className=" absolute right-[0%] px-[1rem] py-[.5rem] text-[.8rem] text-red font-bold"> Required </span>
    )
}
export default FieldInput;