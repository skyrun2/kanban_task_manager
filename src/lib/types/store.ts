export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;


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
 