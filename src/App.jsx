import Navbar from "./components/Navbar/NavBar"
import classes from "./App.module.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {

  return (
    <>
      <Navbar />
      <h1 className={classes.textotitulo} >Tiendita Virtual</h1>
      <ItemListContainer Greetings="Bienvenidos!"/>
    </>
  )
}

export default App
