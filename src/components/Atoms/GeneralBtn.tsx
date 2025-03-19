
import { FC } from "react";
import { AddTask } from "../Icons";
import { GeneralBtnProps } from "../../lib/types/store";

const GeneralBtn: FC<GeneralBtnProps> = ({text,add,width}) =>{
    return(
        <div id=" add_btn_ctrl" style={{width:`${width}`}}>
            <button id="add_btn" className="
            py-[.7rem] px-[1rem] w-full font-semibold text-[.94rem]
            flex items-center justify-center gap-[.15rem]
            bg-add hover:bg-addHover text-light rounded-[2rem]">
                {add?
                    <span className="w-[.5rem] aspect-square shrink-0">
                        <AddTask/>
                    </span>
                    : null    
                }                
                <span>{text}</span>
            </button>
        </div>
    )
}
export default GeneralBtn; 