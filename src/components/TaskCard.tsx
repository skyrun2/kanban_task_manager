import { useKanbanState } from "../lib/store/useKanbanStore"
import classListExt from "../utils/classListExt";

const TaskCard = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div id="task_card" className={` ${classListExt("taskCard",theme)} pl-[1rem] h-[6.25rem] shrink-0 flex flex-col justify-center items-start rounded-[.5rem] shadow`}>
            <p className="h-fit w-fit font-bold">Task name</p>
            <p className=" h-fit w-fit  text-grey text-[.75rem] font-bold "> 0 out of 0 subtask</p>                    
        </div>                                                            
    )
}
export default TaskCard