// import { useKanbanState } from "../lib/store/useKanbanStore";
// import classListExt from "../utils/classListExt";
import TaskCard from "./TaskCard";

const Column = ()  =>{
    // const theme = useKanbanState((state=>state.theme));
    return (
        <div className=" pb-[1.5rem] shrink-0 w-column flex flex-col" >
                <div id="column_name"  className="pb-[1rem] shrink-0 flex items-center gap-[.2rem] text-grey font-bold text-[.75rem] tracking-[0.15rem]">
                    <span className="h-[1rem] aspect-square bg-add rounded-[100%] "></span>
                    <p>TODO (0)</p>
                </div>
                <div className=" width-full h-[90%] grow grid grid-flow-row gap-[1.5rem] ">
                    <TaskCard/>
                    
                </div>
        </div>
    )
}
export default Column;