import { useKanbanState } from "../lib/store/useKanbanStore";

import classListExt from "../utils/classListExt";
import { More } from "./icons";

const MoreBtn = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div id="more_features" className=" w-[3rem] flex items-center justify-center">
            <div id="more_btn_ctrl" className="w-[1.2rem] ">
                <button id="more_btn" className={` ${classListExt("more",theme)} w-[100%] rounded-[1rem] flex items-center justify-center  `  }>
                    <div className=" w-[1.2rem] h-[2rem] flex items-center justify-center">
                        <More/>
                    </div>
                </button>
            </div>
    </div> 
    )
}
export default MoreBtn