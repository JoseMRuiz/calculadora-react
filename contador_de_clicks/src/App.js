import './App.css';
import logo_adidas from './imagenes/logo.png';
import Boton from '../src/componentes/boton';


function App() {


  const manejarClick =() => {
    console.log("click");

  }
  const reiniciarContador =() => {
    console.log("reiniciar");
    
  }





  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logo_adidas}
          alt='logo del proyecto' />
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='click'
          esBotondeClick={true}
          manejarClick={manejarClick}/>
        <Boton
          texto='reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
