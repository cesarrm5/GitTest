import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
function App() {
 
   const [nombre, setNombre] = useState('----')

  const llamaJose = () =>{
    setNombre("Jose")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre}</h2>
        <button onClick={llamaJose}>Jose</button>
      </header>
    </div>
  );
}

export default App;
