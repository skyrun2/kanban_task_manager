
import { useKanbanState } from "../lib/store/useKanbanStore";
import assetsData from "../utils/assetsData";
import classListExt from "../utils/classListExt";


const Header = () =>{
    const logo = useKanbanState((state)=>state.logo);
    const theme = useKanbanState((state)=>state.theme);
    
    
    console.log(theme);
    
    return(
        <div id="header" className={`${classListExt("header",theme)}  w-full h-[100%]  flex items-center justify-between font-jakarta border-b `} >
            <div id="logo" className={` ${classListExt("logo",theme)} pl-[2rem] w-left flex items-center border-r  cursor-pointer ` } >
                <div className="w-[45%]">
                <img src={logo} className="w-[100%]" alt="" />
                </div>
            </div>
            <div id="right" className=" pr-[2.5rem]  w-[54.5rem] flex items-center justify-between ">
                <h2 id="current_board" className={" text-[1.5rem] font-semibold"}> Current Board</h2>
                <div id="control_features" className=" w-fit flex item-center justify-end gap-[1.4rem]">
                    <div id="add_btn_ctrl">
                            <button id="add_btn" className="
                             py-[.7rem] px-[1rem] font-semibold text-[.9rem]
                             flex items-center gap-[.2rem]
                              bg-add hover:bg-addHover text-light rounded-[2rem]">
                                <span className="w-[.5rem]">
                                    <img className="w-[100%]" src={assetsData.add} alt="" />
                                </span>
                                <span>Add New task</span>
                            </button>
                    </div>
                    <div id="more_features" className="flex items-center justify-center">
                        <div id="more_btn_ctrl" className="w-[1.2rem] ">
                            <button id="more_btn" className={` ${classListExt("more",theme)} w-[100%] rounded-[1rem] flex items-center justify-center  `  }>
                                <div className=" w-[1rem] h-[2rem] flex items-center justify-center">
                                    <img className=" w-[100%] h-[100%] " src={assetsData.more} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;