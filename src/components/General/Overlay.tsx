import { FC } from "react";
import { useKanbanState } from "../../lib/store/useKanbanStore";


const Overlay : FC = ()=>{
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const setCurrentTask = useKanbanState((state)=>state.actions.setCurrentTask);
    const isModalOpen = useKanbanState((state)=>state.isModalOpen);
    const Modal = useKanbanState((state)=>state.Modal);

    const handleOnClick = (e:React.MouseEvent<HTMLDivElement>) =>{
        const eTarget = e.target as HTMLDivElement;
        const id = eTarget.id;
        // setModalClose()
        
        if ( isModalOpen && id == "overlay"){
            setCurrentTask({id:0,column:0,task:{title:"",description:"",status:"",subTasks:[]}});
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
                {/* <DeleteModal/> */}
            </div>
        </div>
    )
}
export default Overlay