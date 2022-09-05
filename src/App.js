import logo from './logo.svg';
import './App.css';
import HolaPerro from './componentes/HolaPerro';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Busqueda from './componentes/Busqueda';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/Nvegacion/NavBar';
import Contacto from './componentes/Paginas/Contacto';
import Inicio from './componentes/Paginas/Inicio';
import Nosotros from './componentes/Paginas/Nosotros';
function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Guille <code>src/App.js</code> and save to reload.
        </p>
       
        <Router>
            <Routes>
              <Route path='/' element = {<Inicio/>}/>
              <Route path='/Contacto' element = {<Contacto/>}/>
              <Route path='/Nosotros' element = {<Nosotros/>} />
            </Routes>
        </Router>

        <Busqueda/>
        <HolaPerro />
        <Boton/>
        <Contador/>
         
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        
        </a>     
      </header>
    </div>
    
  );
}
export default App;




