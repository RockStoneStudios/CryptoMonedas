import {useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: white;
    display: block;
    font-family: 'LATO',sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;
const Select = styled.select`
    padding: 12px;
    font-size: 18px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
`

const useSelectMonedas = (label,opciones) => {
    const [state,setState] = useState('');

     const SelectMonedas = ()=>(
         <>
          <Label>{label}</Label>
          <Select
           value={state}
           onChange={(e)=>setState(e.target.value)}
          >
              <option value="">Seleccione</option>
              {opciones.map(opcion=>(
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.nombre}
                  </option>
              ))}
          </Select>
         </>
     )
     return [state,SelectMonedas]
}

export default useSelectMonedas;