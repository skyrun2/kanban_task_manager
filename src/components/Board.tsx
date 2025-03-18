import { IconBoard } from "./icons";


const Board  = () =>{
    return(
        <div className=" pl-sideBarLeft hover:bg-addHover hover:text-light w-[92%] h-[3rem] rounded-r-[2rem]">
            <button className=" w-full h-full flex items-center gap-[.5rem] font-bold text-[1rem]">
                <span className="w-[1rem] aspect-square">
                    <IconBoard className="text-grey"/>
                </span>
                <p>BoardName</p>
            </button>                                        
        </div>
    )
}
export  default Board;