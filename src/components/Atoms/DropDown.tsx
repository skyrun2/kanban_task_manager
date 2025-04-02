import { FC } from "react";
import { DropDownProps, EventListeners, iColumn } from "../../lib/types/store";
// import  {ArrowDown}  from "../../components/Icons";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";


const DropDown: FC<EventListeners & DropDownProps> = ({id,text,className,isDropDownOpen,onClick,columns}) =>{
    

    return(
        <div className={className}>
            <p>{text}</p> 
            <button id={id} className={` px-[1rem] py-[.5rem] w-full h-full border-2 border-input focus:border-purple  rounded-[.2rem] flex items-center justify-between`}
            onClick={onClick}
            >
                <p>{columns.current.name}</p>
                {/* <ArrowDown className="w-[.7rem] h-[1.5rem]"/> */}
            </button>
            {isDropDownOpen? <DropDownSelect columns={columns.columns} onClick={onClick}/> : null}
        </div>
    )
}
interface DropDownSelectProps {
    columns:iColumn[];
} 
function DropDownSelect({onClick,columns}:DropDownSelectProps&EventListeners) {
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div className={` ${classListExt("select",theme)} py-[.6rem] absolute w-full top-[5rem]   text-right text-[.85rem] flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-medium`}>        
            {
                columns.map((e,i)=>{
                    return(
                        <button key={i} id={"dds_"+String(i)} className={`  px-[1rem] w-full flex items-start hover:text-purple hover:font-semibold `}
                        onClick={onClick}
                        >
                            <p>{e.name}</p>
                        </button>
                    )
                })
            }                        
        </div>
    )
}

export default DropDown;