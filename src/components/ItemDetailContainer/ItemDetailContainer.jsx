import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setItemDetail(null);
        setLoading(true);
        setError(null);

        fetch("/data/games.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar los detalles del juego");
                }
                return response.json();
            })
            .then((data) => {
                const item = data.find((game) => game.id === parseInt(id));
                if (!item) {
                    throw new Error("Juego no encontrado");
                }
                setItemDetail(item);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del juego...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!itemDetail) {
        return <p>Juego no encontrado.</p>;
    }

    return (
    <section>
        <h1>Detalles del Juego</h1>
        <ItemDetail item={itemDetail} />
    </section>
    );
}