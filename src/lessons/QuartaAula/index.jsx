import './style.scss'
import batataImagem from './../../assets/images/batata.gif'

export function QuartaAula() {

    const batatismoLista = [
        {
            id: 1001,
            titulo: "Dança da batata",
            imagem: batataImagem,
            texto: "vai batata, vai batata..."
        },
        {
            id: 1002,
            titulo: "Batatismo",
            imagem: batataImagem,
            texto: "vai batata, vai batata..."
        }
    ]


    return(<div className='quarta-aula-component'>
        <h1 className='titulo-principal'>Batatismo: </h1>
        <ul className='batatismo-lista'>
            {
                batatismoLista.map(
                    batata => (
                        <li key={batata.id}>
                            <img src={batata.imagem} />
                            <h2>{batata.titulo}</h2>
                            <p>{batata.texto}</p>
                        </li>
                    )
                )
            }
        </ul>
    </div>)
}