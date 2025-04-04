
import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore.ts";

import classListExt from "../../utils/classListExt.ts";
import { LogoDark, LogoLight, More } from "../Icons/index.ts";
import GeneralBtn from "../Atoms/GeneralBtn.tsx";

import IconBtn from "../Atoms/IconBtn.tsx";
import AddTaskModal from "./AddTaskModal.tsx";
import { EventListeners, iClick } from "../../lib/types/store.ts";
import NewBoardModal from "./NewBoardModal.tsx";
import DeleteModal from "./DeleteModal.tsx";




const Header: FC = () =>{
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const setCurrentBoard = useKanbanState((state)=>state.actions.setCurrentBoard);
    const setModalOpen = useKanbanState((state)=>state.actions.setModalOpen);
    const setMiniModalOpen = useKanbanState((state)=>state.actions.setMiniModalOpen);
    const theme = useKanbanState((state)=>state.theme);
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    const miniModal = useKanbanState((state)=>state.miniModal);
    // console.log(currentBoard);   
    
    const handleOnClick = (e:iClick)=>{
        const id : string =  e.currentTarget.id;
        switch (true) {
            case id == "add_task":
                setModalOpen(AddTaskModal);
                
                break;
            case id == "more_btn":
                setMiniModalOpen("more");
                break;
            case id == "h_edit":
                setCurrentBoard({id:currentBoard.id,board:currentBoard.board,isEditing:true});
                setModalOpen(NewBoardModal);
                console.log("q");
                
                break;
            case id == "h_delete":
                setModalOpen(DeleteModal);
                break;
            default:
                break;
        }
        
    }
        
    
    
    
    
    return(
        <div id="header" className={`${classListExt("header",theme)}  w-full  shrink-0  flex items-center justify-between font-jakarta border-b `}
            style={{height:`${headerHeight}rem`}}
            
        >
            <div id="logo" className={` ${classListExt("logo",theme)} pl-[2rem] w-left h-full flex items-center border-r  cursor-pointer ` } >
                <div className=" h-[1.63rem]">
                    {theme == "dark" ? <LogoLight /> : <LogoDark/>}          
                </div>
                
            </div>
            <div id="right" className=" pl-boardLeft pr-[1rem] h-full   grow  flex items-center justify-between ">
                <h2 id="current_board" className={" text-[1.5rem] font-semibold"}> {currentBoard.board.name.toUpperCase()}</h2>
                { currentBoard.board.columns.length?
                    <div id="control_features" className=" relative w-fit flex item-center justify-between gap-[1.2rem]">
                        <GeneralBtn id="add_task" text={"Add new task"} add={true}
                        onClick={handleOnClick}
                        className={` w-fit bg-add hover:bg-addHover text-light text-[0.94rem] font-bold rounded-[2rem]`}  />
                        <IconBtn id="more_btn" widthOrClass={{btnWidth:"1.2rem"}} iconWidth="100%" Icon={<More/>}  
                        onClick={handleOnClick}
                        hover= {{light:"#e4ebfa",dark:"#20212C"}}/>
                        {miniModal == "more"?<DropDownSelect onClick={handleOnClick}/>:null}
                        
                    </div> 
                : null
                }
            </div>
        </div>
    )
}


function DropDownSelect({onClick}:EventListeners) {
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div  className={` ${classListExt("select",theme)} py-[.6rem] absolute w-full h-fit top-[3.5rem] z-10  text-right text-[1rem] flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-medium`}>
            <button id="h_edit" className={`  px-[1rem]  w-full  flex items-start text-grey hover:opacity-[50%] `}
            onClick={onClick}
            >
                <p>Edit Board</p>
            </button>
            <button id="h_delete" className={`  px-[1rem] w-full flex items-start text-red opacity-[90%] hover:opacity-[50%]`}
            onClick={onClick}
            >
                <p>Delete Board</p>
            </button> 
            
            
        </div>
        // <div className={ `${classListExt("select",theme)} absolute  w-full  flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-medium`}>
        //     <button className={`  px-[1rem]  w-full  flex items-start text-grey hover:opacity-[50%] `}>
        //         <p>Edit Board</p>
        //     </button>
        //     <button className={`  px-[1rem] w-full flex items-start text-red opacity-[90%] hover:opacity-[50%]`}>
        //         <p>Delete Board</p>
        //     </button> 
        // </div>
        
    )
}
export default Header; 

