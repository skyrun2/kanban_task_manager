export type iTheme = "light"|"dark";
export type iClassList =  Record<string,{light:string,dark:string}>;


export interface KanbanStore{
    theme: iTheme,
    logo: string,
    actions:{
        setTheme:(theme:iTheme)=> void;
    }
}
 