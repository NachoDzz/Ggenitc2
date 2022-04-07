import './App.css';
import './styles/style.scss'
// import ItemDetailCont from './componentes/ItemDetailCont';
import ItemListContainer from './componentes/ItemListContainer';
import NavBarComp from './componentes/NavBarComp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './componentes/Contacto';
import ItemDetailContainer from './componentes/I/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './contexts/CartContext';





function App() {




  return (

    <CartProvider>

      <BrowserRouter>
        <div className='bg-color'>
          <header>
            <NavBarComp />
          </header>

          {/* <ItemDetailCont/> */}


          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart/>} />

            <Route path='*' element={<Navigate to={"/"} />} />
          </Routes>


        </div>
      </BrowserRouter>

    </CartProvider>

  );
}

export default App;
