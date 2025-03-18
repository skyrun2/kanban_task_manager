
import { useKanbanState } from "../lib/store/useKanbanStore";
import assetsData from "../utils/assetsData";
import classListExt from "../utils/classListExt";
import ControlFeatures from "./ControlFeatures";
import Logo from "./Logo";


const Header = () =>{
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
export default Header;