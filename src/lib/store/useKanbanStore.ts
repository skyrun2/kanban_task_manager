import {create} from  'zustand';
import {iTheme, KanbanStore} from '../types/store' 
import colorTheme from '../../utils/colorScheme';
const darkTheme = colorTheme("dark");
const defaultState : Omit<KanbanStore,'actions'> = {
    theme:"dark",    
    rem : 16,
    innerHeightRem : window.innerHeight/16,
    headerHeight : 6 ,
    logo: darkTheme.logo,
    Modal:undefined,
    miniModal:undefined,
    isModalOpen:false,
    isMiniModalOpen:false,
    isSideBarOpen:true,
}
export const useKanbanState = create<KanbanStore>()((set,get) =>({
    ...defaultState,
    actions:{
        setTheme: () =>{            
            const newTheme : iTheme = get().theme == "dark" ? "light" : "dark" ;
            set({
                theme: newTheme,                                
            })
        },
        setModalClose() {
            set({
                isModalOpen:false,
                Modal:undefined,
            })
        },
        setModalOpen(Modal) {         
            set({
                Modal:Modal,
                isModalOpen:true,
            })
        },
        setMiniModalClose() {
            set({
                miniModal:undefined,
                isMiniModalOpen:false,
            })
        },
        setMiniModalOpen(miniModal) {
            set({
                miniModal:miniModal,
                isMiniModalOpen:true,
            })
        },
        setSideBarClose(){            
            set({
                isSideBarOpen:false,
            })
        },
        setSideBarOpen(){
            set({
                isSideBarOpen:true,
            })
        }
    }
})) 