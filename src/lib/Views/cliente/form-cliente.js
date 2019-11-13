export const formCliente = () => {
  const template = `
 
  <nav class="navbar container text-center navbar-expand-lg colores-nav navbar-white static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img class="img" src="./lib/Img/Logo-principal---colores-web.png" alt="">

    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li>
        <img src="./lib/Img/avatar1.png">
        </li>
        <li class="nav-item active">
          <p class=" px-2 text-dark">Antonia</p>
        </li>
        <li>
        <img src="./lib/Img/flecha.png">

        </li>
      </ul>
    </div>
  </div>
</nav>


<div id="page-content">
  <div class="container text-center">

    <div class="texto_uno p-2 mw-80 mb-3">
      <p class="text-white mb-0 ">SELECCIÓN DE REQUERIMIENTO</p>
    </div>
  </div>
</div>

<div class="mx-auto p-4" style="width: 50rem;">
  <div class="borde">
    <div class="container" id="cardComprador">
      <div class="d-flex justify-content-center">
        
    -----

      </div>
    </div>
  </div>

</div>
</div>
</div>
</div>

</div>


</div>
</div>

<footer id="sticky-footer" class="py-4 m text-white-50">
  <div class="container text-center">
    <small>Copyright &copy; Your Website</small>
  </div>
</footer>
</body>
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  return sectionElem;
};
