import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data/games.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar los juegos");
                }
                return response.json();
            })
            .then((data) => {
                setGames(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <p>Cargando juegos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return(
        <section>
            <h1>Juegos Disponibles</h1>
            <ItemList games={games} />
        </section>
    );
}