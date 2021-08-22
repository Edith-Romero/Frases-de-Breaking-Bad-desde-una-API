// import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import styled from '@emotion/styled';
import Frases from './Components/Frases'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  flex-direction: column;
`;

const Boton = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border:4px solid blank;
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size: 800px;
  }
`;

function App() {

  const [frase, setFrase] = useState({});

  // Forma de hacerlo con promise / resolver
// const ConsultarApi = () => {
//   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
//   const frase = api.then(respuesta => respuesta.json());
//   frase.then (resultado => console.log(resultado));
// }

// Forma de hacerlo con el async
const ConsultarApi = async () => {
  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json()
  setFrase(frase[0]);
}

// Cargar una frase apenas carga la pagina

useEffect(()=>{
  ConsultarApi();
},[])
  return (
    <Contenedor>
        <Frases
          frase={frase}        
        />
        <Boton
          onClick={ConsultarApi}>
          Obtener Frase
        </Boton>
    </Contenedor>
  );
}

export default App;
