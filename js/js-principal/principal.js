function primera_parte(){
    let elementos =
    `<div class="inicio">
    <h1>Funkoweb</h1>
       <button>
        <a href="./indexHome.html">Ingresar</a>
       </button>
   <center> <img src="./img/XOsX.gif" alt=""> </center>
 </div>`;

  let inicio_de_tienda = document.getElementById("padre");

  inicio_de_tienda.innerHTML = elementos;

}

primera_parte();