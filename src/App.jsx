import { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import ImagenCripto from './img/cript.jpg';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
const Contenedor = styled.div`
 max-width : 980px;
 margin :0 auto;
 width : 90%;
 @media (min-width :992px){
   display:grid;
   grid-template-columns : repeat(2,1fr);
   column-gap : 2rem;
 }

`
const Imagen = styled.img`
  max-width : 400px;
  width : 80%;
  margin: 100px auto 0 auto;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Lato',sans-serif;
  color : #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 10px auto;
    border-radius: 12px;
  }
  `

function App() {
  const [monedas,setMonedas] = useState({});
  const [resultado,setResultado] = useState({});
  const [cargando,setCargando] = useState(false);
  
   useEffect(()=>{
         console.log(monedas);
       if(Object.keys(monedas).length>0){
         const cotizarCrypto = async()=>{
           setCargando(true);
           setResultado({});
            const {moneda,cryptoMoneda} = monedas;
            console.log("-----"+moneda);
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoneda}&tsyms=${moneda},`
             console.log(url);
            const res = await fetch(url);
             const resultado = await res.json();
             console.log(resultado);
             setResultado(resultado.DISPLAY[cryptoMoneda][moneda]);
            setCargando(false);
          } 
         cotizarCrypto()

       }
   },[monedas])
  return (
    <Contenedor>
       <Imagen src={ImagenCripto} alt="Imagen Cripto"/>
       <div>

      <Heading>Cotiza Criptomonedas al instante</Heading>
       <Formulario
        setMonedas={setMonedas}
       />
        {cargando && <Spinner/>}
       {resultado.PRICE && <Resultado resultado={resultado}/>}
       </div>
    </Contenedor>
  )
}

export default App
