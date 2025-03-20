import { FC } from "react";
import { DropDownProps } from "../../lib/types/store";
import { ArrowDown } from "../Icons";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";

const DropDown: FC<DropDownProps> = ({text,className}) =>{
    return(
        <div className={className}>
            <p>{text}</p> 
            <button className={` px-[1rem] py-[.5rem] w-full h-full border-2 border-input focus:border-purple  rounded-[.2rem] flex items-center justify-between`}>
                <p>Todo</p>
                <ArrowDown className="w-[.7rem] h-[1.5rem]"/>
            </button>
            {/* <DropDownSelect/> */}
        </div>
    )
}

function DropDownSelect() {
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div className={` ${classListExt("select",theme)} py-[.6rem] absolute w-full top-[5rem]   text-right text-[.85rem] flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-medium`}>
            <button className={`  px-[1rem]  w-full flex items-start hover:text-purple hover:font-semibold`}>
                <p>Todo</p>
            </button>
            <button className={`  px-[1rem] w-full flex items-start hover:text-purple hover:font-semibold `}>
                <p>Doing</p>
            </button>
            
            
        </div>
    )
}

export default DropDown;