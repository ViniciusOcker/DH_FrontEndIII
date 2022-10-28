import "./style.scss";
import windows from "../../assets/images/logo-windows.svg";
import macos from "../../assets/images/logo-apple.svg"
export function NewGamesCardHorizontalItem(props) {
    let newgame = props.newgame;
    let logos = [];
    logos["windows"] = windows;
    logos["macos"] = macos;

    return(<li className="new-games-card-horizontal-item-componente">
        <img src={newgame.picture} />
        <div>
            <h2>
                {newgame.name}
            </h2>
            {
                newgame.plataforms.map((plataforma,index)=><img key={index} src={logos[plataforma]} />)
            }
            <p>
                {
                    newgame.categories.map((categoria,index)=>(<span key={index}>{(index != 0)?", ":""}{categoria}</span>))
                }
            </p>
        </div>
        <p>
            {newgame.price}
        </p>
    </li>)
}