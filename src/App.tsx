

import './App.css'
import Body from './components/General/Body.tsx'
import Header from './components/General/Header.tsx'
import Overlay from './components/General/Overlay.tsx'
import { useKanbanState } from './lib/store/useKanbanStore.ts'
import { iClick } from './lib/types/store.ts'


function App() {
  const isModalOpen = useKanbanState((state)=>state.isModalOpen);
  const isMiniModalOpen = useKanbanState((state)=>state.isMiniModalOpen);
  const isDropDownOpen = useKanbanState((state)=>state.isDropDownOpen);
  const setMiniModalClose = useKanbanState((state)=>state.actions.setMiniModalClose);
  const setDropDownClose = useKanbanState((state)=>state.actions.setDropDownClose);
  const handleOnClick = (e:iClick) =>{
      const id = e.currentTarget.id;
      
      if (isMiniModalOpen && id == "app") {
        setMiniModalClose();
      }
      if (isDropDownOpen && id == "app") {
        setDropDownClose();
      }

  }

  // useEffect(()=>{
  //   console.log({isMiniModalOpen});
    
  // },[isMiniModalOpen])  
  return (
    <>
      <div
      id='app'
      className='relative w-full h-[100vh] flex flex-col  font-jakarta transition duration-[1000] ease-in'
      onClick={handleOnClick}
      >
        <Header/>
        <Body/>
        {isModalOpen?<Overlay />: null}        
        {/* <Overlay /> */}
        </div>
    </>
  )
}

export default App
