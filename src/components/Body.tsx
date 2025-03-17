import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import  BoardTasks  from "./BoardTasks";
import SideBar from "./SideBar";


const Body  = () =>{
    const theme = useKanbanState((state)=>state.theme);
    

    
    return(
        <div className={`${classListExt("body",theme)}  w-full  grow  flex  justify-between `} >
            <SideBar/>
            <BoardTasks/>
        </div>
    )
}
export default Body;