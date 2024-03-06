import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>Bienvenido a nuestra seccion de comentarios</h1>
      
        <Testimonio
        nombre='Ema Bostion'
        pais='suecia'
        imagen='img1.jpg'
        cargo='ingeniero de software'
        empresa='spotify'
        testimonio=' la página web no ofrece realmente ningún curso en específico. En su lugar, tienes la oportunidad de aprender estudiando cierto segmento, de piezas de información organizadas. Aunque podría escucharse algo, bueno… poco profesional, la calidad de estos tutoriales es en realidad muy buena.'
        />
        
        <Testimonio
        nombre='jason derulo'
        pais='noruega'
        imagen='img2.jpg'
        cargo='ingeniero de software'
        empresa='google'
        testimonio=' la página web no ofrece realmente ningún curso en específico. En su lugar, tienes la oportunidad de aprender estudiando cierto segmento, de piezas de información organizadas. Aunque podría escucharse algo, bueno… poco profesional, la calidad de estos tutoriales es en realidad muy buena.'
        />

<Testimonio
        nombre='jhon willson'
        pais='UK'
        imagen='img3.jpg'
        cargo='ingeniero de software'
        empresa='amazon'
        testimonio=' la página web no ofrece realmente ningún curso en específico. En su lugar, tienes la oportunidad de aprender estudiando cierto segmento, de piezas de información organizadas. Aunque podría escucharse algo, bueno… poco profesional, la calidad de estos tutoriales es en realidad muy buena.'
        />

      </div>
    </div>
  );
}

export default App;
