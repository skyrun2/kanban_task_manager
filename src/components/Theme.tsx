import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import { DarkTheme, LightTheme } from "./icons";

const Theme = () =>{
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div id="theme_control" className={` ${classListExt("theme",theme)} w-[13.5rem] h-[3rem] flex items-center justify-around rounded-[.5rem]`}>
            <div className=" w-[1rem] aspect-square">
                <DarkTheme/>
            </div>
            <div id="theme_btn_ctrl" className=" w-[3rem] h-[1.2rem]">
                <button id="theme_btn" className=" relative w-full h-full bg-add rounded-[1rem]">
                    <div id="circle" className={classListExt("themeBtn",theme)}></div>
                </button>
            </div>
            <div className=" w-[1.3rem] aspect-square">
                <LightTheme/>
            </div>
        </div>
    )
}
export default Theme;