import { FC, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import { InputBtnProps, iTheme } from "../../lib/types/store";

const IconBtn : FC<InputBtnProps> = ({Icon,iconWidth,hover,btnWidth}) =>{
    const theme = useKanbanState((state)=>state.theme);
    const [isHover,setHover] = useState(false);
    const handleMouseEnter = () =>{
        setHover(true);
    }
    const handleMouseLeave = () =>{
        setHover(false);
    }
    const iconStyle = {        
        width:`${iconWidth}`,
        backgroundColor: isHover? themeStyle(hover,theme) : "transparent",
    }   
    function themeStyle(styleObj:{light:string,dark:string},theme:iTheme){
        if(!hover) return "transparent"
        if(theme == "light") return styleObj.light;
        else if(theme == "dark") return styleObj.dark;
    }

    
    return(        
        <button id="more_btn" className={`rounded-[1rem] flex items-center justify-center overflow-hidden`  }
            style={{width:`${btnWidth}`}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className=" h-full flex items-center justify-center"
                style={iconStyle}
            >
                <Icon/>
            </div>
        </button>        
    )
}
export default IconBtn