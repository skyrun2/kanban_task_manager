import { FC, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import { EventListeners, iClick, iSubtasks } from "../../lib/types/store";
import Field from "./Field";

import IconBtn from "../Atoms/IconBtn";

import DropDown from "../Atoms/DropDown";

import classListExt from "../../utils/classListExt";
import { More } from "../Icons/index";
import FieldCheckBox from "../Atoms/FieldCheckBox";
import AddTaskModal from "./AddTaskModal";

const  TaskModal : FC = () =>{
    const editBoard = useKanbanState((state)=>state.actions.editBoard);
    const theme = useKanbanState((state)=>state.theme);
    const isDropDownOpen = useKanbanState((state)=>state.isDropDownOpen);
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const currentTask = useKanbanState((state)=>state.currentTask);
    const setCurrentTask = useKanbanState((state)=>state.actions.setCurrentTask);
    const columns = currentBoard.board.columns;
    const setDropDownOpen = useKanbanState((state)=>state.actions.setDropDownOpen);
    const setModalOpen = useKanbanState((state)=>state.actions.setModalOpen);
    const [subTasks,setSubTasks] = useState<iSubtasks[]>(currentTask.task.subTasks);
    
    
    
    
    

    const handleOnClick = (e:iClick) =>{
        e.preventDefault();
        const id = e.currentTarget.id;        
        const index = id.split("_")[id.split("_").length-1];
        
        
        const updatedSubtasks = currentTask.task.subTasks;
        const updatedTask = currentTask.task;
        const updatedBoard = currentBoard.board;
        
        switch (true) {
            case id ==  "t_"+index:{
                updatedSubtasks[Number(index)].isCompleted = !updatedSubtasks[Number(index)].isCompleted;
                updatedTask.subTasks = updatedSubtasks;                                                                
                updatedBoard.columns[currentTask.column].tasks[currentTask.id] = updatedTask;
                editBoard({id:currentBoard.id,board:{...updatedBoard}});
                setSubTasks([...updatedSubtasks]);

                
            }
            break;
            case id == "t_dropdown_btn":                                
                setDropDownOpen();
                break;

            case id == "dds_"+index:{                
                //SET NEW STATUS OF THE TASK
                updatedTask.status = updatedBoard.columns[Number(index)].name;
                // DELETE TASK FROM PREVIOUS COLUMN
                updatedBoard.columns[Number(index)].tasks.push(updatedTask);
                // ADD TASK TO NEW COLUMN
                updatedBoard.columns[currentTask.column].tasks.splice(currentTask.id,1);
                //SET CURRENT TASK
                setCurrentTask({
                    id:updatedBoard.columns[Number(index)].tasks.length-1,
                    task:updatedTask,
                    column:Number(index)

                })
                //EDIT CURRENT BOARD
                editBoard({id:currentBoard.id,board:{...updatedBoard}});
                
                
            }
            break;
            case id =="t_edit_task":{

                setModalOpen(AddTaskModal);
            }
                break;
            default:
                break;
        }
        
        
        
    }
    // useEffect(()=>{
    //     console.log(currentBoard.board);
        
    // },[currentBoard.board])
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[25rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
                <div className="w-full flex items-center justify-between  ">
                    <h1 className="text-[1.125rem]">{currentTask.task.title}</h1>
                    <div className=" relative w-fit ">
                        <IconBtn id="more_btn" widthOrClass={{btnWidth:"1.2rem"}} iconWidth="100%" iconHeight="2rem" Icon={<More/>}
                            onClick={handleOnClick}
                            hover= {{light:"#e4ebfa",dark:"#20212C"}}
                        />
                        <DropDownSelect onClick={handleOnClick}/>
                    </div>
                        
                </div>
                <p className=" font-semibold text-[.81rem] text-grey ">{currentTask.task.description.length? currentTask.task.description.length:"No description"}</p>                
                <SubTasks subtasks={subTasks} onClick={handleOnClick}/>                
                <DropDown id ="t_dropdown_btn" columns={{columns,current:currentBoard.board.columns[currentTask.column]}} text="Status" className={` relative w-full flex flex-col gap-[.7rem]`}  onClick={handleOnClick} isDropDownOpen={isDropDownOpen}/>                
                
        </div>
    )       
}
interface SubTasksProps{
    subtasks:iSubtasks[];
}
const SubTasks : FC<EventListeners & SubTasksProps> = ({subtasks,onClick}) =>{
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            <p>Subtasks</p>      
            {
                subtasks.map((e,i)=>{                                                        
                    return(
                        <Field key={i} Input={<FieldCheckBox id={"t_"+String(i)} onClick={onClick} subtask={e} isComplete={e.isCompleted} />} />
                    )
                })
            }      
        </div>
    )
}
function DropDownSelect({onClick}:EventListeners) {
    const theme = useKanbanState((state)=>state.theme);
    return (
        <div className={` ${classListExt("select",theme)} py-[1rem] absolute left-[100%] top-[3rem] translate w-[12rem] h-fit   z-10  text-right text-[1rem] flex flex-col items-start justify-items-start gap-[.5rem] rounded-[.5rem] font-[500]`}>
            <button id="t_edit_task" className={`  px-[1rem]  w-full  flex items-start text-grey hover:opacity-[50%] `}
            onClick={onClick}
            >
                <p>Edit Task</p>
            </button>
            <button  id="t_delete_task"className={`  px-[1rem] w-full flex items-start text-red opacity-[90%] hover:opacity-[50%]`}>
                <p>Delete Task</p>
            </button> 
            
            
        </div>                
    )
}

export default TaskModal;