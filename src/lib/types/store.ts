import { FC, ReactElement } from "react";

export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;
export type iClick = React.MouseEvent<HTMLElement> ;
export type iChange = React.ChangeEvent<HTMLInputElement> ;
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
export interface InputProps{
    id?:string;
    width?:string|null;
    value?:string;
    disabled?:boolean;
    required?:boolean;    
    onClick?:(e:iClick)=>void;    
    onChange?:(e:iChange)=>void;    
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
    
}
export interface CreateNewBoardProps{    
    onClick: (e:iClick)=>void;
}
export interface NewColumnProps{    
    onClick: (e:iClick)=>void;
}
export interface DropDownProps{
    text:string;
    className:string;
}

export interface KanbanStore{
    theme: iTheme;
    logo: string;
    rem : number;
    innerHeightRem : number;
    miniModal:iMiniModal;
    Modal:FC|undefined;    
    headerHeight : number ;
    isModalOpen:boolean;    
    isMiniModalOpen:boolean;
    isSideBarOpen:boolean;
    actions:{
        setTheme:()=> void;
        setModalOpen:(Modal:FC)=>void;
        setModalClose:()=>void;
        setMiniModalOpen:(miniModal:iMiniModal)=>void;
        setMiniModalClose:()=>void;
        setSideBarOpen:()=>void;
        setSideBarClose:()=>void;
    }
}
 