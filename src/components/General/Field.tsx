import { FC, ReactElement } from "react";
import { FieldProps } from "../../lib/types/store.ts";



const Field : FC<FieldProps> = ({text,Input,Icon}) =>{
    return(
        <label htmlFor="" className="w-full flex flex-col gap-[.7rem] " >
            {text?
                <p>{text}</p>
            : null
            }
            {
            Icon?
                <div className="flex flex-col w-full gap-[.7rem] max-h-[8.1rem] overflow-x-auto">
                    <Subtask Input={Input} Icon={Icon} />                                                                                
                </div>
            :
                <div className=" relative w-full">
                    {Input}
                    
                </div>                
            }
            
        </label>
    )
}
const Subtask: FC<{Input:ReactElement,Icon:ReactElement}> = ({Icon,Input}) =>{
    return(
        <div className="w-full flex justify-between">
                {Input}
                {Icon}
        </div>
    )
}




export default Field;