import './App.css';
import logofreecode from './imagenes/logofreecode.png';
import Boton from './componentes/boton';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logofreecode}
          className='freecodecamp-logo'
          alt='logo de freecodecamp' />;

      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>
            1
          </Boton>
          <Boton>
            +
          </Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>

      </div>

    </div>
  );
}

export default App;
