//Menú
//Variables
const menu = document.querySelector('#movil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnMenu');
const btnSalir = document.querySelector('#salir');
const enlaces = document.querySelectorAll('.enlace')

//Eventos
btnMenu.addEventListener('click', mostrarMenu);
btnSalir.addEventListener('click', ocultarMenu);
document.addEventListener('click', filtroTecla);
degradado.addEventListener('click', ocultarMenu);
enlaces.forEach(enlace =>{
    enlace.addEventListener('click', ocultarMenu)
})

//Funciones
function filtroTecla(e){
    e.keyCode === 27 && ocultarMenu();
}

function mostrarMenu(){
    menu.style.left = "0";
    degradado.style.display = "block";
    setTimeout(()=>{
        degradado.style.background = 'rgb(206, 160, 197, .75)';
    }, 10);
}

function ocultarMenu(){
    menu.style.left = "-80%";
    degradado.style.background = 'rgba(0, 0, 0, 0)';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 250);
}

//Galería
//Variables
const imgs = document.querySelectorAll('.img');
const lightbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('#exit');
const boxImg = document.querySelector('#boxImg');
const imgLightbox = document.querySelector('#imgLightbox');
const nombreImg = document.querySelector('#nombre');

//Eventos
imgs.forEach( img => {
    img.addEventListener('click', seleccionarImg);
})
btnExit.addEventListener('click', ocultarLightbox);
document.addEventListener('keydown', filtrarTecla);
document.addEventListener('click', filtrarElemento);

//Funciones
function seleccionarImg(e){
    const img = e.target.children[0];
    const src = img.getAttribute('src');
    const nombre = img.getAttribute('nombre');
    mostrarLightbox(src, nombre);
}

function filtrarTecla(e){
    e.keyCode === 27 && ocultarLightbox();
}

function filtrarElemento(e){
    e.target.id === 'lightbox' && ocultarLightbox();
}

function mostrarLightbox(src, nombre){
    //Animar el bloque de Lightbox
    lightbox.style.display = 'flex';
    setTimeout(()=>{
        lightbox.style.opacity = '1';
    }, 10);

    //Animar el bloque de la imagen
    setTimeout(()=>{
        boxImg.style.opacity = '1';
    }, 250);

    //Asignar valores
    imgLightbox.setAttribute('src', src);
    nombreImg.textContent = `Nombre: ${nombre}`;
}

function ocultarLightbox(){
    boxImg.style.opacity = '0';
    setTimeout(()=>{
        lightbox.style.opacity = '0';
    }, 250);
    setTimeout(()=>{
        lightbox.style.display = 'none';
    }, 500);
}