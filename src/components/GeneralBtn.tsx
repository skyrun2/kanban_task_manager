
import { AddTask } from "./icons";

const GeneralBtn = () =>{
    return(
        <div id="add_btn_ctrl">
            <button id="add_btn" className="
            py-[.7rem] px-[1rem] font-semibold text-[.94rem]
            flex items-center gap-[.15rem]
            bg-add hover:bg-addHover text-light rounded-[2rem]">
                <span className="w-[.5rem] aspect-square shrink-0">
                     <AddTask/>
                </span>
                <span>Add New task</span>
            </button>
        </div>
    )
}
export default GeneralBtn;