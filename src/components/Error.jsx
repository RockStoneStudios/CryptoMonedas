
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #de1210;
    color: white;
    font-size: 22px;
    padding: 15px 10px;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border-radius: 5px;
`
const Error = ({mensaje}) => {
  return (
    <Texto>{mensaje}</Texto>
  )
}

export default Error