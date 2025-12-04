 
import './App.css'
 
import Hero from './components/Hero'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ApiComponent from './example/ApiComponent'
import withLogin from './hoc/withLogin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 

function App() {
  //utilizacion del hoc
   const componenteConHoc = withLogin(ApiComponent);
   const ContadorConHoc = withLogin(ItemCount)

  return (
    <BrowserRouter>

   <Navbar/>
   <Routes>
    <Route path='' element={<ItemListContainer saludar=''/>}/>
   </Routes>
   <Hero greeting="Tienda "/>
     
    <ItemCount/>
    <ItemDetailContainer/>
    {/* <Fetcountry/>  */}
    <ApiComponent/>
    <ContadorConHoc/>


    </BrowserRouter>
  )
}

export default App
