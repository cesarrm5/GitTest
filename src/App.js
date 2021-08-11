import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
function App() {
 
   const [nombre, setNombre] = useState('')

  const llamaJuanC = () =>{
    setNombre("Juan Carlos")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
        <button onClick={llamaJuanC}>Soy</button>
      </header>
    </div>
  );
}

export default App;
