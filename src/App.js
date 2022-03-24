import './App.css';
import {Contador} from './componentes/contador';
import ItemListContainer from './componentes/ItemListContainer';
import NavBarComp from './componentes/NavBarComp';



function onAdd(contar) {
  alert("el producto fue agregado")

}

const PRODUCTOS = [
  {
    nombre: "planta", 
    stock: 15,
    initial: 1,
    onAdd: onAdd
  }
]  

function App() {
  return (
    <div>
    <header>
    <NavBarComp/>
    </header>

    <div className='app'>
      {PRODUCTOS.map((producto) => (
        <Contador 
        initial={producto.initial}
        stock={producto.stock}
        nombre={producto.nombre}
        onAdd={producto.onAdd}/>
      ))}
    </div>

    <ItemListContainer/>
    

    </div>
    
  );
}

export default App;
