function primera_parte(){
    let elementos =
    `<div class="fondo">

    <nav id='menu'>
    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
    <ul>
      <li><a href='./index.html'>Home</a></li>
      <li><a class='dropdown-arrow'>Products</a>
        <ul class='sub-menus'>
          <li><a href='./indexDC.html'>DC</a></li>
          <li><a href='./indexMarvel.html'>Marvel</a></li>
          <li><a href='./indexDisney.html'>Disney</a></li>
        </ul>
      </li>
      <li><a href='#pie'>About</a></li>
    </ul>
  </nav>

    
    <a class="links" href="">Productos</a>
    <a class="links" href="">Ofertas</a>
    
      <img class="car" src="./img/img-rellenos/carrito.png"  alt="">
   <a class="bas" href=""><button class="button1"></button></a>
   <a class="bas" href="https://github.com/AxelAdal"><button class="button2"></button></a>
   <a class="bas" href="https://www.instagram.com/adallopez64/"><button class="button3"></button></a>

    </div>
    
   `;

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

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}