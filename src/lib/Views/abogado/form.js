
let array = [];

export const fn = (arr) => {
  arr.forEach(doc => array.push(doc)
  );
}
export const form = () => {
  const template = `
  <body>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
          <p> Documentos Seleccionados </p>
          
          <ol id="listaDocumentos">
             
          </ol>

          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Información del requerimiento</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputUserame">Nombre del proyecto</label>
                <input type="text" id="inputProyecto" class="form-control" placeholder="Nombre del proyecto" required >
                
              </div>

              <div class="form-label-group">
                <label for="inputEmail">Nombre del cliente</label>
                <input type="text" id="inputName" class="form-control" placeholder="Nombre del cliente" required >
                
              </div>
              <div class="form-label-group">
                <label for="inputPassword">Correo electrónico</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Correo" required>
                
              </div>
              <div class="form-label-group">
                <textarea class="form-control" placeholder="Mensaje" disabled>Estimado(a)<br/> Envio el requerimiento de imformación para el proceso </textarea>
              </div>
              <button class="btn-lf btn-primary btn-block text-uppercase type="button" id="send" data-toggle="modal" data-target="#exampleModal">Enviar</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h5 class="modal-title" id="exampleModalLabel">¡Requerimiento enviado correctamente!</h5> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  const listaDocumentos = sectionElem.querySelector('#listaDocumentos');

  array.forEach(doc => {
    const list = document.createElement('li');
    let acum = '';
    acum += `
              <li>${doc}</li>
            `;
    list.innerHTML = `${acum}`;
    listaDocumentos.appendChild(list);
  })

  const inputProyecto = sectionElem.querySelector('#inputProyecto');
  const inputName = sectionElem.querySelector('#inputName');
  const inputEmail = sectionElem.querySelector('#inputEmail');
  let nombreDelProyecto = '';
  let nombreDelCliente = '';
  let emailDelCliente = '';
  inputProyecto.addEventListener('change', (e) => {
    const proyecto = e.target.value;
    nombreDelProyecto = proyecto;
  });
  inputName.addEventListener('change', (e) => {
    const nombre = e.target.value;
    nombreDelCliente = nombre;
  });
  inputEmail.addEventListener('change', (e) => {
    const email = e.target.value;
    emailDelCliente = email;
  });
  console.log(inputEmail);

  const createReq = (caso, item, nombre, email) => {
    firebase.firestore().collection(caso).doc(item).set({
      Cliente: nombre,
      Estado: 'pendiente',
      Correo: email,
    })
  }

  sectionElem.querySelector('#send').addEventListener('click', () => {
    window.location.href = `mailto:${emailDelCliente}?subject=MirandayAmado%20esta%20revisando%20tu%20caso&body=Estimada%20${nombreDelCliente}%20te%20envío%20el%20requerimiento%20de%20información%20para%20el%20proceso%20${nombreDelProyecto}%20https://sarabigail.github.io/LIM010-social-network/src/#/signup`;
      array.forEach(doc => {
        createReq(nombreDelProyecto, doc, nombreDelCliente, emailDelCliente);
      })
  });

  return sectionElem;
};