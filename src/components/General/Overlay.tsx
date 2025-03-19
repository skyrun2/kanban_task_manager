import { FC } from "react";
import { OverlayProps } from "../../lib/types/store";

const Overlay : FC<OverlayProps> = ({Modal})=>{
    return(
        <div className="absolute w-full h-full bg-[#00000080]">
            <div className="relative w-full h-full">
                <Modal/>
            </div>
        </div>
    )
}
export default Overlay