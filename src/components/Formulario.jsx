import {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/data';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #ffe;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7BFE;
        cursor: pointer;
    }

`
const Formulario = ({setMonedas}) => {
    const [cryptos,setCryptos] = useState([]);
    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);
    const [cryptoMoneda,SelectCryptomoneda] = useSelectMonedas('Elige tu CriptoMoneda',cryptos);
    const [error,setError] = useState(false);
     
    useEffect(()=>{
    const consultarApI = async()=>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
          const res = await fetch(url);
          const resultado = await res.json();
        
          const arrayCriptos = resultado.Data.map(moneda=>{
              const objeto = {
                  id : moneda.CoinInfo.Name,
                  nombre : moneda.CoinInfo.FullName
              }
              return objeto;
          });
          setCryptos(arrayCriptos);
    }  
      consultarApI();
    },[]);

  const handleSubmit = e =>{
      e.preventDefault();
      console.log(moneda,cryptoMoneda)
       if([moneda,cryptoMoneda].includes('')){
           setError(true);
           return;
       }
       setError(false);
        setMonedas({
            moneda,
            cryptoMoneda
        })
  }


  return (
      <>
      {error && <Error mensaje ="Todos los campos son obligatorios"/>}
<form onSubmit={handleSubmit}>
   <SelectMonedas />
    <SelectCryptomoneda/>
    <InputSubmit type="submit" value="cotizar" />
</form>
</>
  )
}

export default Formulario