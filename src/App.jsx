import './App.css'
import { NavBar } from './components/navbar'
import { ItemListContainer } from './components/itemListContainer'
import { ListGames } from './components/listgames'

function App() {
  return (
    <>
  
    <ItemListContainer greeting="Compra de forma segura!"/>
    <ListGames/>
  
    </>
  )
}

export default App
