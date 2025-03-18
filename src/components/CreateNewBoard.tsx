
import { AddTask, IconBoard } from "./icons";

const CreateNewBoard = () =>{
    return(
        <div id="create_new_board_ctrl" className=" pl-sideBarLeft hover:  w-[92%] h-[3rem] rounded-r-[2rem] hover:opacity-[75%]">
            <button id="create_new_board" className=" w-full h-full flex items-center gap-[.5rem]  text-[#635fc7] font-semibold text-[1rem] ">
                <span className="w-[1rem] aspect-square shrink-0">
                <IconBoard/>
                </span>
                <span id="text_board_name_span" className=" w-[100%] h-full flex items-center gap-[.4rem] ">
                    <span className=" mt-[.1rem] w-[.5rem] aspect-square">
                       <AddTask/> 
                    </span>
                    <p> Create New Board</p>
                </span>
            </button>                                        
        </div>
    )
}
export  default CreateNewBoard;