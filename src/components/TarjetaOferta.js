import { jsx } from 'react/jsx-runtime'
import Boton from './Boton'
import Image from 'next/image'


const TarjetaOferta = (props) => {
  return (
    <>
        <div style={tarjeta} className='tarjeta'>
            <Image 
                src="/celular.jpg"
                alt="celular"
                width={100}
                height={100}
            />
            <h3 style={center}> {props.producto.phone_name} </h3>
            <p style={{center, gris}}> $ Precio anterior </p>
            <p style={center}> {props.producto.price} </p>
            <Boton />            
        </div>

        <style jsx> {`
            .tarjeta {
                height: 20rem;
                width: 15rem;
                border: 0.2rem solid black;
                border-radius: 1rem;
                background-color: #FFFCF2;
                overflow: hidden;
                box-shadow: 2px 2px 10px black;
           }
        `} </style>      
    </>
  )
}

const tarjeta = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const center= {
  textAlign: 'center',
  padding: 3,
}

const gris = {
  color: 'grey',
}

export default TarjetaOferta

