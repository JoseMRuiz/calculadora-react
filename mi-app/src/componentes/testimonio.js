import react from 'react';
import '../stylesheets/Testimonio.css';


function Testimonio(props){
    return(
        <div className='container-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require(`../imagenes/${props.imagen}`)}
            />
            <div className='container-texto-testimonio'>
                <p className='texto-nombre'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='texto-info'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-lorem'>{props.testimonio}</p>
            </div>
        </div>
    );
}


export default Testimonio;