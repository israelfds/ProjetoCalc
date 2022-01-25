import './App.css';
import React, {useState} from "react"
import Ambientes from './componets/Ambientes';



function App() {
  const [values, setValues] = useState();

  const [comodoList, setComodoList] = useState([]);

  const handleChangeValues = (value) => {
    console.log(value)
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };


function novoAmbiente() {
  let novaLista = [...comodoList]
      novaLista.push(<Ambientes></Ambientes>)
      setComodoList(novaLista);
  
}


//<input onCha nge={handleChangeValues} type="text" name="comodo" placeholder='cômodo' className="registername"className='register--input'></input>


  return (
    <div className="app--container">
      <div className="register--container">
      <h1 className="register--title">Calculadora Residêncial M² e Lineares</h1>
        <h2 className="title2">Ambiêntes</h2>
        <button onClick={() => novoAmbiente()} 
              className="register--button">Incluir</button>
      </div>
      {comodoList}
    </div>
  );
}

export default App;
