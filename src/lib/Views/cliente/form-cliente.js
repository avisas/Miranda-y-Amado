let array = [];

export const fnc = (arr) => {
  arr.forEach(doc => array.push(doc)
  );
}

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
  <div class="container text-center"></div>
</div>

<div class="mx-auto py-5" style="width: 50rem;">
  <div class="form-row col-md-12 mx-0 px-0">
    <div class="col-md-6 font-weight-bold">DUE DILIGENCE DE COMPRADOR</div>
    <div class="col-md-6">
      <div class="progress float-right">
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

  <td> 
  <i class="fas fa-upload"> <input type="file" value="upload" lang="es" id="uploader"> 
  </i></td>
 <td id="listaDocumentos">cartanotarial_mef.doc</td>
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
    <button class="btn w-25 float-right text-white mr-3" style="background-color: #F37A00" data-toggle="modal" data-target="#exampleModal">ENVIAR</button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¡Listo!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Tu información ha sido enviada con éxito.
        ¡Muchas gracias!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
</body>
 
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  const listaDocumentos = sectionElem.querySelector('#listaDocumentos');

  array.forEach(doc => {
    const list = document.createElement('ul');
    let acum = '';
    acum += `
              <li style="color: #325262;
              list-style: none;
              width: max-content;
              font-weight: 500;">${doc}</li>
            `;
    list.innerHTML = `${acum}`;
    listaDocumentos.appendChild(list);
  })

  sectionElem.querySelector('#uploader').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`Documentos/${file.name}`);
    const task = storageRef.put(file);

  })

  return sectionElem;
};
