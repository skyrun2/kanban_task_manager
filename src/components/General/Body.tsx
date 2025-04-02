import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";

// import { AddTask, DarkTheme, IconBoard, LightTheme, Show } from "../Icons/index";
import Hide from "../Atoms/Hide";
import GeneralBtn from "../Atoms/GeneralBtn";
import { CreateNewBoardProps, EventListeners, iBoard, iClick, iColumn, iTask } from "../../lib/types/store";
import NewBoardModal from "./NewBoardModal";
import NewColumnModal from "./NewColumnModal";
// import IconBtn from "../Atoms/IconBtn";
import TaskModal from "./TaskModal";


 interface ColumnProps {
    className?:string;
    column: iColumn;
 }
 interface TaskCardProps {
    
    task: iTask;
 }
 interface DisplayBoardsProps{
    boards: iBoard[];
    onclick?:(e:iClick)=>void;
 }
 interface SideBarProps{
    
    onclick?:(e:iClick)=>void;
 }
 interface DisplayColumnsProps{
    currentBoard:iBoard;
    onclick?:(e:iClick)=>void;
 }
 
const Body :FC  = () =>{
    const boards = useKanbanState((state)=>state.boards);
    const currentBoard = useKanbanState((state)=>state.currentBoard).board;
    const currentBoardId = useKanbanState((state)=>state.currentBoard).id;
    // const currentTask = useKanbanState((state)=>state.currentTask);
    const setCurrentBoard = useKanbanState((state)=>state.actions.setCurrentBoard);
    const setCurrentTask = useKanbanState((state)=>state.actions.setCurrentTask);
    const setModalOpen = useKanbanState((state)=>state.actions.setModalOpen);
    const setSideBarOpen = useKanbanState((state)=>state.actions.setSideBarOpen);
    const setSideBarClose = useKanbanState((state)=>state.actions.setSideBarClose);
    // const setMiniModalOpen = useKanbanState((state)=>state.actions.setMiniModalOpen);
    const setTheme = useKanbanState((state)=>state.actions.setTheme);
    const theme = useKanbanState((state)=>state.theme);
    // const miniModal = useKanbanState((state)=>state.miniModal);    
    // const isSideBarOpen = useKanbanState((state)=>state.isSideBarOpen);
    const tasks: iTask[] = currentBoard.columns.map((e)=>  { return e.tasks} ).flat();
    // const [isTask,setIsTask] = useState<{index:number,isTask:boolean}>({index:0,isTask:false});
    const handleOnclick = (e:iClick) =>{
        const id = e.currentTarget.id;        
        let  isTask :{index:number,isTask:boolean} = {index:0,isTask:false};
        tasks.forEach((e,i)=>{
            if(e.title == id){
                isTask = {index:i,isTask:true};
            }
        })
        

        
        switch (true) {
            case id == "create_new_board" || id == "new_board":                 
                setCurrentBoard({id:currentBoardId,board:currentBoard});
                setModalOpen(NewBoardModal);
                break;            
            case id == "new_column":
                setModalOpen(NewColumnModal);
                break;
            case id == "theme_btn":
                setTheme()
                break;

            case id == "show":
                setSideBarOpen();
                break;
            case id == "hide":
                setSideBarClose();
                break;
            case isTask.isTask:{                
                let columnIndex = 0;
                currentBoard.columns.forEach((e,i)=>{
                    if(e.tasks.includes(tasks[isTask.index])){
                        columnIndex = i
                    }
                })
                
                
                setCurrentTask({id:isTask.index,task:tasks[isTask.index],column:columnIndex,isEditing:true});
                setModalOpen(TaskModal);
            }            
                break;
            default:
                break;
        } 
    }
    return(
        <div className={`${classListExt("body",theme)} relative w-full  grow  flex  justify-between `} >
            {boards.length? 
                <SideBar onclick={handleOnclick}/>
            :  
                null
            }
            {
                boards.length ? 
                    <DisplayColumns currentBoard={currentBoard} onclick={handleOnclick}/>
                :
                <NoBoard onClick={handleOnclick} />
            }
        </div>
    )
}
export default Body;

