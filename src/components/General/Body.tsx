import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";

import { AddTask, DarkTheme, IconBoard, LightTheme } from "../Icons";
import Hide from "../Atoms/Hide";
import GeneralBtn from "../Atoms/GeneralBtn";



const Body :FC  = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className={`${classListExt("body",theme)}  w-full  grow  flex  justify-between `} >
            <SideBar/>
            <BoardTasks/>
        </div>
    )
}
export default Body;

function SideBar() {
    const theme = useKanbanState((state)=>state.theme);    
    return(
        <div className={`${classListExt("sideBar",theme)}  pt-[1rem] w-left h-full border-r shrink-0  flex flex-col text-grey `}>
            <h3  id="boards_counts" className=" pl-sideBarLeft pb-[1.5rem] text-[0.75rem] font-bold tracking-[0.15rem]">{"ALL BOARDS " + `(${0})`} </h3>
            <BoardList/>
            <SideFeatures/>
        </div>
    )
}

function BoardTasks(){
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    const innerHeightRem = useKanbanState((state)=>state.innerHeightRem);
    return(
        <div className=" pl-boardLeft pt-[2rem] w-[30rem]   grow flex   gap-card overflow-auto"
        style={{height:`${innerHeightRem-headerHeight}rem`}}
        >
            {/* <Column/>
            <EmptyColumn/>
            <CreateColumn/>           */}
            <NoColumn/>
        </div>
    )
}

function Column(){
    return(
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

function EmptyColumn(){
    return(
        <div className=" pb-[1.5rem] shrink-0 w-column  flex flex-col" >
                <div id="column_name"  className="pb-[1rem] shrink-0 flex items-center gap-[.2rem] text-grey font-bold text-[.75rem] tracking-[0.15rem]">
                    <span className="h-[1rem] aspect-square bg-add rounded-[100%] "></span>
                    <p>TODO (0)</p>
                </div>
                <div className=" width-full h-[90%] border-dashed border-2 border-lineDark grow grid grid-flow-row gap-[1.5rem] rounded-[.5rem]">
                    
                </div>
        </div>
    )
}

function NoColumn(){
    return(
        <div className="w-full h-full flex  flex-col items-center justify-center gap-[1.8rem] text-grey font-bold"
        // style={{height:`${innerHeightRem-headerHeight}rem`}}
         >
            <p>This board is empty. Create new column to get started</p>
            <GeneralBtn text="Add New Column" add={true} className={`  bg-add hover:bg-addHover text-light text-[0.8rem] font-bold rounded-[2rem]`}/>
        </div>
    )
}
function TaskCard(){
    const theme = useKanbanState((state)=>state.theme);
    return (
        
        <div id="task_card" className={` ${classListExt("taskCard",theme)} relative  h-[6.25rem] shrink-0 flex flex-col justify-center items-start rounded-[.5rem] hover:opacity-[75%] shadow overflow-hidden`}>
            <p className="pl-[1rem] h-fit w-fit font-bold">Task name</p>
            <p className="pl-[1rem] h-fit w-fit  text-grey text-[.75rem] font-bold "> 0 out of 0 subtask</p>            
        </div>
        
    )   
}
function CreateColumn(){
    return(
        <div className=" pt-[2rem] w-column "> 
            <button className="create_column w-full h-[90%] bg-gradientLight flex items-center justify-center  rounded-[0.5rem]">
                <div className="  h-[2rem] flex items-baseline justify-center  gap-[0.2rem] text-[1.5rem] font-bold ">
                    <div className="w-[.7rem] aspect-square flex justify-baseline items-end ">
                        <AddTask/>
                    </div>
                    <span>Add New Column</span>
                </div>
            </button>
        </div>            
    )
}

function BoardList() {
    return (
        <div id="boards_list" className=" w-full h-[77%] grid-cols-1 gap-[.2rem] overflow-y-auto">            
            {/* <Board/> */}
            <CreateNewBoard/>
        </div>
    )
}

function Board() {
    return (
        <div className=" pl-sideBarLeft hover:bg-addHover hover:text-light w-[92%] h-[3rem] rounded-r-[2rem]">
            <button className=" w-full h-full flex items-center gap-[.5rem] font-bold text-[1rem]">
                <span className="w-[1rem] aspect-square">
                    <IconBoard className="text-grey"/>
                </span>
                <p>BoardName</p>
            </button>                                        
        </div>
    )
}

function CreateNewBoard()  {
    return(
        <div id="create_new_board_ctrl" className=" pl-sideBarLeft hover:  w-[92%] h-[3rem] rounded-r-[2rem] hover:opacity-[75%]">
            <button id="create_new_board" className=" w-full h-full flex items-center gap-[.5rem]  text-[#635fc7] font-semibold text-[1rem] ">
                <span className="w-[1rem] aspect-square shrink-0">
                <IconBoard/>
                </span>
                <span id="text_board_name_span" className=" w-[100%] h-full flex items-center gap-[.4rem] ">
                    <span className=" mt-[.1rem] w-[.5rem] aspect-square">
                       <AddTask/> 
                    </span>
                    <p> Create New Board</p>
                </span>
            </button>                                        
        </div>
    )
}
function SideFeatures(){
    return(
        <div id="side_features" className=" pl-sideBarLeft w-full flex flex-col ">            
            <Theme/>
            <Hide/>
        </div>   
    )
}

function Theme() {
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div id="theme_control" className={` ${classListExt("theme",theme)} w-[13.5rem] h-[3rem] flex items-center justify-around rounded-[.5rem]`}>
            <div className=" w-[1rem] aspect-square">
                <DarkTheme/>
            </div>
            <div id="theme_btn_ctrl" className=" w-[3rem] h-[1.2rem]">
                <button id="theme_btn" className=" relative w-full h-full bg-add rounded-[1rem]">
                    <div id="circle" className={classListExt("themeBtn",theme)}></div>
                </button>
            </div>
            <div className=" w-[1.3rem] aspect-square">
                <LightTheme/>
            </div>
        </div>
    )
}
