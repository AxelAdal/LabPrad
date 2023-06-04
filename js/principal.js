function primera_parte(){
    let elementos =
    `<h1 class="titulo">FunkiLand</h1>
      <button>
       <a href="./index1.html">FunkoWeb</a>
      </button>
      <div class="animado">
      <img src="./img/XOsX.gif" alt="">
      </div>
      `;

  let inicio_de_tienda = document.querySelector(".caja-pa");

  inicio_de_tienda.innerHTML = elementos;

}

primera_parte();