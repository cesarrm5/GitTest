import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
function App() {
 
   const [nombre, setNombre] = useState('')

<<<<<<< HEAD
  const llamaYoshua = () =>{
    setNombre("Soy Yoshua yair")
=======
  const llamaJuanC = () =>{
    setNombre("Juan Carlos")
>>>>>>> ba4cfbf10333b1e063fa23a872d8d6760ddccf2e
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
<<<<<<< HEAD
        <button onClick={llamaYoshua}>Soy</button>
=======
        <button onClick={llamaJuanC}>Soy</button>
>>>>>>> ba4cfbf10333b1e063fa23a872d8d6760ddccf2e
      </header>
    </div>
  );
}

export default App;
