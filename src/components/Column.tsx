import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";

const Column = ()  =>{
    const theme = useKanbanState((state=>state.theme));
    return (
        <div className=" pb-[1.5] flex flex-col w-column" >
                <div id="column_name"  className="pb-[1rem] flex items-center gap-[.2rem] text-grey font-bold text-[.75rem] tracking-[0.15rem]">
                    <span className="h-[1rem] aspect-square bg-add rounded-[100%] "></span>
                    <p>TODO (0)</p>
                </div>
                <div id="task_list" className={` w-full  grid grid-cols-1 gap-[1.5rem] text-[.94rem] font-bold`}>
                    <div id="task_card" className={` ${classListExt("taskCard",theme)} pl-[1rem] h-[6.25rem] flex flex-col justify-center items-start rounded-[.5rem]`}>
                        <p className="h-fit w-fit">Task name</p>
                        <p className=" h-fit w-fit  text-grey text-[.75rem] font-bold "> 0 out of 0 subtask</p>                    
                    </div>                                                            
                </div>
            </div>
    )
}
export default Column;