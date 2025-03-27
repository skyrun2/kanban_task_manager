import {create} from  'zustand';
import {iBoard, iTheme, KanbanStore} from '../types/store' 
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
    isDropDownOpen:false,
    isModalOpen:false,
    isMiniModalOpen:false,
    isSideBarOpen:true,
    boards:[],
    currentBoard:{id:0,board: {name:"",columns:[]} }
}
export const useKanbanState = create<KanbanStore>()((set,get) =>({
    ...defaultState,
    actions:{

        editBoard(board) {
            const editedBoards  = get().boards;
            editedBoards[board.id] = board.board;
            set({
                boards : editedBoards,
            })
        },
        setBoard(board) {
            const updatedBoards : iBoard[] = [...get().boards,board];
            
            set({
                boards:updatedBoards
            })
            
        },
        setCurrentBoard(currentBoard) {
            // console.log({currentBoard});
            
            set({
                currentBoard
            })
        },
        setDropDownOpen() {
            set({
                isDropDownOpen:true
            })
        },
        setDropDownClose() {
            set({
                isDropDownOpen:false
            })
        },
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