import { useKanbanState } from "../lib/store/useKanbanStore"
import assetsData from "../utils/assetsData";
import classListExt from "../utils/classListExt";

const SideBar = () =>{
    
    const theme = useKanbanState((state)=>state.theme);

    
    const boardsCount = 0;
    return(
        <div className={`${classListExt("sideBar",theme)}  pt-[1rem] w-left h-full border-r shrink-0  flex flex-col text-grey `}>
            <h3  id="boards_counts" className=" pl-sideBarLeft pb-[1.5rem] text-[0.75rem] font-bold tracking-[0.15rem]">{"ALL BOARDS " + `(${boardsCount})`} </h3>
            <div id="boards_list" className=" w-full h-[77%] grid-cols-1 gap-[.2rem] overflow-y-auto">
                <div className=" pl-sideBarLeft hover:bg-addHover hover:text-light w-[92%] h-[3rem] rounded-r-[2rem]">
                    <button className=" w-full h-full flex items-center gap-[.5rem] font-bold">
                        <span className="w-[1rem] aspect-square">
                            <img className="w-full h-full text-grey bg-gradientLight" src={assetsData.board} alt="" />
                        </span>
                        <p>BoardName</p>
                    </button>                                        
                </div>

                <div className=" pl-sideBarLeft hover:bg-addHover hover:text-light w-[92%] h-[3rem] rounded-r-[2rem]">
                    <button className=" w-full h-full flex items-center gap-[.5rem] font-bold">
                        <span className="w-[1rem] aspect-square">
                            <img className="w-full h-full text-grey bg-gradientLight" src={assetsData.board} alt="" />
                        </span>
                        <p>BoardName</p>
                    </button>                                        
                </div>

                <div id="create_new_board_ctrl" className=" pl-sideBarLeft hover:  w-[92%] h-[3rem] rounded-r-[2rem]">
                    <button id="create_new_board" className=" w-full h-full flex items-center gap-[.5rem]  text-[#635fc7] font-semibold text-[1rem] ">
                        <span className="w-[1rem] aspect-square">
                            <img className="w-full h-full text-grey bg-gradientLight" src={assetsData.purpleBoard} alt="" />
                        </span>


                        <span id="text_board_name_span" className=" w-[100%] h-full flex items-center gap-[.1rem] ">
                            <span className=" mt-[.1rem] w-[.6rem] aspect-square">
                                <img className="w-full h-full text-grey bg-gradientLight" src={assetsData.purpleAdd} alt="" />
                            </span>
                            <p> Create New Board</p>
                        </span>
                    </button>                                        
                </div>
            </div>
            <div id="side_features" className=" pl-sideBarLeft w-full flex flex-col ">
                <div id="theme_control" className={` ${classListExt("theme",theme)} w-[13.5rem] h-[3rem] flex items-center justify-around rounded-[.5rem]`}>
                    <div className=" w-[1rem] aspect-square">
                        <img className=" w-[full] aspect-square" src={assetsData.dark} alt="" />
                    </div>
                    <div id="theme_btn_ctrl" className=" w-[3rem] h-[1.2rem]">
                        <button id="theme_btn" className=" relative w-full h-full bg-add rounded-[1rem]">
                            <div id="circle" className={classListExt("themeBtn",theme)}></div>
                        </button>
                    </div>
                    <div className=" w-[1.3rem] aspect-square">
                        <img className=" w-[full] aspect-square" src={assetsData.light} alt="" />
                    </div>
                </div>
                <div id="hide" className=" pl-[.5rem] pt-[1rem] w-[10rem] h-[2rem]">
                    <button className="w-full h-full flex gap-[.5rem] items-center font-semibold">
                        <span className="h-[1rem] aspect-square">
                            <img className=" h-full aspect-square" src={assetsData.hide} alt="" />
                        </span>
                        <p>Hide sidebar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SideBar