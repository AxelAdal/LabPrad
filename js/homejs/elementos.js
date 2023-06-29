function primera_parte(){
    let elementos =
    `<div class="fondo">
    <div class="region"></div>
    <input type="text" autocomplete="off" name="text" class="input" placeholder="Busqueda">
    <a class="links" href="">Productos</a>
    <a class="links" href="">Ofertas</a>
    <img class="car" src="./img/img-rellenos/carrito.png"  alt="">
   <a class="bas" href=""><button class="button1"></button></a>
   <a class="bas" href="https://github.com/AxelAdal"><button class="button2"></button></a>
   <a class="bas" href="https://www.instagram.com/adallopez64/"><button class="button3"></button></a>
    </div>`;

  let inicio_de_tienda = document.getElementById("header");

  inicio_de_tienda.innerHTML = elementos;

}

primera_parte();
/****************************************/
function carrusel_parte(){
  let elementos2 =
  ``;

let mezcla = document.getElementById("caimg");

mezcla.innerHTML = elementos2;

}

carrusel_parte();
/**************************************/
function tercera_parte(){
  let elementos3 =
  `<center><img class="logue" src="./img/img-rellenos/logo.png" alt=""></center>`;

let logo_tienda = document.getElementById("logos");

logo_tienda.innerHTML = elementos3;

}

tercera_parte();