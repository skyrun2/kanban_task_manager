import { AddTask } from "./icons";


const CreateColumn = () =>{
    return(
        <div className=" pt-[2rem] w-column "> 
            <button className="create_column w-full h-[90%] bg-gradientLight flex items-center justify-center  rounded-[0.5rem]">
                <div className="  h-[2rem] flex items-baseline justify-center  gap-[0.2rem] text-[1.5rem] font-bold ">
                    <div className="w-[.7rem] aspect-square flex justify-baseline items-end ">
                        <AddTask/>
                    </div>
                    <span>Add New Column</span>
                </div>
            </button>
        </div>            
    )
}
export default CreateColumn;