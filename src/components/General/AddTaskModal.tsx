import { FC, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";
import GeneralBtn from "../Atoms/GeneralBtn";
import { IconCross } from "../Icons";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import IconBtn from "../Atoms/IconBtn";

import FieldTextarea from "../Atoms/FieldTextArea";
import DropDown from "../Atoms/DropDown";
import { iClick, iTask } from "../../lib/types/store";

const  AddTaskModal : FC = () =>{
    const theme = useKanbanState((state)=>state.theme);
    const isDropDownOpen = useKanbanState((state)=>state.isDropDownOpen);
    const setDropDownOpen = useKanbanState((state)=>state.actions.setDropDownOpen);
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const [newTask,setNewTask] = useState<iTask>({title:"",description:"",status:"",subTasks:[]});

    const handleOnClick  = (e:iClick) =>{
        e.preventDefault();
        const id = e.currentTarget.id;
        switch (true) {
            case id == "nt_dropdown_btn":
                console.log("1");
                
                setDropDownOpen();
                break;
        
            default:
                break;
        }
    }
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[35rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
                <h1 className="text-[1.125rem]">Add New Tasks</h1>
                <Field text="Title" Input={<FieldInput/>} />
                <Field text="Description" Input={<FieldTextarea/>}/>
                <SubTasks/>
                <GeneralBtn id="nt_add_subtask" text="Add New Subtask" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />                                                
                <DropDown id ="nt_dropdown_btn" text="Status" className={` relative w-full flex flex-col gap-[.7rem]`} columns={currentBoard.board.columns} onClick={handleOnClick} isDropDownOpen={isDropDownOpen}/>                
                <GeneralBtn id="nt_create_task" text="Create Task" className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light text-[0.8rem] font-bold rounded-[2rem]`} />
        </div>
    )
}
const SubTasks : FC = () =>{
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            <p>Subtasks</p>
            
            <Field  Input={<FieldInput width="24rem"/>} Icon={<IconBtn id="" widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />}/>                     
        </div>
    )
}
export default AddTaskModal;
// --background-color-add: #635fc7;    
//     --background-color-addHover: #A8A4FF;    