
import { FC } from "react";
import { AddTask } from "../Icons/index.ts";
import { GeneralBtnProps } from "../../lib/types/store.ts";


const GeneralBtn: FC<GeneralBtnProps> = ({id,text,add,className,onClick}) =>{
    
    return(
        <div id={` ${id}_ctrl`} className={className}>
            <button id={id} className="
            py-[.7rem] px-[1rem] w-full h-full 
            flex items-center justify-center gap-[.15rem]"
            //   style={btnStyle}
              onClick={onClick}
              >
                {add?
                    <span className="w-[.5rem] aspect-square shrink-0">
                        <AddTask/>
                    </span>
                    : null    
                }                
                <p >{text}</p>
            </button>
        </div>
    )
}
export default GeneralBtn; 