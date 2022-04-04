import './App.css';
import './styles/style.scss'
// import ItemDetailCont from './componentes/ItemDetailCont';
import ItemListContainer from './componentes/ItemListContainer';
import NavBarComp from './componentes/NavBarComp';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Contacto from './componentes/Contacto';
import ItemDetailContainer from './componentes/I/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter>
    <div className='bg-color'>
    <header>
    <NavBarComp/>
    </header>

    {/* <ItemDetailCont/> */}


    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto />}/>

      <Route path='*' element={<Navigate to={"/"}/>}/>
    </Routes>
    

    </div>
    </BrowserRouter>
    
  );
}

export default App;
