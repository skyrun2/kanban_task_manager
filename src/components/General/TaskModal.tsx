import { FC, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import { EventListeners, iClick, iSubtasks, iTask } from "../../lib/types/store";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import IconBtn from "../Atoms/IconBtn";
import GeneralBtn from "../Atoms/GeneralBtn";
import DropDown from "../Atoms/DropDown";
import FieldTextarea from "../Atoms/FieldTextArea";
import classListExt from "../../utils/classListExt";
import { IconCross } from "../Icons";

const  TaskModal : FC = () =>{
    const editBoard = useKanbanState((state)=>state.actions.editBoard);
    const theme = useKanbanState((state)=>state.theme);
    const isDropDownOpen = useKanbanState((state)=>state.isDropDownOpen);
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const currentTask = useKanbanState((state)=>state.currentTask);
    const columns = currentBoard.board.columns;

    const  [currentColumn,setCurrentColumn] = useState(0);
    const [newTask,setNewTask] = useState<iTask>({title:"",description:"",status:"",subTasks:[]});
    
    
    
    

    const handleOnClick = (e:iClick) =>{
            e.preventDefault();
            // const id = e.currentTarget.id;
            
            
            
            
        }

    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[35rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
                <h1 className="text-[1.125rem]">{}</h1>                                
                <Field  text="Description" Input={<FieldTextarea id="nt_desc" />}/>
                <SubTasks subtasks={currentTask.task.subTasks}/>                
                <DropDown id ="nt_dropdown_btn" columns={{columns,current:currentBoard.board.columns[currentColumn]}} text="Status" className={` relative w-full flex flex-col gap-[.7rem]`}  onClick={handleOnClick} isDropDownOpen={isDropDownOpen}/>                
                
        </div>
    )       
}
interface SubTasksProps{
    subtasks:iSubtasks[];
}
const SubTasks : FC<EventListeners & SubTasksProps> = ({onChange,onBlur,subtasks}) =>{
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            <p>Subtasks</p>      
            {
                subtasks.map((e,i)=>{
                    const count = subtasks.length;                                        
                    return(
                        <Field key={i}  Input={<FieldInput id={"na_"+String(i)} onBlur={onBlur} onChange={onChange}  value={e.title} width={count>1?"24rem":null}/>} 
                        Icon={count>1?<IconBtn id="" widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>}/>:null }/>                     
                    )
                })
            }      
        </div>
    )
}

export default TaskModal;