const  SideBar: FC<SideBarProps> = ({onclick}) => {
    const boards = useKanbanState((state)=>state.boards);    
    const isSideBarOpen = useKanbanState((state)=>state.isSideBarOpen);
    const theme = useKanbanState((state)=>state.theme);
    // const className = " absolute  bottom-[5%] w-[3rem] h-[3.2rem] bg-add hover:bg-addHover rounded-l-[0rem] rounded-r-[2rem]"
    
    return(
        <>
          {  isSideBarOpen?
                <div className={`${classListExt("sideBar",theme)}  pt-[1rem] w-left h-full border-r shrink-0  flex flex-col text-grey `}>
                    <h3  id="boards_counts" className=" pl-sideBarLeft pb-[1.5rem] text-[0.75rem] font-bold tracking-[0.15rem]">{"ALL BOARDS " + `(${boards.length})`} </h3>
                    {boards.length? 
                        <DisplayBoards boards={boards} onclick={onclick}/>                                                    
                    :                                            
                        <CreateNewBoard onClick={onclick}/>
                    }
                    <div id="side_features" className=" pl-sideBarLeft w-full flex flex-col ">            
                        <div id="theme_control" className={` ${classListExt("theme",theme)} w-[13.5rem] h-[3rem] flex items-center justify-around rounded-[.5rem]`}>
                            <div className=" w-[1rem] aspect-square">
                                {/* <DarkTheme/> */}
                            </div>
                            <div id="theme_btn_ctrl" className=" w-[3rem] h-[1.2rem]">
                                <button id="theme_btn" className=" relative w-full h-full bg-add rounded-[1rem]"
                                onClick={onclick}
                                >
                                    <div id="circle" className={classListExt("themeBtn",theme)}></div>
                                </button>
                            </div>
                            <div className=" w-[1.3rem] aspect-square">
                                {/* <LightTheme/> */}
                            </div>
                        </div>
                        <Hide onClick={onclick}/>
                    </div>   
                </div>
            :
            null
            // <IconBtn id="show" onClick={onclick} widthOrClass={{className}} iconWidth="full" Icon={<Show className="w-[1.1rem] aspect-square" />}/>
            }
        </>
    )
}
const  DisplayColumns: FC<DisplayColumnsProps> =({currentBoard,onclick}) => {


    const  Column:FC<ColumnProps& EventListeners>  = ({className,column,onClick})=>{
        return(
            <div className={`  pb-[1.5rem] shrink-0 w-column flex flex-col`} >
                    <div id="column_name"  className="pb-[1rem] shrink-0 flex items-center gap-[.2rem] text-grey font-bold text-[.75rem] tracking-[0.15rem]">
                        <span className="h-[1rem] aspect-square bg-add rounded-[100%] "></span>
                        <p>{column.name.toUpperCase()} ({column.tasks.length})</p>
                    </div>
                    <div className={` ${className} width-full h-[90%] grow grid grid-flow-row gap-[1.5rem] rounded-[.5rem]`}>
                        {
                            column.tasks.map((e,i)=>{
                                return(
                                    <TaskCard key={i} onClick={onClick} task={e}/>           
                                )
                            })
                        }
                        
                    </div>
            </div>
        )
    }
    const  TaskCard: FC<TaskCardProps&EventListeners> = ({task,onClick})  => {
        const theme = useKanbanState((state)=>state.theme);
        return (
            
            <button id={task.title} className={` ${classListExt("taskCard",theme)} relative  h-[6.25rem] shrink-0 flex flex-col justify-center items-start rounded-[.5rem] hover:opacity-[75%] shadow overflow-hidden`}
            onClick={onClick}
            >
                <p className="pl-[1rem] h-fit w-fit font-bold">{task.title}</p>
                <p className="pl-[1rem] h-fit w-fit  text-grey text-[.75rem] font-bold "> 0 out of {task.subTasks.length} subtask</p>            
            </button>
            
        )   
    }


    const innerHeightRem = useKanbanState((state)=>state.innerHeightRem);
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    return(
        <div className=" pl-boardLeft pt-[2rem] w-[30rem]   grow flex   gap-card overflow-auto"
        style={{height:`${innerHeightRem-headerHeight}rem`}}
        >
            {
                currentBoard.columns.map((e,i)=>{
                    
                    const className =  e.tasks.length? "" :  "border-dashed border-2 border-lineDark";
                    return(
                        <Column key={i} className = {className}  column={e} onClick={onclick} />
                    )
                })
            
            } 
            <CreateColumn onclick={onclick}/>
        </div>
    )
}


