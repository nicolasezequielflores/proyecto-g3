import TarjetaOferta from './TarjetaOferta'


const productos = [
  {
    "brand": "Nokia",
    "id": "1",
    "phone_name": "C12 Pro",
    "image": "https://www.startech.com.bd/image/cache/catalog/mobile/nokia/nokia-c12-pro/nokia-c12-pro-01-500x500.webp",
    "price": "150.000"
  },
  {
    "brand": "Apple",
    "id": "2",
    "phone_name": "Iphone 15",
    "image": "https://www.siliconrepublic.com/wp-content/uploads/2023/09/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large_2x-857x1200.jpg",
    "price": "250.000"
  },
  {
    "brand": "Samsung",
    "id": "3",
    "phone_name": "Galaxy S24",
    "image":"https://www.cordobadigital.net/wp-content/uploads/2024/05/S24-Plus-Yellow.png",
    "price": "210.000"
  },
  {
    "brand": "Motorola",
    "id": "4",
    "phone_name": "Edge 50",
    "image": "https://armoto.vtexassets.com/arquivos/ids/167240-1600-auto?v=638634977649000000&width=1600&height=auto&aspect=true",
    "price": "180.000"
  }
]

const ListaTarjetas = () => {
  return (
    <>
      <div className="tarjetas">

        {productos.map (producto => <TarjetaOferta producto={producto} />)}      

      </div>

      <style jsx> {`
        .tarjetas {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}</style>

    </>
  )
}

export default ListaTarjetas
