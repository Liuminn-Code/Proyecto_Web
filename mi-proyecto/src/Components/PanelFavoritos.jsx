import TarjetaServicio from "./TarjetaServicio";
const servicios = [
{ id: 1, icono: "⚙", titulo: "Unidad 1", descripcion: "Creación de frontend con HTML y CSS." },
{ id: 2, icono: "⚙", titulo: "Unidad 2", descripcion: "Desarrollo de funcionalidades interactivas con JavaScript." },
{ id: 3, icono: "⚙", titulo: "Unidad 3", descripcion: "Creación de un sitio web completo." }
];
function ListaServicios() 
if(servicios.length === 0) {
return <p>No hay servicios disponibles.</p>;
}
else {
return (
    
)}
export default ListaServicios;