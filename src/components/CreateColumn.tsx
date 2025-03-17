import assetsData from "../utils/assetsData";

const CreateColumn = () =>{
    return(
        <div className=" pt-[2rem] w-column "> 
            <button className="create_column w-full h-[90%] bg-gradientLight flex items-center justify-center  rounded-[0.5rem]">
                <div className="  h-[1rem] flex gap-[0.2rem] ">
                    <svg  className="" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/>
                    </svg>
                    <span>Add New Column</span>

                </div>
            </button>
        </div>            
    )
}
export default CreateColumn;