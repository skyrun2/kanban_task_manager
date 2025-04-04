import { FC, useEffect, useState } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
import GeneralBtn from "../Atoms/GeneralBtn";
import { IconCross } from "../Icons/index";
import IconBtn from "../Atoms/IconBtn";
import { iBlur, iBoard, iChange, iClick, iColumn } from "../../lib/types/store";
import React from "react";


const NewBoardModal:FC = () =>{
    const boards = useKanbanState((state)=>state.boards)
    const currentBoard = useKanbanState((state)=>state.currentBoard);
    const board = useKanbanState((state)=>state.currentBoard).board;
    const setBoards = useKanbanState((state)=>state.actions.setBoard);
    const editBoard = useKanbanState((state)=>state.actions.editBoard);
    const setCurrentBoard = useKanbanState((state)=>state.actions.setCurrentBoard);
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const theme = useKanbanState((state)=>state.theme);
    const [columnsCount, setColumnsCount] = useState(board.columns.length);
    const [columnKeyArr,setColumnKeyArr]= useState<{id:number,name:string,isDefault:boolean}[]>([{id:0,name:"",isDefault:true}]);    
    const [ used, setUsed] = useState<{isUsed:boolean,index:number}>({isUsed:false,index:0});    
    const [ boardName, setBoardName] = useState<{isUsed:boolean,isRequired:boolean}>({isUsed:false,isRequired:false});
    const handleOnClick = (e:iClick) =>{
        const id : string = e.currentTarget.id;        
        e.preventDefault();                        
        
        switch (true) {
            case id == "nb_add_column":{
                if (columnKeyArr.length<6)  {
                    let required : boolean = false;
                    let isOkay = false;
                    
                    const  updatedColumnArr = columnKeyArr;
                    columnKeyArr.forEach((e,i)=>{                                                                        
                        if(!e.name.length) required = true;
                        updatedColumnArr[i].isDefault = false;
                    })
                    isOkay = !used.isUsed && !required
                    
                    if( !isOkay){                        
                        setColumnKeyArr([...updatedColumnArr]);                    
                    }
                    else{
                        setColumnsCount(columnsCount+1);
                        setColumnKeyArr([...updatedColumnArr,{id:columnsCount+1,name:"",isDefault:true}]);
                    }

                }                       
            }         
                break;     
            case id == "nb_save":{
                const board_name = {...document.getElementById("nb_board_name") as HTMLInputElement}.value.toLowerCase();
                let required : boolean = false;                                 
                const updatedColumnArr = columnKeyArr;                
                let setBoardCondition = false;
                let isUsed = false;
                const newColumns : iColumn[] = columnKeyArr.map((e,i)=>{
                    const name = e.name.trim();
                    if (!e.name.length) required =true;
                    updatedColumnArr[i].isDefault = false;
                    return {name,tasks:[]}
                })

                boards.forEach((e)=>{
                    if(e.name.toLowerCase() == board_name) isUsed = true;
                })
                setBoardName({isUsed,isRequired:!board_name.length});
                setColumnKeyArr([...updatedColumnArr]);
                
                if (currentBoard.isEditing) {
                    setBoardCondition = !required && !!board_name.length &&  !boardName.isUsed;                    
                }
                else setBoardCondition = !required && !!board_name.length &&  !boardName.isUsed && !isUsed;                    

                if (setBoardCondition){                                                 
                    const id = boards.length;
                    if(currentBoard.isEditing) {                        
                        const updatedBoard = {name:board_name,columns:newColumns};
                        editBoard({id:currentBoard.id,board:updatedBoard})
                        setCurrentBoard({id:currentBoard.id,board:updatedBoard}); 
                    }
                    else{
                        const currentBoard : iBoard = {name:board_name,columns:newColumns};
                        setBoards({name:board_name,columns:newColumns});
                        setCurrentBoard({id,board:currentBoard}); 

                    }
                    
                        
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
        updatedColumnArr[index].isDefault = false;
        setColumnKeyArr([...updatedColumnArr]);
        
        
        
        
    }
    const handleOnBlur = (e:iBlur) =>{
        const id = e.currentTarget.id.trim();
        const index = Number(id.slice(-1));
        
        
        switch (true) {
            case id == "nb_"+String(index):{                                                        
                const value = {...e.currentTarget as HTMLInputElement}.value.toLowerCase();
                let isUsed = false;
                let usedIndex = 0;
                
                columnKeyArr.forEach((e,i)=>{
                    if(value == e.name.toLowerCase() && i !== index ){
                        isUsed = true;
                        usedIndex = i;
                    }                    
                });                                                
                setUsed({isUsed,index:usedIndex});                                                                                
            }                
                break;
                case id == "nb_board_name":{ 
                    const value = {...e.currentTarget as HTMLInputElement}.value.toLowerCase();
                    let isUsed = false;
                    
                    boards.forEach((e,i)=>{
                        if(value == e.name.toLowerCase() && i !== index ){
                            isUsed = true;                                
                        }
                    })
                    setBoardName({isUsed,isRequired:!value.length});
                }
                break;
            default:
                break;
        }
    
    }
    useEffect(()=>{
        const updatedColumnArr: {id:number,name:string,isDefault:boolean}[] = [];
        if (board.columns.length && currentBoard.isEditing) {
            board.columns.forEach((e,i)=>{
            updatedColumnArr.push({id:i,name:e.name,isDefault:true});
            })
            setColumnKeyArr([...updatedColumnArr]);
        }
    },[])
    return(
        <form className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[23rem]
        rounded-[.5rem] text-[0.75rem] font-bold
           flex flex-col gap-[1rem]       
        `}>
           <h1 className=" text-[1.1rem]">Add new Board</h1>
            <Field  text="Name" Input={<FieldInput  onBlur={handleOnBlur} status={boardName.isUsed? "Used" : boardName.isRequired? "Required":"" } value={currentBoard.isEditing?board.name:""} id="nb_board_name"/>} />
            <div className="w-full flex flex-col gap-[.7rem]">
                <p>Columns</p>
            
                <ColumnField columnArr={columnKeyArr} onBlur={handleOnBlur} onChange={handleOnChange} onClick={handleOnClick} used={used}/>
                
            </div>            
            <GeneralBtn id="nb_add_column" onClick={handleOnClick} text="Add New Column" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />  
            <GeneralBtn id="nb_save" onClick={handleOnClick} text="Save Changes"  className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light  text-[0.8rem] font-bold rounded-[2rem]`} />   
        </form>
    )
}

interface ColumnFieldProps {
    onBlur?:(e:iBlur)=>void;
    onClick?:(e:iClick)=>void;
    onChange?:(e:iChange)=>void;
    columnArr:{id:number,name:string,isDefault:boolean}[];
    required?:boolean;
    used?: {isUsed:boolean,index:number};
}
const ColumnField:FC<ColumnFieldProps> = ({onBlur,onClick,onChange,columnArr,used}) =>{
    const columnsCount = columnArr.length;
    
    
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            {columnArr.map((e,i)=>{                
                const required = !e.name.length;
                let status = "";
                if (used?.isUsed && used.index == i) status = "Used"; 
                if (required && !e.isDefault) status = "Required";
                
                return(
                    <Field key={e.id} Input={<FieldInput id={"nb_"+String(e.id)} onBlur={onBlur} onChange={onChange} value={e.name}  status={status} width={columnsCount>1?  "24rem":null}/>}
                    Icon={columnsCount>1? 
                    <IconBtn onClick={onClick}  id={String(e.id)} widthOrClass={{btnWidth:"1rem"}} iconWidth="full" 
                    Icon={<IconCross/>} />:null} 
                    
                        />
                )
            })}
        </div>
    )
}
export default NewBoardModal;