import { useEffect , useState } from "react";
import { useMatch } from "react-router-dom";

export function Postagem(){
    const idPostagem = useMatch("/postagem/:id").params.id;
    const [postagem, setPostagem] = useState({});
    const [exibirPostagem, setExibirPostagem] = useState({});
    const [listaComentarios, setListaComentarios] = useState([]);
    const [exibirListaComentarios, setExibirListaComentarios] = useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts/' + idPostagem)
        .then((response) => response.json())
        .then((json) => setPostagem(json));

        fetch('https://jsonplaceholder.typicode.com/posts/' + idPostagem + '/comments')
        .then((response) => response.json())
        .then((json) => setListaComentarios(json));

    },[]);

    useEffect(()=>{
        setExibirPostagem(postagem);
    }, [postagem]);

    useEffect(()=>{
        setExibirListaComentarios(listaComentarios);
    }, [listaComentarios]);

    return(
        <div>
            <div>
                <h1>{ exibirPostagem.title }</h1>
                <p>{ exibirPostagem.body }</p>
            </div>
            <br/><br/><br/><br/><br/>
            <div>
                {
                    exibirListaComentarios.map(
                        comentario=><div key={comentario.id}>
                            <p>{comentario.name} ({comentario.email})</p>
                            <br/><br/>
                            <p>{comentario.body}</p>
                            <br/><br/><br/><br/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}