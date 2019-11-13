
export default () => {
  const template = `
  <!-- Navigation -->
<nav class="navbar container text-center navbar-expand-lg colores-nav navbar-white static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img class="img" src="./lib/Img/Logo-principal---colores-web.png" alt=""></a>

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
  
  
  <div class="page-content"id="page-content">
    <div class="container text-left">
  
 
    </div>
  </div>
</nav>

<div class="mx-auto p-4" style="width: 50rem;">

<div class=" p-2">
      <p class="font-weight-bold mb-0 " style="color: #325262 ; font-size: 1.1rem">REQUERIMIENTO RECIENTES</p>
    </div>

<div class="col-md-12 mx-0 px-0">
      <a href="#/requerimiento" style="font-size:0.9rem"
        class="color-a py-2 px-2 mx-0 font-weight-bold text-white float-right">NUEVO REQUERIMIENTO</a>
    </div>
    <br/><br/>

  <div class="borde mt-2">
    <div class="container-client" id="cardComprador" style="overflow-y: scroll;">
      <div class="w-100">
        <div>
          <div class="d-flex justify-content-center ml-2">
            <table id="mytable" class="table table-striped">
              <thead style="background-color: #325262; color: white">
                <th class="th-client w-20" style="width: 8%; font-size: 0.9rem; background-color: #325262; color: white">
                  FECHA
                </th>
                <th class="th-client" style="width: 10%; font-size: 0.9rem; background-color: #325262; color: white">
                  CLIENTE
                </th>
                <th class="th-client w-40" style="width: 10%; font-size: 0.9rem; background-color: #325262; color: white">
                  ASUNTO
                </th>
                <th class="th-client" style="width: 8%; font-size: 0.9rem; background-color: #325262; color: white">
                  ESTADO
                </th>
              </thead>
              <tbody>
                <tr class="tr-form-client">
                  <td class="color mb-0 ">28 may</td>
                  <td class="color">RIPLEY</td>
                  <td class="color">Due Diligence Comprador</td>
                  <td>
                    <p class="progress w-100"><span class="progress-bar bg-warning" style="width :45%">45%</span></p>
                  </td>
                </tr>
                <tr class="tr-form-client">
                  <td class="color">28 may</td>
                  <td class="color">RIPLEY</td>
                  <td class="color">Indecopi</td>
                  <td>
                    <p class="progress w-100"><span class="progress-bar bg-success" style="width :100%">100%</span></p>
                  </td>
                </tr>
                <tr class="tr-form-client">
                  <td class="color">28 may</td>
                  <td class="color">PLAZA VEA</td>
                  <td class="color">Due Diligence</td>
                  <td>
                    <p class="progress w-100"><span class="progress-bar bg-danger" style="width :10%">5%</span></p>
                  </td>
                </tr>
                <tr class="tr-form-client">
                  <td class="color">10 enero</td>
                  <td class="color">MUEBLES SAC</td>
                  <td class="color">Due Diligence</td>
                  <td>
                    <p class="progress w-100"><span class="progress-bar bg-warning" style="width :70%">70%</span></p>
                  </td>
                </tr>
              </tbody>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>


</div>

</div>


</body>
    `;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  const getReq = () => {
    firebase.firestore().collection('AllCases').doc('cada caso').collection('Apelacion')
      .onSnapshot((querySnapshot) => {
        const comment = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data())

        });
        // pintarComentario(comment);
      });
  };
  getReq()
  return sectionElem;
};


