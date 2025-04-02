    import { FC, useState } from "react";
import classListExt from "../../utils/classListExt";
import { useKanbanState } from "../../lib/store/useKanbanStore";
import Field from "./Field";
import FieldInput from "../Atoms/FieldInputs";
// import { IconCross } from "../Icons/index";
// import IconBtn from "../Atoms/IconBtn";
import GeneralBtn from "../Atoms/GeneralBtn";
import { iBlur, iBoard, iChange, iClick, iColumn } from "../../lib/types/store";

const  NewColumnModal : FC  = () => {
    const theme = useKanbanState((state)=>state.theme);
    const currentBoard = useKanbanState((state)=>state.currentBoard);    
    const editBoard = useKanbanState((state)=>state.actions.editBoard);
    const setCurrentBoard = useKanbanState((state)=>state.actions.setCurrentBoard);
    const setModalClose = useKanbanState((state)=>state.actions.setModalClose);
    const [ board, setBoard] = useState<iBoard>(currentBoard.board);
    const [ used, setUsed] = useState<{isUsed:boolean,index:number}>({isUsed:false,index:0});
    const handleOnClick = (e:iClick) =>{
        e.preventDefault();
        const id = e.currentTarget.id.trim();
        const index = Number(id.slice(-1));

        
        switch (true) {
            case id == "nc_add_column":{
                let isOkay = false                
                let isRequired = false;
                board.columns.map((e)=>{
                    if( !e.name.length) isRequired = true;
                })
                
                isOkay = !isRequired && !used.isUsed
                if(isOkay) {
                    const updatedColumns:iColumn[] = [...board.columns,{name:"",tasks:[]}]
                    setBoard({name:board.name,columns:updatedColumns})
                }
            }
            break;
            case id == "nc_save_changes":{
                let isRequired = false;
                
                board.columns.map((e)=>{
                    if( !e.name.length) isRequired = true;
                })
                
                
                if(!isRequired) {                    
                    editBoard({id:currentBoard.id,board});
                    setCurrentBoard({id:currentBoard.id,board});
                    setModalClose();
                    
                }

            }
                break;
            case id == "nc_icon_"+String(index):{
                
                const curName = board.columns[index].name
                const updatedColumns = board.columns.filter((e)=> e.name !== curName);
                setBoard({name:board.name,columns:updatedColumns})

            }
            break;
            default:
                break;
        }
    }
    const handleOnChange = (e:iChange) =>{
        const id = e.currentTarget.id.trim();
        const index = Number(id.slice(-1));
        
        switch (true) {
            case id == "nc_"+String(index):{                
                const value = {...e.currentTarget as HTMLInputElement}.value;
                const updatedColumns : iColumn[] = board.columns;
                updatedColumns[index].name = value;

                setBoard({name:board.name,columns:updatedColumns}) ;
                
            }                
                break;
        
            default:
                break;
        }
        
        
    }
    const handleOnBlur = (e:iBlur) =>{
        const id = e.currentTarget.id.trim();
        const index = Number(id.slice(-1));
        
        switch (true) {
            case id == "nc_"+String(index):{                
                const value = {...e.currentTarget as HTMLInputElement}.value.toLowerCase();
                let isUsed = false;
                let usedIndex = 0;
                // const updatedColumns : iColumn[] = board.columns;
                // updatedColumns[index].name = value;
                board.columns.forEach((e,i)=>{
                    if(value == e.name.toLowerCase() && i !== index ){
                        isUsed = true;
                        usedIndex = i;
                    }                    
                });                                                
                setUsed({isUsed,index:usedIndex});                                                                                
            }                
                break;
        
            default:
                break;
        }

    }
    return(
        <div className={`${classListExt("priModal",theme)} absolute top-[50%] left-[50%] p-[2rem] pb-[3rem] ab_center w-[30rem] min-h-[23rem]
                         rounded-[.5rem] text-[0.75rem] font-bold
                            flex flex-col gap-[1rem]       
                         `}>
            <h1 className=" text-[1.1rem]">Add new Column</h1>
            <Field text="Name" Input={<FieldInput disabled={true} value={currentBoard.board.name} />} />
            <div className="w-full flex flex-col gap-[.7rem]">
                <p>Columns</p>
                <div className=" w-full flex flex-col gap-[.7rem] ">
                    <ColumnField currentBoard={board} onBlur={handleOnBlur} used={used} onClick={handleOnClick} onChange={handleOnChange}/>
                    
                    
                </div>
            </div>            
            <GeneralBtn id="nc_add_column" onClick={handleOnClick} text="Add New Column" add={true} className={` w-full h-[2.5rem] bg-bodyLight text-purple text-[0.8rem] font-bold rounded-[2rem]`} />  
            <GeneralBtn id="nc_save_changes" onClick={handleOnClick} text="Save Changes"  className={` w-full h-[2.5rem] bg-add hover:bg-addHover text-light  text-[0.8rem] font-bold rounded-[2rem]`} />  
            
        </div>
    )
}

interface ColumnFieldProps {
    onClick?:(e:iClick)=>void;
    onChange?:(e:iChange)=>void;
    onBlur?:(e:iBlur)=>void;
    used?: {isUsed:boolean,index:number};
    currentBoard:iBoard;

    
}
const ColumnField:FC<ColumnFieldProps> = ({onBlur,onChange,currentBoard, used}) =>{
    
    return(
        <div className=" w-full flex flex-col gap-[.7rem] ">
            {currentBoard.columns.map((e,i)=>{

                let status = ""
                // const isDisabled = !!e.tasks.length;
                
                if (used?.isUsed && used.index == i) status = "Used";
                if ( !e.name.length) status = "Required";
                
                
                return(
                    <Field key={i} Input={<FieldInput id={"nc_"+String(i)} onChange={onChange} onBlur={onBlur} status={status} width={"24rem"} value={e.name} />}
                    // Icon={<IconBtn disabled={isDisabled} onClick={onClick}  id={"nc_icon_"+String(i)} widthOrClass={{btnWidth:"1rem"}} iconWidth="full" Icon={<IconCross/>} />} 
                    
                        />
                )
            })}
        </div>
    )
}


export default NewColumnModal;