import { FC } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import GeneralBtn from "../Atoms/GeneralBtn";
import React from "react";
// import { iClick } from "../../lib/types/store";

const DeleteModal : FC = () =>{
    const theme = useKanbanState((state)=>state.theme);
    // const handleOnClick = (e:iClick)=>{
    //     const id = e.currentTarget.id;
    //     switch (true) {
    //         // case id == "m_delete":{

    //         // }
                
    //             // break;
        
    //         default:
    //             break;
    //     }
    // }
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] h-[15rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1.2rem]       
                         `}>
            <h1 className=" text-[1.15rem] text-red font-bold ">Delete this task?</h1>
            <p className="text-[0.82rem] text-grey font-normal leading-[1.6rem]  ">Are you sure you want to delete the 'Build UI for search' board? This action will remove all columns and tasks and cannot be reversed.</p>
            <div className="grid grid-cols-2  gap-[.5rem]">
                <GeneralBtn id="m_delete" text="Delete" className={` w-full h-[2.5rem] bg-red text-light text-[0.8rem] font-bold rounded-[2rem] hover:opacity-[50%]`}/>
                <GeneralBtn id="m_cancel" text="Cancel" className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem] hover:opacity-[50%]`}/>
            </div>
        </div>
    )
}
export default DeleteModal;