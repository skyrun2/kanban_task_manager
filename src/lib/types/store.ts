import { FC } from "react";

export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;
export interface GeneralBtnProps {
    text:string;
    add?: boolean;
    width:string;
    hover?:string;
    color:string;
    backgroundColor:string;

}
export interface OverlayProps {
    Modal: FC;
}
export interface FieldProps {
    text: string;
    input:"input"|"textarea";
}
export interface InputProps{
    width?:string ;
}
export interface InputBtnProps{
    Icon:FC;
    hover?:{light:string,dark:string};
    btnWidth:string;
    iconWidth: string;
    
}

export interface KanbanStore{
    theme: iTheme,
    logo: string,
    rem : number,
    innerHeightRem : number,
    headerHeight : number ;
    actions:{
        setTheme:(theme:iTheme)=> void;
    }
}
 