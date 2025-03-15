import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import  BoardTasks  from "./BoardTasks";
import SideBar from "./SideBar";


const Body  = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className={`${classListExt("body",theme)} w-full h-[100%]  flex items-center justify-between `}>
            <SideBar/>
            <BoardTasks/>
        </div>
    )
}
export default Body;