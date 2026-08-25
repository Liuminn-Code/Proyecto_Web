import { useState, useEffect } from "react";
const CLAVE_STORAGE = "proy_fav";
function PanelFavoritos({ elementos }) {
const [favoritos, setFavoritos] = useState(() => {
const guardados = localStorage.getItem(CLAVE_STORAGE);
return guardados ? JSON.parse(guardados) : [];
});
useEffect(() => {
localStorage.setItem(CLAVE_STORAGE, JSON.stringify(favoritos));
}, [favoritos]);
function alternarFavorito(id) {
// completar: agregar o quitar 'id' del arreglo 'favoritos'
}
return (
<section className="panel-favoritos">