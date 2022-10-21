import './style.scss';
import batataGif from './../../assets/images/batata.gif';
import produto from './../../assets/images/Produto.png';
import listaDeProduto from './../../assets/images/ListaDeProduto.png';
import categoria from './../../assets/images/Categoria.png';


export function TerceiraAula() {

    const components = [
        {
            name: "Lista de produtos",
            description: "um card com imagem, descrisão e preço do produto",
            image: produto
        },
        {
            name: "Um grupo de componetes de produtos",
            description: "uma lista de varios produtos",
            image: listaDeProduto
        },
        {
            name: "Uma lista de produtos partir de uma categoria",
            description: "",
            image: categoria
        }
        // {
        //     name: "Component Card",
        //     description: "teste",
        //     image: batataGif
        // },
        // {
        //     name: "Component Card 2",
        //     description: "teste",
        //     image: batataGif
        // },
        // {
        //     name: "Component Card 3",
        //     description: "teste",
        //     image: batataGif
        // }
    ]

    return(
        <main>
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <img src={component.image}/>
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}