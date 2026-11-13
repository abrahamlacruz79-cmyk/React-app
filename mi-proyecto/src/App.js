import logo from './logo.svg';
import './App.css';
 
import { PrimerComponente } from './componentes/PrimerComponente';
import { Segundocomponente } from './componentes/Segundocomponentes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
        </a>
      </header>
      <PrimerComponente>

      </PrimerComponente>
      <br />
      <Segundocomponente>
        
      </Segundocomponente>
    </div>
  );
}

export default App;
