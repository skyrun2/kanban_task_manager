
import './App.css'
import Body from './components/Body'
import Header from './components/Header'


function App() {
  

  return (
    <>
      <div
      id='side_bar'
      className=' w-full h-[100vh] grid grid-rows-main  font-jakarta'>
        <Header/>
        <Body/>
        </div>
    </>
  )
}

export default App
