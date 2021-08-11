import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
function App() {
 
   const [nombre, setNombre] = useState('')

  const llamaYoshua = () =>{
    setNombre("Soy Yoshua")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
        <button onClick={llamaYoshua}>Soy</button>
      </header>
    </div>
  );
}

export default App;
