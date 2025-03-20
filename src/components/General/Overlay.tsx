import { FC } from "react";
import { OverlayProps } from "../../lib/types/store";
import { useKanbanState } from "../../lib/store/useKanbanStore";

const Overlay : FC<OverlayProps> = ({Modal})=>{
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);


    const handleOnClick = (e:React.MouseEvent<HTMLDivElement>) =>{
        const eTarget = e.target as HTMLDivElement;
        const id = eTarget.id;
        // setModalClose()
        if ( id == "overlay"){
            setModalClose()
        }
        
    }
    return(
        <div  className="absolute w-full h-full bg-[#00000080]">
            <div className="relative w-full h-full"
            id="overlay"
            onClick={handleOnClick}
            >
                <Modal/>
            </div>
        </div>
    )
}
export default Overlay