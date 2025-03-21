    import { FC } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import { IconCross } from "../Icons";
import IconBtn from "../Atoms/IconBtn";
import GeneralBtn from "../Atoms/GeneralBtn";

const  NewColumnModal : FC  = () => {
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[23rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
            <h1 className=" text-[1.1rem]">Add new Column</h1>
            <Field text="Name" Input={<FieldInput disabled={true} value="Column" />} />
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


export default NewColumnModal;