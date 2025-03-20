import {create} from  'zustand';
import {KanbanStore} from '../types/store' 
import colorTheme from '../../utils/colorScheme';
const darkTheme = colorTheme("dark");
const defaultState : Omit<KanbanStore,'actions'> = {
    theme:"dark",    
    rem : 16,
    innerHeightRem : window.innerHeight/16,
    headerHeight : 6 ,
    logo: darkTheme.logo,
    Modal:undefined,
    isModalOpen:false,
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
        },
        setModalClose() {
            set({
                isModalOpen:false,
            })
        },
        setModalOpen(Modal) {
            set({
                Modal:Modal,
                isModalOpen:true,
            })
        },
    }
})) 