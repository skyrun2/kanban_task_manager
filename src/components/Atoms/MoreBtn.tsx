import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";

import classListExt from "../../utils/classListExt";
import { More } from "../Icons/index";

const MoreBtn: FC = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(    
        // <div id="more_btn_ctrl" className="w-[1.2rem] flex items-center">
            <button id="more_btn" className={` ${classListExt("more",theme)} w-[1.2rem] rounded-[1rem] shrink-0 flex items-center justify-center  `  }>
                <div className=" w-[100%]  flex items-center justify-center">
                    <More/>
                </div>
            </button>
        // </div>
     
    )
}
export default MoreBtn