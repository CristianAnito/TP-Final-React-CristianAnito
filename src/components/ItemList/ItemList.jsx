import {Item} from "../Item/Item"
import {Link} from "react-router-dom"
import "./ItemList.css"

export const ItemList = ({ games }) => {
    if (!games.length) {
        return <p>No hay juegos disponibles.</p>;
    }

    return (
        <div className="games-container">
            {games.map((game) => (
                <Link to={`/games/${game.id}`} key={game.id}>
                    <Item {...game} />
                </Link>
            ))}
        </div>
    );
};