import { FC, ReactElement } from "react";

export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;
export interface GeneralBtnProps {
    id:string;
    text:string;
    add?: boolean;
    className:string;
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;

}
export interface OverlayProps {
    Modal: FC;
}
export interface FieldProps {
    text?: string;
    Input:ReactElement;
    Icon?:ReactElement;
}
export interface InputProps{
    width?:string ;
    value?:string;
    disabled?:boolean;
}
export interface IconBtnProps{
    Icon:FC;
    hover?:{light:string,dark:string};
    btnWidth:string;
    iconWidth: string;
    
}

export interface DropDownProps{
    text:string;
    className:string;
}

export interface KanbanStore{
    theme: iTheme,
    logo: string,
    rem : number,
    innerHeightRem : number,
    Modal:FC|undefined;
    headerHeight : number ;
    isModalOpen:boolean;    
    actions:{
        setTheme:(theme:iTheme)=> void;
        setModalOpen:(Modal:FC)=>void;
        setModalClose:()=>void;
    }
}
 