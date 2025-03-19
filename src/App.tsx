
import './App.css'
import AddTaskModal from './components/General/AddTaskModal'
import Body from './components/General/Body'
import Header from './components/General/Header'
import Overlay from './components/General/Overlay'


function App() {
  

  return (
    <>
      <div
      className='relative w-full h-[100vh] flex flex-col  font-jakarta transition duration-[1000] ease-in'>
        <Header/>
        <Body/>
        <Overlay Modal={AddTaskModal}/>
        </div>
    </>
  )
}

export default App
