export const requerimiento = () => {
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


<div  id="page-content">
  <div class="container text-center col-md-12 pt-4">

     <span class="mb-0 color font-weight-bold">SELECCIONA TU REQUERIMIENTO</span>
   
  </div>
</div>

<div class="mx-auto p-4" style="width: 50rem;">
  <div class="borde">
    <div class="containe mt-4" id="cardComprador">
      <div class="d-flex justify-content-center">
        <div>
          <div class="p-5"><a href="#/dueComprador">
          <button type="submit" style="box-shadow: 2px 2px 7px rgba(56, 54, 54, 0.86);border:none;border-radius:2.5px;font-weight :bold;" class="paddin text-white"
                id="due-comprador">DUE DILIGENCE
                COMPRADOR</button></a>
                </div>
        </div>
        <div>
          <div class="p-5"> <a  href="#/dueVendedor"><button style="box-shadow: 2px 2px 7px rgba(56, 54, 54, 0.86);border:none;border-radius:2.5px; font-weight :bold;" type="submit" class="paddin text-white"
                id="due-vendedor">DUE DILIGENCE
                VENDEDOR</button></a></div>
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
</div>

<footer style="width:100vw;margin-botton:-25px!important" id="sticky-footer" class="py-4 m text-white-50">
  <div class="container text-center">
    <small>Copyright &copy;Miranda y Amado </small>
  </div>
</footer>
</body>`;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  return sectionElem;
};