import styled from "@emotion/styled";

const Contenedor = styled.div`
     color: #fff;
     font-family: 'LATO',sans-serif;
     display: flex;
      align-items: center;
      gap :1rem;
      margin-top: 30px;



`;
const Texto = styled.p`
 font-size: 18px;
 span{
     font-weight: 700;
 }
`;
const Precio = styled.p`
  font-size: 25px; 
  span {
      font-weight: 700;
  }
`;

const Imagen = styled.img`
    display: block;
    width: 150px;

`

const Resultado = ({resultado}) => {
      const {PRICE,LOWDAY,HIGHDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE } = resultado; 
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alT = "IMAGEN cripto"/>
         <div>
         <Precio>El Precio es de <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia : <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas<span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span></Texto>
         </div>
    </Contenedor>
  )
}

export default Resultado