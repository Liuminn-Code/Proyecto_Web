import { useState, useEffect } from 'react';
function ListaPokemon() {
    const [pokemones, setPokemones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
useEffect(() => {
    async function obtenerPokemones() {
    try {
    const respuesta = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
    );
    if (!respuesta.ok) {
        throw new Error('No se pudo obtener la lista de pokémon');  
}
const datos = await respuesta.json();
setPokemones(datos.results);
} catch (err) {
setError(err.message);
} finally {
setCargando(false);
}
}
obtenerPokemones();
}, []);
if (cargando) return <p>Cargando pokémon...</p>;
if (error) return <p>Ocurrió un error: {error}</p>;
return (
<ul className="lista-pokemon">
{pokemones.map((p) => (
<li key={p.name}>{p.name}</li>
))}
</ul>
);
}
export default ListaPokemon;