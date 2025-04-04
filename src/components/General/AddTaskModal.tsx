import { FC, useEffect, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";
import GeneralBtn from "../Atoms/GeneralBtn";
import { IconCross } from "../Icons/index.ts";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import IconBtn from "../Atoms/IconBtn";

import FieldTextarea from "../Atoms/FieldTextArea";
import DropDown from "../Atoms/DropDown";
import { EventListeners, iBlur, iChange, iClick,iSubtasks, iTask } from "../../lib/types/store";
import React from "react";

const  AddTaskModal : FC = () =>{
    const editBoard = useKanbanState((state)=>state.actions.editBoard);
    const theme = useKanbanState((state)=>state.theme);
    const currentTask = useKanbanState((state)=>state.currentTask);
    const task = useKanbanState((state)=>state.currentTask).task;
    const isDropDownOpen = useKanbanState((state)=>state.isDropDownOpen);
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const columns = currentBoard.board.columns;
    // const [newTask,setNewTask] = useState<iTask>({title:task.title,description:task.description,status:task.status,subTasks:task.subTasks});
    const  [currentColumn,setCurrentColumn] = useState(currentTask.column);
    const setDropDownOpen = useKanbanState((state)=>state.actions.setDropDownOpen);
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const [subTasksCount, setSubtasksCount] = useState(0);
    const  [subTasks,setSubTasks] = useState<{id:number,name:string,isDefault:boolean}[]>([{id:0,name:"",isDefault:true}]);    
    const [ taskName, setTaskName] = useState<{isUsed:boolean,isRequired:boolean,status?:string,name:string}>({isUsed:false,isRequired:false,status:"",name:""});
    const [desc,setDesc] = useState(task.description);
    const tasks = currentBoard.board.columns.map((e)=>  { return e.tasks} ).flat();
    const [ used, setUsed] = useState<{isUsed:boolean,index:number}>({isUsed:false,index:0});
    
    
    
    
    const handleOnClick = (e:iClick) =>{
        e.preventDefault();
        const id = e.currentTarget.id;
        const last = id.split("_")[id.split("_").length-1];
        
        
        switch (true) {
            case id == "nt_dropdown_btn":                                
                setDropDownOpen();
                break;
            case id == "dds_"+last:{
                setCurrentColumn(Number(last));                
            }
                break;
            case id == "nt_add_subtask":{
                let isRequired = false;
                const updatedSubtasks  = subTasks;
                let isOkay = false;
                subTasks.forEach((e,i)=>{
                    const value = e.name.trim();
                    if (!value.length) isRequired = true;                    
                    updatedSubtasks[i].isDefault = false;
                    updatedSubtasks[i].name = value;
                })
                isOkay = !used.isUsed && !isRequired;
                
                
                if(isOkay){
                    setSubtasksCount(subTasksCount+1);
                    setSubTasks([...updatedSubtasks,{id:subTasksCount+1,name:"",isDefault:true}]);
                }
                else setSubTasks([...updatedSubtasks])
            }
            break;
            case id == "nt_create_task":{
                const board = currentBoard.board;
                const task_name = {...document.getElementById("na_title") as HTMLInputElement}.value.trim().toLowerCase();
                const taskDesc = {...document.getElementById("nt_desc") as HTMLTextAreaElement}.value.trim();
                const sub_tasks : iSubtasks[] = []
                let isRequired =  false;
                let isOkay = false;                            
                let isUsed = false;                                
                tasks.forEach((e)=>{
                    if(e.title.toLowerCase() === task_name ){
                        isUsed = true;
                    }
                })
                if(isUsed){

                    setTaskName({isUsed,isRequired:taskName.isRequired,status:"Used",name:task_name});
                }
                else{
                    setTaskName({isUsed,isRequired:taskName.isRequired,status:"",name:task_name});
                }

                if(!task_name.length){
                    isRequired = true;

                }
                if (currentTask.isEditing){
                    isOkay = !used.isUsed && !isRequired ;                    
                }
                else isOkay = !used.isUsed && !isRequired && !isUsed;
                

                
                if (isRequired) {
                    setTaskName({isUsed:taskName.isUsed,isRequired, status:"Required",name:task_name});   
                }
                else if(isUsed){
                    setTaskName({isUsed:taskName.isUsed,isRequired,status:"Used",name:task_name});   
                }
                else{
                    setTaskName({isUsed:taskName.isUsed,isRequired,status:"",name:task_name});   
                }
                const updatedSubtasks  = subTasks;
                subTasks.forEach((e,i)=>{
                    const value = e.name.trim();
                    if (!value.length) isRequired = true;
                    updatedSubtasks[i].isDefault = false;
                    updatedSubtasks[i].name = value;
                    sub_tasks.push({title:e.name,isCompleted:false});
                })
                
                console.log(isOkay,isUsed);
                
                if(isOkay){
                    const status =  columns[currentColumn].name
                    const task: iTask = {title:task_name,subTasks:sub_tasks,description:taskDesc,status};
                    if(currentTask.isEditing){
                        board.columns[currentColumn].tasks[currentTask.id] = task;
                        
                    }
                    else {                        
                        board.columns[currentColumn].tasks.push(task)
                    }
                    editBoard({id:currentBoard.id,board});
                    setModalClose();
                    
                }
            }
            break;
            default:
                break;
        }
    }
    const handleOnChange = (e:iChange) =>{
        const id = e.currentTarget.id;
        const value = e.currentTarget.value;
        const index = id.split("_")[id.split("_").length-1];
        switch (true) {
            case id ==  "na_"+index:{
                const updatedSubTasks = subTasks;
                updatedSubTasks[Number(index)].isDefault = false;
                updatedSubTasks[Number(index)].name = value;
                setSubTasks([...updatedSubTasks]);                                        
            }        
                break;            
            default:
                break;
        }

    }
    const handleOnBlur = (e:iBlur) =>{
        const id = e.currentTarget.id;
        const value = e.currentTarget.value.toLowerCase();
        const index = id.split("_")[id.split("_").length-1];
        
        switch (true) {
            case id ==  "na_"+index:{
                let isUsed = false;
                let usedIndex = 0;
                const updatedSubTasks = subTasks;                
                updatedSubTasks[Number(index)].name = value;
                setSubTasks([...updatedSubTasks]);

                subTasks.forEach((e,i)=> {
                    if(e.name.toLowerCase() === value &&  i !== Number(index) ){
                        isUsed = true;
                        usedIndex = i;
                    }
                })
                setUsed({isUsed,index:usedIndex});
                
                                
                
            }        
                break;
            case id ==  "na_title":{
                const task_name = {...document.getElementById("na_title") as HTMLInputElement}.value.trim().toLowerCase();
                let isUsed = false;                                
                tasks.forEach((e)=>{
                    if(e.title.toLowerCase() === task_name ){
                        isUsed = true;
                    }
                })
                if(isUsed){

                    setTaskName({isUsed,isRequired:taskName.isRequired,status:"Used",name:task_name});
                }
                else{
                    setTaskName({isUsed,isRequired:taskName.isRequired,status:"",name:task_name});
                }
            }        
                break;
    case id == "nt_desc":{
                const desc = {...document.getElementById("nt_desc") as HTMLInputElement}.value.trim();
                setDesc(desc);
    }
                break;
            default:
                break;
        }
    }
    useEffect(()=>{
        const updatedSubTasks = [...subTasks];
        updatedSubTasks.splice(0,1);
        if (task.subTasks.length) {
                task.subTasks.forEach((e,i)=>{
                updatedSubTasks.push({id:i,name:e.title,isDefault:true});
            })            
            setSubTasks([...updatedSubTasks]);
            setTaskName({isUsed:taskName.isUsed,isRequired:false,status:"",name:task.title});   
        }
        
    },[])
    
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[35rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
            <h1 className="text-[1.125rem]">Add New Tasks</h1>                
            <Field text="Title" Input={<FieldInput id="na_title" onBlur={handleOnBlur} value={taskName.name} status={taskName.status}/>} />
            <Field  text="Description" Input={<FieldTextarea id="nt_desc" value={desc} />}/>
            <SubTasks subtasks={subTasks} onChange={handleOnChange} onBlur={handleOnBlur} used={used}/>
            <GeneralBtn id="nt_add_subtask" onClick={handleOnClick} text="Add New Subtask" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />                                                
            <DropDown id ="nt_dropdown_btn" columns={{columns,current:currentBoard.board.columns[currentColumn]}} text="Status" className={` relative w-full flex flex-col gap-[.7rem]`}  onClick={handleOnClick} isDropDownOpen={isDropDownOpen}/>                
            <GeneralBtn id="nt_create_task" onClick={handleOnClick} text="Create Task" className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light text-[0.8rem] font-bold rounded-[2rem]`} />
        </div>
    )
}
interface SubTasksProps{
    subtasks:{id:number,name:string,isDefault:boolean}[];
    used? :{isUsed:boolean,index:number}
}
const SubTasks : FC<EventListeners & SubTasksProps> = ({onChange,onBlur,subtasks,used}) =>{
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            <p>Subtasks</p>      
            {
                subtasks.map((e,i)=>{
                    const count = subtasks.length;                    
                    let status = "";
                    if(used?.isUsed && used.index == i) status = "Used";
                    if(!e.name.length && !e.isDefault) status= "Required";

                    return(
                        <Field key={i}  Input={<FieldInput id={"na_"+String(i)} onBlur={onBlur} onChange={onChange}  status={status} value={e.name} width={count>1?"24rem":null}/>} 
                        Icon={count>1?<IconBtn id="" widthOrClass={{btnWidth:"1rem"}} iconWidth="full" 
                        Icon={
                        
                        <IconCross/>}
                        
                        />:null }
                        />                     
                    )
                })
            }      
        </div>
    )
}
export default AddTaskModal;
// --background-color-add: #635fc7;    
//     --background-color-addHover: #A8A4FF;    
