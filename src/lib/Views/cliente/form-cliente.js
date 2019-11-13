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

  </div>
</div>

<div class="mx-auto py-5" style="width: 50rem;">
<div class="form-row col-md-12 mx-0 px-0">
<div class="col-md-6">DUE DILLIGENCE DE VENDEDOR</div>
<div class="col-md-6"><div class="progress float-right">
<div class="progress-bar bg-info" style="width:30%">30%</div>
</div>
</div>
</div>
  <div class="borde mt-2">
    <div class="container-client" id="cardComprador" style="overflow-y: scroll;">
      <div class="d-flex justify-content-center ml-2">
        <table id="mytable" class="table table-striped">
        <thead style="background-color: #325262; color: white">
        <th class="th-client" style="width: 10%; font-size: 0.9rem; background-color: #325262; color: white">SUBIR</th>
        <th class="th-client" style="font-size: 0.9rem;background-color: #325262; color: white">LISTADO DE ITEMS</th>
        <th class="th-client" style="width: 10%; font-size: 0.9rem; background-color: #325262; color: white">ESTADO</th>
        <th class="th-client" style="width: 7%; font-size: 0.9rem; background-color: #325262; color: white"></th>
        </thead>
<tbody>
<tr class="tr-form-client">

  <td id="uploader"> 
    <input type="file" value="upload" lang="es" id="filebutton">
  <i class="fas fa-upload">
  </i></td>
 <td>xxx</td>
<td><i class="fas fa-trash-alt"></i></td>
<td><i class="fas fa-check-circle"></i></td>
</tr>
<tr class="tr-form-client">
<td><i class="fas fa-upload"></i></td>
<td>xxx1</td>
<td><i class="fas fa-trash-alt"></i></td>
<td><i class="fas fa-check-circle"></i></td>
</tr>
<tr class="tr-form-client">
<td><i class="fas fa-upload"></i></td>
<td>xxx2</td>
<td><i class="fas fa-trash-alt"></i></td>
<td><i class="fas fa-check-circle"></i></td>
</tr>
</tbody>
</table>
        
      </div>
      
    </div>
    
  </div>
  <div class="col-md-12 float-right py-2 px-0 mx-0">
  <button class="btn w-25 float-right text-white" style="background-color: #F37A00">GRABAR</button>
  <button class="btn w-25 float-right text-white mr-3" style="background-color: #F37A00">ENVIAR</button>
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

  const uploader = sectionElem.querySelector('uploader');

  return sectionElem;
};
