function home(){
    let elementos =
`<div class="btn-todo" id="btn-todo">
<span>☰</span>
</div>
</div>
<div class="modal">
<span class="cerrar">❌</span> 
<div class="partes"></div>    
</div>


    `;

  let home_de_tienda = document.querySelector(".Home");

  home_de_tienda.innerHTML = elementos;

}

home();

/*Partes del menu*/

function cosas_del_menu(){
    let bases =
    `<ul class="lista">
    <li><a href="">Promociones</a></li>
    <li><a href="">Categorias</a></li>
    <li><a href="">Exclusivos</a></li>
    <li><a href="">Nuevos</a></li>
    </ul>`;

  let menu_de_tienda = document.querySelector(".partes");

  menu_de_tienda.innerHTML = bases;

}

cosas_del_menu();