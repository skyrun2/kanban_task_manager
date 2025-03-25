import { FC, useEffect, useState } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import GeneralBtn from "../Atoms/GeneralBtn";
import { IconCross } from "../Icons";
import IconBtn from "../Atoms/IconBtn";
import { iChange, iClick, iColumn } from "../../lib/types/store";


const NewBoardModal:FC = () =>{
    const setBoards = useKanbanState((state)=>state.actions.setBoard);
    const setCurrentBoard = useKanbanState((state)=>state.actions.setCurrentBoard);
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const theme = useKanbanState((state)=>state.theme);
    const [columnsCount, setColumnsCount] = useState(0);
    const [columnKeyArr,setColumnKeyArr]= useState<{id:number,name:string,required:boolean}[]>([{id:0,name:"",required:false}]);    
    const handleOnClick = (e:iClick) =>{
        const id : string = e.currentTarget.id;        
        e.preventDefault();                        
        
        switch (true) {
            case id == "nb_add_column":
                if (columnKeyArr.length<6)  {
                    let required : boolean = false;
                    
                    const  updatedColumnArr = columnKeyArr;
                    columnKeyArr.forEach(e=>{
                        if (!e.name.length) {
                            required = true;
                            updatedColumnArr[e.id].required = true;                            
                            

                        }
                        else{ 
                            required = false;
                            updatedColumnArr[e.id].required = false;                            
                            
                            
                        }
                        
                        
                        
                    })
                    console.log(required,!required);
                    
                    if( required){
                        
                        setColumnKeyArr([...updatedColumnArr]);                    
                    }
                    else{
                        setColumnsCount(columnsCount+1);
                        setColumnKeyArr([...updatedColumnArr,{id:columnsCount+1,name:"",required:false}]);
                    }

                }                                
                break;     
            case id == "nb_save":{
                let required : boolean = false;                                 
                const boardName = {...document.getElementById("nb_board_name") as HTMLInputElement}.value;
                const newColumns : iColumn[] = columnKeyArr.map(e=>{
                    const name = e.name.trim();
                    
                    if (!name.length) {
                        e.required = true;
                        required = true;                                                
                    }
                    else if (name.length) {
                        e.required = false;
                        required = false;
                    };
                    
                    return {name,tasks:[]}
                })
                console.log(required);
                
                if (!required){                    
                    
                    setBoards({name:boardName,columns:newColumns});
                    setCurrentBoard({name:boardName,columns:newColumns})
                    setModalClose();
                }

                    
            }
                break;     

            case !Number.isNaN(Number(id)):
                setColumnKeyArr(columnKeyArr.filter(e=> e.id !== Number(id)) )                                
                break
            default:
                break;
        }
    }

    const handleOnChange = (e:iChange)=>{
        const id : string = e.currentTarget.id;    
        const value : string = e.currentTarget.value;
        const index : number = Number(id.slice(3));
        const updatedColumnArr = columnKeyArr;
        updatedColumnArr[index].name = value;
        setColumnKeyArr(updatedColumnArr);
        
        
        
    }
    useEffect(()=>{
        
        
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
            
                <ColumnField columnArr={columnKeyArr} onChange={handleOnChange} onClick={handleOnClick}/>
                
            </div>            
            <GeneralBtn id="nb_add_column" onClick={handleOnClick} text="Add New Column" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />  
            <GeneralBtn id="nb_save" onClick={handleOnClick} text="Save Changes"  className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light  text-[0.8rem] font-bold rounded-[2rem]`} />   
        </form>
    )
}

interface ColumnFieldProps {
    onClick?:(e:iClick)=>void;
    onChange?:(e:iChange)=>void;
    columnArr:{id:number,name:string,required:boolean}[];
    required?:boolean;
}
const ColumnField:FC<ColumnFieldProps> = ({onClick,onChange,columnArr}) =>{
    const columnsCount = columnArr.length;
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            {columnArr.map((e)=>{
                console.log({name:e.name,id:e.id,required:e.required});
                
                return(
                    <Field key={e.id} Input={<FieldInput id={"nb_"+String(e.id)} onChange={onChange} value={e.name}  required={e.required} width={columnsCount>1?  "24rem":null}/>}
                    Icon={columnsCount>1? <IconBtn onClick={onClick}  id={String(e.id)} widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />:null} 
                    
                        />
                )
            })}
        </div>
    )
}
export default NewBoardModal;