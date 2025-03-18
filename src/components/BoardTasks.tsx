import { useKanbanState } from "../lib/store/useKanbanStore";
import Column from "./Column";
import CreateColumn from "./CreateColumn";


const BoardTasks  = () =>{
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    const innerHeightRem = useKanbanState((state)=>state.innerHeightRem);
    console.log(window.innerHeight);
    
    return(
        <div className=" pl-boardLeft pt-[2rem] w-[30rem] h-[60rem]  grow flex   gap-card overflow-auto"
        style={{height:`${innerHeightRem-headerHeight}rem`}}
        >
            {/* <Column/>
            <CreateColumn/>             */}
        </div>
    )
}
export default BoardTasks;