
import { useEffect } from 'react'
import './App.css'
import Body from './components/General/Body'
import Header from './components/General/Header'
import Overlay from './components/General/Overlay'
import { useKanbanState } from './lib/store/useKanbanStore'
import { iClick } from './lib/types/store'


function App() {
  const isModalOpen = useKanbanState((state)=>state.isModalOpen);
  const isMiniModalOpen = useKanbanState((state)=>state.isMiniModalOpen);
  const setMiniModalClose = useKanbanState((state)=>state.actions.setMiniModalClose);
  const handleOnClick = (e:iClick) =>{
      const id = e.currentTarget.id;
      
      if (isMiniModalOpen && id == "app") {
        setMiniModalClose();
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
        </div>
    </>
  )
}

export default App
