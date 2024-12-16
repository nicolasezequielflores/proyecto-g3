
import ListaTarjetas from './ListaTarjetas'

const SeccionTarjetas = () => {
  return (
    <>
      <section>
        <header>OFERTAS</header>
        <ListaTarjetas />
      </section>

      <style jsx>{`
        section {
          background-color: #CCC5B9;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }
        header {
          font-size: 3rem;
          line-height: 2;
        }  
      `}</style>
      
    </>
  )
}

export default SeccionTarjetas
