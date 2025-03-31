import { FC } from "react";
import { EventListeners, iSubtasks } from "../../lib/types/store";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
interface FieldCheckBoxProps{
    id?:string;
    subtask:iSubtasks;
    isComplete:boolean;
}
const FieldCheckBox: FC<EventListeners&FieldCheckBoxProps> =({id,onClick,subtask,isComplete})=>{
    const theme = useKanbanState((state)=>state.theme);
    let className = ` `;
    if(isComplete){
        className += "  text-grey line-through ";
    }
    const index = id?.split("_")[id.split("_").length-1];
    return(
        <label className={`${classListExt("select",theme)}  p-[.75rem] w-full flex items-center gap-[.5rem] text-[.81rem] font-bold rounded-[1rem] cursor-pointer`}
        id={id} htmlFor={"checkbox"}
        onClick={onClick}
        >        
            <div className="w-[.88rem] h-[.88rem] relative">
                <input id={`checkbox`+index} className={` ${classListExt("select",theme)} w-[.88rem] h-[.88rem] appearance-none  shrink-0  `} type="checkbox"
                onClick={onClick} defaultChecked={subtask.isCompleted}
                />
                {isComplete?<span className=" checkmark "> </span>:null}
            </div>
            <p className={className} >{subtask.title}</p>

        </label>        
    )
}
export default FieldCheckBox;