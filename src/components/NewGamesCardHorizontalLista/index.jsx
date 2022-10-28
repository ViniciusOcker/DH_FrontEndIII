import { NewGamesCardHorizontalItem } from "../NewGamesCardHorizontaItem";

export function NewGamesCardHorizontalLista(props) {
    return(<div>
        <h1>New Games</h1>
        <ul>
            {
                props.listaNewGames.map(newgame=>(<NewGamesCardHorizontalItem key={newgame.id} newgame={newgame} />))
            }
        </ul>
    </div>)
}