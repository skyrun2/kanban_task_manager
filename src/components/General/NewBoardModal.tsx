import { FC, useEffect, useState } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import GeneralBtn from "../Atoms/GeneralBtn";
import { IconCross } from "../Icons";
import IconBtn from "../Atoms/IconBtn";
import { iBoard, iClick, iColumn } from "../../lib/types/store";


const NewBoardModal:FC = () =>{
    const theme = useKanbanState((state)=>state.theme);
    const [columnsCount, setColumnsCount] = useState(0);
    const [columnKeyArr,setColumnKeyArr] = useState([0]);
    const [isRequired, setIsRequired] = useState(false);
    const [board, setBoard]= useState<iBoard>({name:"",columns:[]});
    const handleOnClick = (e:iClick) =>{
        const id : string = e.currentTarget.id;        
        e.preventDefault();                        
        
        switch (true) {
            case id == "nb_add_column":
                if (columnKeyArr.length<6) {
                    setColumnsCount(columnsCount + 1);                                
                    setColumnKeyArr([...columnKeyArr,columnsCount+1]);                    
                }                                
                break;     
            case id == "nb_save":{
                const boardName = {...document.getElementById("nb_board_name") as HTMLInputElement}.value;
                const newColumns : iColumn[] = columnKeyArr.map(e=>{
                    const name = {...document.getElementById(String(e)) as HTMLInputElement}.value;
                    console.log({e,name});
                    
                    return {name,tasks:[]}
                })
                console.log(newColumns);
                
                
                
                 
                
                    
            }
                break;     

            case !Number.isNaN(Number(id)):
                setColumnKeyArr(columnKeyArr.filter(e=> e !== Number(id)) )                                
                break
            default:
                break;
        }
    }
    useEffect(()=>{
        console.log({columnKeyArr,columnsCount});
        
    },[columnKeyArr])
    return(
        <form className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[23rem]
        rounded-[.5rem] text-[0.75rem] font-bold
           flex flex-col gap-[1rem]       
        `}>
           <h1 className=" text-[1.1rem]">Add new Board</h1>
            <Field  text="Name" Input={<FieldInput id="nb_board_name"/>} />
            <div className="w-full flex flex-col gap-[.7rem]">
                <p>Columns</p>
            
                <ColumnField columnArr={columnKeyArr} onClick={handleOnClick}/>
                
            </div>            
            <GeneralBtn id="nb_add_column" onClick={handleOnClick} text="Add New Column" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />  
            <GeneralBtn id="nb_save" onClick={handleOnClick} text="Save Changes"  className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light  text-[0.8rem] font-bold rounded-[2rem]`} />   
        </form>
    )
}

const ColumnField:FC<{onClick?:(e:iClick)=>void,columnArr:number[]}> = ({onClick,columnArr}) =>{
    const columnsCount = columnArr.length;
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            {columnArr.map((e)=>{
                return(
                    <Field key={e} Input={<FieldInput required={true} width={columnsCount>1?  "24rem":null}/>}
                    Icon={columnsCount>1? <IconBtn onClick={onClick}  id={String(e)} widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />:null} 
                    
                        />
                )
            })}
        </div>
    )
}
export default NewBoardModal;