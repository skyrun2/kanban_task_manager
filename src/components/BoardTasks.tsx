import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";


const BoardTasks  = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className=" pl-boardLeft pt-[2rem] w-full h-[100%] grow ">
            <div className=" flex flex-col w-column" >
                <div id="column_name"  className="text-grey font-semibold text-[.75rem] tracking-wide">
                    <span></span>
                    <p>TODO</p>
                </div>
                <div id="task_list" className={`${classListExt("taskList",theme)}`}>
                    <div id="task_card">
                        <p>task name</p>
                        <div >
                            <button>
                                <p> 0 out of 0 subtask</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BoardTasks;