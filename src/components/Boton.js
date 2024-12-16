
const Boton = () => {
  return (
    <>
      <button> Añadir </button>

      <style jsx>{`
        button {
            background-color: #403D39;
            border: none;
            color: #EB5E28;
            padding: 10px 20px;
            text-transform: uppercase;
            border-radius: .5rem;
            transition: 0.3s;
            margin: .8rem 0;
        }
        button:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
      `}</style>
    </>
  )
}

export default Boton
