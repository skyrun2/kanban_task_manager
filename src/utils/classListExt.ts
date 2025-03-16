import { iClassList, iTheme } from "../lib/types/store";

function classListExt(element:string,theme:iTheme) {
    
    const classList : iClassList = {
        body  :  {
            light:" bg-boardCardLight ",
            dark:" bg-boardCardDark "
        },        
        header  :  {
            light:" bg-mainLight border-b border-b-lineLight text-dark",
            dark:" bg-mainDark border-b border-b-lineDark text-light ",
            
        },
        logo  :  {
            light:" border-r border-r-lineLight ",
            dark:" border-r border-r-lineDark "
        },
        more  :  {
            light:" hover:bg-moreHoverLight",
            dark:" hover:bg-moreHoverDark"
        },
        sideBar  :  {
            light:" bg-mainLight border-r border-r-lineLight",
            dark:" bg-mainDark border-r border-r-lineDark"
        },
        taskCard  :  {
            light:" bg-mainLight border border-lineLight text-dark",
            dark:" bg-mainDark border border-lineDark text-light"
        },
        theme  :  {
            light:" bg-boardCardLight ",
            dark:" bg-boardCardDark "
        },
        themeBtn  :  {
            light:"absolute top-[50%]  right-[15%]   rounded-[100%] h-[75%] aspect-square bg-white ",
            dark:" absolute top-[50%]  left-[15%]   rounded-[100%] h-[75%] aspect-square bg-white"
        }
    }
    return classList[element][theme]
    
}
export default classListExt