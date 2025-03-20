
import { useEffect } from 'react'
import './App.css'
import AddTaskModal from './components/General/AddTaskModal'
import Body from './components/General/Body'
import Header from './components/General/Header'
import NewBoardModal from './components/General/NewBoardModal'
import NewColumnModal from './components/General/NewColumnModal'
import Overlay from './components/General/Overlay'
import { useKanbanState } from './lib/store/useKanbanStore'


function App() {
  const isModalOpen = useKanbanState((state)=>state.isModalOpen);
  useEffect(()=>{
    console.log({isModalOpen});
    
  },[isModalOpen])
  return (
    <>
      <div
      className='relative w-full h-[100vh] flex flex-col  font-jakarta transition duration-[1000] ease-in'>
        <Header/>
        <Body/>
        {isModalOpen?<Overlay Modal={NewBoardModal}/> : null}
        </div>
    </>
  )
}

export default App
