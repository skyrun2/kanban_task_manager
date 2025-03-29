import { FC } from "react";
import { OverlayProps } from "../../lib/types/store";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import TaskModal from "./TaskModal";

const Overlay : FC = ()=>{
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const isModalOpen = useKanbanState((state)=>state.isModalOpen);
    const Modal = useKanbanState((state)=>state.Modal);

    const handleOnClick = (e:React.MouseEvent<HTMLDivElement>) =>{
        const eTarget = e.target as HTMLDivElement;
        const id = eTarget.id;
        // setModalClose()
        
        if ( isModalOpen && id == "overlay"){
            setModalClose()
        }
        
    }
    return(
        <div  className="absolute w-full h-full bg-[#00000080]">
            <div className="relative w-full h-full"
            id="overlay"
            onClick={handleOnClick}
            >
                {Modal? <Modal/> : null}
                {/* <TaskModal/> */}
            </div>
        </div>
    )
}
export default Overlay