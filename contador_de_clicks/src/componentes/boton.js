import react from 'react';
import "../stylesheets/boton.css";

function Boton({ texto, esBotonDeClick ,manejarClick }){
    return( 
        <button className={esBotonDeClick ? "botonclick" : "boton-reinciar"}
        onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;