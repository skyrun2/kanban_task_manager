import { FC } from "react";
import { IconHideSidebar } from "../Icons/index";
import { iClick } from "../../lib/types/store";

const Hide: FC<{onClick?:(e:iClick)=>void}> = ({onClick}) =>{
    return(
        <div  className=" pl-[.5rem] pt-[1rem] w-[10rem] h-[2rem] hover:opacity-[75%]">
            <button id="hide" className="w-full h-full flex gap-[.5rem] items-center font-semibold"
            onClick={onClick}
            >
                <span className="h-[1rem] aspect-square">
                    <IconHideSidebar/>
                </span>
                <p>Hide sidebar</p>
            </button>
        </div>
    ) 
}
export default Hide;