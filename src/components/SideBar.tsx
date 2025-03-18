import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import BoardList from "./BoardList";
import SideFeatures from "./SideFeatures";

const SideBar = () =>{
    
    const theme = useKanbanState((state)=>state.theme);

    
    const boardsCount = 0;
    return(
        <div className={`${classListExt("sideBar",theme)}  pt-[1rem] w-left h-full border-r shrink-0  flex flex-col text-grey `}>
            <h3  id="boards_counts" className=" pl-sideBarLeft pb-[1.5rem] text-[0.75rem] font-bold tracking-[0.15rem]">{"ALL BOARDS " + `(${boardsCount})`} </h3>
            <BoardList/>
            <SideFeatures/>
        </div>
    )
}
export default SideBar