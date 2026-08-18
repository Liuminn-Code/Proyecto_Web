// ===== Ejercicio 1: Tema y saludo dinámico =====
let temaActual = 'claro';

const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');

function cambiarTema() {

document.body.classList.toggle('modo-oscuro');
temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';

if (temaActual === 'oscuro') {
    document.querySelector('.contacto').style.backgroundColor = '#2e2650';
    document.querySelector('.contacto').style.color = '#fff';
    document.querySelector('.caracteristicas').style.backgroundColor = '#2e2650';
    document.querySelector('.caracteristicas').style.color = '#fff';
}
else{
    document.querySelector('.contacto').style.backgroundColor = '#f4f4f4';
    document.querySelector('.contacto').style.color = '#000';
    document.querySelector('.caracteristicas').style.backgroundColor = '#f4f4f4';
    document.querySelector('.caracteristicas').style.color = '#000';
}
}
function saludar() {
    const horaActual = new Date().getHours();
    if (horaActual < 12){
        saludoElemento.textContent = '¡Buenos días!';    
    }
    else if (horaActual < 18) {
        saludoElemento.textContent = '¡Buenas tardes!';
    }
    else if (horaActual >= 18) {
        saludoElemento.textContent = '¡Buenas noches!';
    }
}

botonTema.addEventListener('click', cambiarTema);

saludar();
// ===== Ejercicio 2: Panel de estadísticas =====
const estadisticas = [
    { etiqueta: 'Proyectos', valor: 24 },
    { etiqueta: 'Clientes', valor: 12 },
    { etiqueta: 'Años de experiencia', valor: 3 },
];
const contenedorStats = document.querySelector('#panel-estadisticas');

function renderizarEstadisticas(lista) {
    lista.forEach(function (item) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-stat');
    tarjeta.innerHTML = `<span class="stat-numero"
    data-valor="${item.valor}">0</span>
    <p>${item.etiqueta}</p>`;
    contenedorStats.appendChild(tarjeta);
});
}
function sumar(){
    document.getElementById("numero").innerHTML = parseInt(document.getElementById("numero").innerHTML) + 1;
}
function restar(){
    if(document.getElementById("numero").innerHTML == 0){
        console.log("no se pueden tener numeros negativos");
    }
    else{ 
    document.getElementById("numero").innerHTML = parseInt(document.getElementById("numero").innerHTML) - 1;
        }
}
// TODO: función animarConteo(elemento, valorFinal) con setInterval
function animarConteo(elemento, valorFinal) {
    let valorActual = 0;
    const incremento = Math.ceil(valorFinal / 100);
}