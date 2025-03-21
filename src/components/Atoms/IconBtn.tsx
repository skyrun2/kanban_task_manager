import { FC, useState } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import { IconBtnProps, iTheme } from "../../lib/types/store";

const IconBtn : FC<IconBtnProps> = ({id,Icon,iconWidth,hover,widthOrClass,onClick}) =>{
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
        backgroundColor: isHover && hover? themeStyle(hover,theme) : "transparent",
    }   
    function themeStyle(styleObj:{light:string,dark:string},theme:iTheme){
        if(!hover) return "transparent"
        if(theme == "light") return styleObj.light;
        else if(theme == "dark") return styleObj.dark;
    }
    let className = `rounded-[1rem] flex items-center justify-center overflow-hidden`
    if(widthOrClass.className) className += widthOrClass.className
    
    return(        
        <button id={id} className={className }
            style={widthOrClass.btnWidth?{width:`${widthOrClass.btnWidth}`}:{}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div className=" h-full flex items-center justify-center"
                style={iconStyle}
            >
                {Icon}
            </div>
        </button>        
    )
}
export default IconBtn