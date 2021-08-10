import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
function App() {
 
   const [nombre, setNombre] = useState('')

  const llamaFabian = () =>{
    setNombre("Ixtapaluca")
  }
  const llamaTesi = () =>{
    setNombre("Tecnologico")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
        <button onClick={llamaTesi}>Tecnologico</button>
        <button onClick={llamaFabian}>Ixtapaluca</button>
      </header>
    </div>
  );
}

export default App;
