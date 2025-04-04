import { FC } from "react";
import { InputProps } from "../../lib/types/store";
import React from "react";

const FieldTextarea: FC<InputProps> = ({id})=>{
    return(
        <textarea name="" id={id} className={`px-[1rem] py-[.5rem] w-full h-[6rem]
            shrink-0 font-medium resize-none border-2 border-input focus:border-purple  rounded-[.2rem]`}></textarea>
    )
}
export default FieldTextarea;