import React, {useState} from "react"; 

export function Contador({nombre, stock, initial,onAdd}) {
    const [Contar, setContar] = useState(initial);

    function sumar() {
        if (stock === Contar) return;

        setContar(Contar + 1); 
    } 

    function restar () {
        if (Contar === 0) return;

        setContar(Contar - 1);
    }

    function añadirCarrito () {
        if (stock > 0 && Contar > 0){
            onAdd(Contar);
        }
    }

    return (
        <div>

            <h3>Nombre: {nombre}</h3>
            <h3>stock: {stock}</h3>
            
            <h1>{Contar}</h1>

            <button onClick={restar}>-1</button>
            <button onClick={sumar}>+1</button>

            <br/>
            <br/>

            <button onClick={añadirCarrito}>
                agregar al carrito
            </button>
        </div>
    )
}

