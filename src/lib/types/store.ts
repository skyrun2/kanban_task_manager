export type iTheme = "light"|"dark";
export type iElement = "header"|"logo"|"more"|"sideBar"|"theme"|"themeBtn";


export interface KanbanStore{
    theme: iTheme,
    logo: string,
    actions:{
        setTheme:(theme:iTheme)=> void;
    }
}
 