let array = [];

export const fn = (arr) => {
  arr.forEach(doc => array.push(doc)
  );
}
export const form = () => {
  const template = `
  <body>
  <div style="margin:auto;" class="container">
    <div class="row">
      <div class="col-lg-12 col-xl-9 mx-auto">
        <p style="position: relative;
        top: 2em;
        color: #325262;
        font-size: 1.2em;
        font-weight: bolder;">DUE DILIGENCE DEL VENDEDOR</p>
        <div style="border: solid 1px #f37a00;
          width: max-content;
          height: max-content;
          padding: 0.5em;" class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex col-lg-6">
            <p style="padding:0 2em;
            position: relative;
            top: 1em;
            color: #F37a00;
            font-size: 1.2em;"> DOCUMENTOS SELECCIONADOS</p>

            <div class="col-lg-6" style="position: relative;
            left: -14.5em;
            top: 5em;
            height: max-content;
            padding: .5em;" id="listaDocumentos">

            </div>

          </div>
          <div class="card-body">
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputUserame" style="color: #325262;
                  font-weight: 400;">Nombre del proyecto</label>
                <input style="    border: solid 1px #325262;
                  margin: 0 0 .8em 0;
                  height: 2em;" type="text" id="inputProyecto" class="form-control"
                  placeholder="Ingrese nombre del proyecto" autocomplete="off" required>

              </div>

              <div class="form-label-group">
                <label for="inputEmail" style="color: #325262;
                  font-weight: 400;">Nombre del cliente</label>
                <input style="    border: solid 1px #325262;
                  margin: 0 0 .8em 0;
                  height: 2em;" type="text" id="inputName" class="form-control"
                  placeholder="Ingrese nombre del cliente" autocomplete="off" required>

              </div>
              <div class="form-label-group">
                <label style="color: #325262;
                  font-weight: 400;" for="inputPassword">Correo electrónico</label>
                <input style="    border: solid 1px #325262;
                  margin: 0 0 .8em 0;
                  height: 2em;" type="email" id="inputEmail" class="form-control" placeholder="Ingrese correo"
                  autocomplete="off" required>

              </div>
              <div class="form-label-group">
                <label style="color: #325262;
                  font-weight: 400;" for="inputPassword">Mensaje</label>
                <textarea class="form-control" style="    resize: none;
                  background-color: white;
                  border: solid 1.2px #325262;" placeholder="Mensaje"
                  disabled>Estimado(a) Envio el requerimiento de imformación para el proceso </textarea>
              </div>
              <button class="btn-lf btn-primary btn-block text-uppercase" id="send" type="button" data-toggle="modal"
                data-target="#exampleModal">Enviar</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
        <a href="#/"> <button style="position: relative;
          background-color: #325262;
          border: none;
          padding: 0.5em 1.5em;
          margin: 1em auto;
          width: max-content;
          left: 7em;
          top: -2em;" class="btn-lf btn-primary btn-block text-uppercase" id="send" type="button" data-toggle="modal"
            data-target="#exampleModal"> Cerrar Sesión </button>
        </a>
      </div>
    </div>
  </div>
</body>

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
        <h5 class="modal-title" id="exampleModalLabel">Tu requerimiento ha sido enviado correctamente.</h5>
      </div>
      <div class="modal-footer">
       <a href="#/formAbogado"><button type="button" class="btn btn-secondary" id="equis"> Cerrar </button> </a>
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
      Estado: 'pendiente',
      Correo: email,
      timeReq: new Date(),
      Documento: item,
    })
  }

  sectionElem.querySelector('#send').addEventListener('click', () => {
    window.location.href = `mailto:${emailDelCliente}?subject=MirandayAmado%20esta%20revisando%20tu%20caso&body=Estimada%20${nombreDelCliente}%20te%20envío%20el%20requerimiento%20de%20información%20para%20el%20proceso%20${nombreDelProyecto}%20https://rita-gomez.github.io/Miranda-y-Amado/src/index.html`;
      array.forEach(doc => {
        createReq(nombreDelProyecto, doc, nombreDelCliente, emailDelCliente);
      })
      listaDocumentos.innerHTML = "";
  });

  return sectionElem;
};