const  DisplayBoards: FC<DisplayBoardsProps> =  ({boards,onclick}) =>{
    const Board: FC<{name:string}> =({name})=> {
        return (
            <div className=" pl-sideBarLeft hover:bg-addHover hover:text-light w-[92%] h-[3rem] rounded-r-[2rem]">
                <button id={name} className=" w-full h-full flex items-center gap-[.5rem] font-bold text-[1rem]">
                    <span className="w-[1rem] aspect-square">
                        {/* <IconBoard className="text-grey"/> */}
                    </span>
                    <p>{name}</p>
                </button>                                        
            </div>
        )
    }
    return(
        <div id="boards_list" className=" w-full h-[77%] grid-cols-1 gap-[.2rem] overflow-y-auto">            
            {boards.map((e,i)=>{
                
                return(
                    <Board key={i} name={e.name} /> 
                        
                    
                )
            })}
            <CreateNewBoard onClick={onclick}/>
        </div>
    )
}



// const NoColumn : FC<CreateNewBoardProps> = ({onClick}) =>{
//     return(
//         <div className="w-full h-full flex  flex-col items-center justify-center gap-[1.8rem] text-grey font-bold"
//         // style={{height:`${innerHeightRem-headerHeight}rem`}}
//          >
//             <p>This board is empty. Create new column to get started</p>
//             <GeneralBtn id="new_column" onClick={onClick} text="Add New Column" add={true} className={`  bg-add hover:bg-addHover text-light text-[0.8rem] font-bold rounded-[2rem]`}/>
//         </div>
//     )
// }
const NoBoard : FC<CreateNewBoardProps> = ({onClick}) =>{
    return(
        <div className="w-full h-full flex  flex-col items-center justify-center gap-[1.8rem] text-grey font-bold"
        // style={{height:`${innerHeightRem-headerHeight}rem`}}
         >
            <p>There is no  board . Create new board to get started</p>
            <GeneralBtn id="new_board" onClick={onClick} text="Add Board" add={true} className={`  bg-add hover:bg-addHover text-light text-[0.8rem] font-bold rounded-[2rem]`}/>
        </div>
    )
}

const  CreateColumn: FC<{onclick?:(e:iClick)=>void}> = ({onclick}) => {
    return(
        <div className=" pt-[2rem] w-column "> 
            <button id="new_column" className="create_column w-full h-[95%] bg-gradientLight flex items-center justify-center  rounded-[0.5rem]"
                onClick={onclick}
            >
                <div className="  h-[2rem] flex items-baseline justify-center  gap-[0.2rem] text-[1.5rem] font-bold ">
                    <div className="w-[.7rem] aspect-square flex justify-baseline items-end ">
                        {/* <AddTask/> */}
                    </div>
                    <span>Add New Column</span>
                </div>
            </button>
        </div>            
    )
}





const  CreateNewBoard : FC<CreateNewBoardProps> = ({onClick}) => {
    return(
        <div id="create_new_board_ctrl" className=" pl-sideBarLeft hover:  w-[92%] h-[3rem] rounded-r-[2rem] hover:opacity-[75%]">
            <button id="create_new_board" className=" w-full h-full flex items-center gap-[.5rem]  text-[#635fc7] font-semibold text-[1rem] "
            onClick={onClick}
            >
                <span className="w-[1rem] aspect-square shrink-0">
                {/* <IconBoard/> */}
                </span>
                <span id="text_board_name_span" className=" w-[100%] h-full flex items-center gap-[.4rem] ">
                    <span className=" mt-[.1rem] w-[.5rem] aspect-square">
                       {/* <AddTask/>  */}
                    </span>
                    <p> Create New Board</p>
                </span>
            </button>                                        
        </div>
    )
}
