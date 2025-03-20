
import { FC, ReactElement, useCallback, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";

import classListExt from "../../utils/classListExt";
import { LogoDark, LogoLight, More } from "../Icons";
import GeneralBtn from "../Atoms/GeneralBtn";

import IconBtn from "../Atoms/IconBtn";
import AddTaskModal from "./AddTaskModal";



const Header: FC = () =>{

    const setModalOpen = useKanbanState((state)=>state.actions.setModalOpen);
    const theme = useKanbanState((state)=>state.theme);
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    
    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        const id : string =  e.currentTarget.id;
        switch (true) {
            case id == "add_task":
                setModalOpen(AddTaskModal);
                console.log(id);
                
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
                <h2 id="current_board" className={" text-[1.5rem] font-semibold"}> Current Board</h2>
                <div id="control_features" className=" relative w-fit flex item-center justify-between gap-[1.2rem]">
                    <GeneralBtn id="add_task" text={"Add new task"} add={true}
                    onClick={handleOnClick}
                    className={` w-fit bg-add hover:bg-addHover text-light text-[0.94rem] font-bold rounded-[2rem]`}  />
                    <IconBtn btnWidth="1.2rem" iconWidth="100%" Icon={More} hover= {{light:"#e4ebfa",dark:"#20212C"}}/>
                    {/* <DropDownSelect/> */}
                </div> 
            </div>
        </div>
    )
}


function DropDownSelect() {
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div className={` ${classListExt("select",theme)} shadow p-[1rem] absolute top-[3.5rem] w-full    text-right text-[1rem] flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-medium `}>
            <button className={`  px-[1rem]  w-full flex items-start text-grey hover:opacity-[50%] `}>
                <p>Edit Board</p>
            </button>
            <button className={`  px-[1rem] w-full flex items-start text-red opacity-[90%] hover:opacity-[50%]`}>
                <p>Delete Board</p>
            </button>
            
            
        </div>
    )
}
export default Header; 
