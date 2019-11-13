
export default () => {
  const template = `
  <!-- Navigation -->
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
  
  
  <div class="page-content"id="page-content">
    <div class="container text-left">
  
      <div class=" p-2 mb-3">
        <p class="text-dark font-weight-bold mb-0 ">SELECCIÓN DE REQUERIMIENTO</p>
      </div>
      <div class="text-left">
    <a href="#/requerimiento" style="font-size:0.9rem;width : 40%;"class="color-a py-2 px-2 font-weight-bold text-white text-center">
    NUEVO REQUERIMIENTO <i class="fas fa-plus-square"></i></a>
    </div>
    </div>
  </div>
  
  <div class="mx-auto p-4" style="width: 50rem;">
    <div class="borde">
      <div class="container px-0" id="cardComprador">
    
        <div class="d-flex justify-content-center">
          <div>
         
          <div class="row">


            <table id="mytable" style = "width : 45rem ;" class="table table-bordred table-striped">

              <thead >
                <th class="nuevo px-2 ">Fecha</th>
                <th class="nuevo px-2">Cliente</th>
                <th class="nuevo px-2">Asunto</th>
                <th class="nuevo px-2">Estado</th>

              </thead>
              <tbody>

                <tr class="mt-0 p-0">
                  <td class="color mb-0 " >28 may</td>
                  <td class="color">RIPLEY</td>
                  <td class="color">Due Diligence Comprador</td>
                  <td>
        <p class="progress"><span class="progress-bar bg-warning" style="width :45%">45%</span></p>
                  </td>
                 
                </tr>

                <tr>
                  <td class="color">28 may</td>
                  <td class="color">RIPLEY</td>
                  <td class="color">Indecopi</td>
                  <td>
                  <p class="progress"><span class="progress-bar bg-success" style="width :100%">100%</span></p>
                </td>
                 
                </tr>

                <tr>
                  <td class="color">28 may</td>
                  <td class="color">PLAZA VEA</td>
                  <td class="color">Due Diligence</td>
                  <td>
                  <p class="progress"><span class="progress-bar bg-danger" style="width :10%">5%</span></p>
                </td>
                 
                </tr>

                <tr>
                  <td class="color">10 enero</td>
                  <td class="color">MUEBLES SAC</td>
                  <td class="color">Due Diligence</td>
                  <td>
                  <p class="progress"><span class="progress-bar bg-warning" style="width :70%">70%</span></p>
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

 const  getReq = () => {
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

 
