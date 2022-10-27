import './style.scss'

export function QuintaAulaItem(props) {
    return (
        <li className='quinta-aula-item-component'>
            <img src={props.item.imagem} />
            <h2>{props.item.titulo}</h2>
            <p>{props.item.texto}</p>
        </li>
    )
}