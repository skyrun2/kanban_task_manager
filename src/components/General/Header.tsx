
import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";

import classListExt from "../../utils/classListExt";
// import ControlFeatures from "./ControlFeatures";
// import Logo from "./Logo";
import { LogoDark, LogoLight, More } from "../Icons";
import GeneralBtn from "../Atoms/GeneralBtn";
import MoreBtn from "../Atoms/MoreBtn";
import IconBtn from "../Atoms/IconBtn";


const Header: FC = () =>{
    const logo = useKanbanState((state)=>state.logo);
    const theme = useKanbanState((state)=>state.theme);
    const headerHeight = useKanbanState((state)=>state.headerHeight);
    
    
    console.log(theme);
    
    return(
        <div id="header" className={`${classListExt("header",theme)}  w-full  shrink-0  flex items-center justify-between font-jakarta border-b `}
            style={{height:`${headerHeight}rem`}}
        >
            <Logo/>
            <div id="right" className=" pl-boardLeft pr-[1rem] h-full   grow  flex items-center justify-between ">
                <h2 id="current_board" className={" text-[1.5rem] font-semibold"}> Current Board</h2>
                <ControlFeatures/>
            </div>
        </div>
    )
}

function Logo() {
    const theme = useKanbanState((state)=>state.theme);
    return(
        <div id="logo" className={` ${classListExt("logo",theme)} pl-[2rem] w-left h-full flex items-center border-r  cursor-pointer ` } >
            <div className=" h-[1.63rem]">
                {theme == "dark" ? <LogoLight /> : <LogoDark/>}          
            </div>
                
        </div>
    )
}

function ControlFeatures() {
    return(
        <div id="control_features" className=" w-fit flex item-center justify-between gap-[1.2rem]">
            <GeneralBtn text={"Add new task"} add={true} width={"fit"}/>
            <IconBtn btnWidth="1.2rem" iconWidth="100%" Icon={More} hover= {{light:"#e4ebfa",dark:"#20212C"}}/>
        </div> 
    )
}
export default Header; 
