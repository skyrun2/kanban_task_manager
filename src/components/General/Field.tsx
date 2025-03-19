import { FC } from "react";
import { FieldProps } from "../../lib/types/store";
import FieldInput from "../Atoms/FieldInputs";
import FieldTextarea from "../Atoms/FieldTextArea";

const Field : FC<FieldProps> = ({text,input}) =>{
    return(
        <label htmlFor="" className="w-full flex flex-col gap-[.7rem] ">
            <p>{text}</p>
            {input == "input" ?<FieldInput/> :null}
            {input == "textarea" ?<FieldTextarea/> :null}
        </label>
    )
}
export default Field;