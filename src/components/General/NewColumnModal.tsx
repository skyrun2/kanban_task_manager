    import { FC } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import { IconCross } from "../Icons";
import IconBtn from "../Atoms/IconBtn";
import GeneralBtn from "../Atoms/GeneralBtn";
import { iBoard, iChange, iClick } from "../../lib/types/store";

const  NewColumnModal : FC  = () => {
    const theme = useKanbanState((state)=>state.theme);
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    console.log(currentBoard.name);
    
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[23rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
            <h1 className=" text-[1.1rem]">Add new Column</h1>
            <Field text="Name" Input={<FieldInput disabled={true} value={currentBoard.name} />} />
            <div className="w-full flex flex-col gap-[.7rem]">
                <p>Columns</p>
                <div className=" w-full flex flex-col gap-[.7rem] ">
                    <Field Input={<FieldInput width="24rem" />} Icon={<IconBtn id="" widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />}/>
                    
                    
                </div>
            </div>            
            <GeneralBtn id="" text="Add New Subtask" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />  
            <GeneralBtn id="" text="Save Changes"  className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light  text-[0.8rem] font-bold rounded-[2rem]`} />  
            
        </div>
    )
}

interface ColumnFieldProps {
    onClick?:(e:iClick)=>void;
    onChange?:(e:iChange)=>void;
    currentBoard:iBoard;
    
}
const ColumnField:FC<ColumnFieldProps> = ({onClick,onChange,currentBoard}) =>{
    
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            {currentBoard.columns.map((e,i)=>{
                
                
                return(
                    <Field key={i} Input={<FieldInput id={"nc_"+String(i)} onChange={onChange} value={e.name} />}
                    Icon={<IconBtn onClick={onClick}  id={String(i)} widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />} 
                    
                        />
                )
            })}
        </div>
    )
}


export default NewColumnModal;