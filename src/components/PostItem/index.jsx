import { Link } from 'react-router-dom';

export function PostItem(props){
    return(
        <div>
            <Link to={'/postagem/' + props.postagem.id}>
                <h2>{props.postagem.title}</h2>
            </Link>
            <p>{props.postagem.body}</p>
        </div>
    )
}