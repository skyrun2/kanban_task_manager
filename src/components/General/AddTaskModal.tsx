import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import classListExt from "../../utils/classListExt";
import GeneralBtn from "../Atoms/GeneralBtn";
import { ArrowDown, IconCross } from "../Icons";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import IconBtn from "../Atoms/IconBtn";
import colorData from "../../utils/colorData";

const  AddTaskModal : FC = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] ab_center w-[30rem] h-[38rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                         flex flex-col gap-[1rem]
                         `}>
                <h1 className="text-[1.125rem]">Add New Tasks</h1>
                <Field text="Title" input={"input"} />
                <Field text="Description" input={"textarea"}/>
                <label htmlFor="" className="w-full flex flex-col gap-[.7rem] ">
                    <p>Subtask</p>
                    <div className="w-full flex justify-between">
                        <FieldInput width="24rem"/>
                        <IconBtn btnWidth="1rem" iconWidth="full" Icon={IconCross} />
                    </div>
                </label>
                <GeneralBtn text="Add new Subtask" add={true} width="full" backgroundColor={colorData.light} color={colorData.purple}/>
                <div>
                    <p>Status</p>
                    <div className="w-full">
                        <button className="w-full">
                            <p>Todo</p>
                            <ArrowDown/>
                        </button>
                    </div>
                </div>
                <GeneralBtn text="Create Task" width="full"/>
        </div>
    )
}
export default AddTaskModal;
// --background-color-add: #635fc7;    
//     --background-color-addHover: #A8A4FF;    