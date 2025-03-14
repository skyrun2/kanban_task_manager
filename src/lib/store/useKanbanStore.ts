import {create} from  'zustand';
import {KanbanStore} from '../types/store' 
import colorTheme from '../../utils/colorScheme';
const darkTheme = colorTheme("dark");
const defaultState : Omit<KanbanStore,'actions'> = {
    theme:"dark",    
    logo: darkTheme.logo,
}
export const useKanbanState = create<KanbanStore>()((set,get) =>({
    ...defaultState,
    actions:{
        setTheme: (theme) =>{            
            const newTheme = colorTheme(theme);
            set({
                theme,                
                logo: newTheme.logo,
            })
        }
    }
})) 