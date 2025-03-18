import { useKanbanState } from "../lib/store/useKanbanStore";
import classListExt from "../utils/classListExt";
import { LogoDark,LogoLight } from "./icons";

const Logo = () =>{
    const theme = useKanbanState((state)=>state.theme);
    console.log(theme == "dark"? LogoDark : LogoLight);
    
    return(
        <div id="logo" className={` ${classListExt("logo",theme)} pl-[2rem] w-left h-full flex items-center border-r  cursor-pointer ` } >
            <div className=" h-[1.63rem]">
                {theme == "dark" ? <LogoLight /> : <LogoDark/>}            
            </div>
                
        </div>
    )
}
export default Logo;