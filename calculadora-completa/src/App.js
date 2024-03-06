import './App.css';
import logofreecode from './imagenes/logofreecode.png';


function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logofreecode}
          className='freecodecamp-logo'
          alt='logo de freecodecamp' />;
        <h1>hola</h1>
      </div>
    </div>
  );
}

export default App;
