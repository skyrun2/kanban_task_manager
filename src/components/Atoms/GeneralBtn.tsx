
import { FC, useState } from "react";
import { AddTask } from "../Icons";
import { GeneralBtnProps } from "../../lib/types/store";

const GeneralBtn: FC<GeneralBtnProps> = ({id,text,add,className,onClick}) =>{
    const [isHover,setHover] = useState(false);
    const handleMouseEnter = () =>{
        setHover(true);
    }
    const handleMouseLeave = () =>{
        setHover(false);
    }
        
    // const btnStyle = {
    //     backgroundColor: handleBackground(),
    //     color,        
    //     heght

    // }
    // function handleBackground(){
    //     if(!hover) return backgroundColor;
    //     return  isHover ? hover:backgroundColor;
    // }
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