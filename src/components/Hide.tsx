import { IconHideSidebar } from "./icons";

const Hide = () =>{
    return(
        <div id="hide" className=" pl-[.5rem] pt-[1rem] w-[10rem] h-[2rem] hover:opacity-[75%]">
            <button className="w-full h-full flex gap-[.5rem] items-center font-semibold">
                <span className="h-[1rem] aspect-square">
                    <IconHideSidebar/>
                </span>
                <p>Hide sidebar</p>
            </button>
        </div>
    ) 
}
export default Hide;