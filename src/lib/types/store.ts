import { FC, ReactElement } from "react";

export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;
export type iClick = React.MouseEvent<HTMLElement> ;
export type iChange = React.ChangeEvent<HTMLInputElement> ;
export type iBlur = React.FocusEvent<HTMLInputElement> ;
export type iMiniModal = "more"|"task"|undefined;

export interface iSubtasks{
    title:string;
    isCompleted:boolean;    
}
export interface iTask{
    title:string;
    description:string;
    status:string;
    subTasks: iSubtasks[];
}
export interface iColumn{
    name:string;
    tasks: iTask[]
}
export interface iBoard {
    name:string;
    columns: iColumn[];
}

export interface GeneralBtnProps {
    id:string;
    text:string;
    add?: boolean;
    className:string;
    onClick?:(e:iClick)=>void;

}
export interface FieldProps {
    text?: string;
    Input:ReactElement;
    Icon?:ReactElement|null;
    required?:boolean;
}
export interface EventListeners{
    onClick?:(e:iClick)=>void;    
    onChange?:(e:iChange)=>void;    
    onBlur?:(e:iBlur)=>void;    
}
export interface InputProps{
    id?:string;
    width?:string|null;
    value?:string;
    disabled?:boolean;
    required?:boolean;   
    status?: string; 
    onClick?:(e:iClick)=>void;    
    onChange?:(e:iChange)=>void;    
    onBlur?:(e:iBlur)=>void;    
}
type widthOrClass = {
    btnWidth:string;
    className?:never;
} | 
{
    btnWidth?:never;
    className:string;
}
export interface IconBtnProps{
    id:string;
    Icon:ReactElement ;
    hover?:{light:string,dark:string};
    iconWidth: string;
    onClick?:(e:iClick)=>void;    
    btnWidth?:string;
    className?:string;
    widthOrClass:widthOrClass;
    disabled?:boolean;
    
}
export interface CreateNewBoardProps{    
    onClick?: (e:iClick)=>void;
}
export interface NewColumnProps{    
    onClick?: (e:iClick)=>void;
}
export interface DropDownProps{
    id?:string
    text:string;
    className:string;
    isDropDownOpen?:boolean 
    columns: {columns:iColumn[],current:iColumn};
}

export interface KanbanStore{
    theme: iTheme;
    logo: string;
    rem : number;
    innerHeightRem : number;
    miniModal:iMiniModal;    
    Modal:FC|undefined;    
    headerHeight : number;
    isDropDownOpen:boolean;
    isModalOpen:boolean;    
    isMiniModalOpen:boolean;
    isSideBarOpen:boolean;
    currentBoard:{id:number,board:iBoard};
    boards:iBoard[];
    actions:{
        editBoard: (board:{id:number,board:iBoard})=>void;
        setBoard: (board:iBoard)=>void;        
        setCurrentBoard: (currentBoard: {id:number ,board:iBoard})=>void;
        setDropDownOpen:() =>void;
        setDropDownClose:() =>void;
        setTheme:()=> void;
        setModalOpen:(Modal:FC)=>void;
        setModalClose:()=>void;
        setMiniModalOpen:(miniModal:iMiniModal)=>void;
        setMiniModalClose:()=>void;
        setSideBarOpen:()=>void;
        setSideBarClose:()=>void;        
    }
}
 