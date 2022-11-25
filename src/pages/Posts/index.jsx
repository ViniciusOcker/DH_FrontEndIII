import { useEffect , useState } from "react";
import { PostItem } from "../../components/PostItem";

export function Posts() {
    const [postagens, setPostagens] = useState([]);
    const [listaPostagens, setListaPostagens] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPostagens(json));
    }, []);

    useEffect(()=>{
        setListaPostagens(postagens);
    }, [postagens]);

    return(
        <div>
            <h1>Postagens</h1>
            <div>
                {
                    (listaPostagens.length != 0)? listaPostagens.map(item=><PostItem postagem={item} key={item.id} />) : <p>Aguarde ...</p>
                }
            </div>
        </div>
    )
}