import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import Column from "./Column";


const BoardTasks  = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className=" pl-boardLeft pt-[2rem] w-full h-[100%] grow ">
            <Column/>            
        </div>
    )
}
export default BoardTasks;