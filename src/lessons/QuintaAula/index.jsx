import './style.scss'
import batataImagem from './../../assets/images/batata.gif'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'

export function QuintaAula() {

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


    return(<div className='quinta-aula-component'>
        <h1 className='titulo-principal'>Batatismo: </h1>
        <ul className='batatismo-lista'>
            {
                batatismoLista.map(
                    batata => (<QuintaAulaItem key={batata.id} item={batata} />)
                )
            }
        </ul>
    </div>)
}