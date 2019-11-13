import {
  verRequerimientos
} from '../../Model/firebase-db.js'
import { fn } from './form.js'

let array = [];
let all = [];


export const dueComprador = () => {
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
            <img src="./lib/Img/avatar1.png" alt="">
        </li>
        <li class="nav-item active">
          <p class=" px-2 text-dark">Antonia</p>
        </li>
<li>
<img src="./lib/Img/flecha.png" alt="">
</li>
      </ul>
    </div>
  </div>
</nav>


<div id="page-content">
  <div class="container text-left">

        <div class=" p-2 mw-80 mb-3">
          <p class="text-dark font-weight-bolder mb-0 ">DUE DILIGENCE PARA COMPRADOR</p>
        </div>
      </div>
    </div>
    
    <div class="mx-auto p-4" style="width: 50rem;"> 
      <div class="borde">
      <div class="container" id="cardComprador">
      <div class="container">
        <div class="row">
            <div class="table-responsive">    
              <table id="mytable" class="table-fill ">
                <thead class="bg-white">
                  <tr>
                  <th class="bg-white text-center">
                    <input type="checkbox" id="checkall" />
                  </th>
                  <th class="bg-white font-weight-normal text-dark">DOCUMENTOS SUGERIDOS:</th>
                  </tr>
                </thead>
                <tbody class="table-hover" id ="contenedor">
                </tbody>
              </table>

   

          </div>
        </div>
      </div>
    </div>
        </div>
  
      </div>
     
      <div>
      <a href="#/requerimiento"> <button class=" px-1 py-1 bton"> Volver </button> </a>
      <a href="#/confirmacion-requerimientos"> <button class="px-1 py-1 bton" id="continuar"> Continuar </button> </a> 

   </div>

</div>
</div>


</body>
`


  ;

  $(document).ready(function () {
    $("#mytable #checkall").click(function () {
      if ($("#mytable #checkall").is(':checked')) {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", true);
        });

      } else {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", false);
        });
      }
    });

    $("[data-toggle=tooltip]").tooltip();
  });

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  const box = sectionElem.querySelector('#contenedor');
  box.innerHTML = '';

    verRequerimientos('requerimientos', 'DUE DILIGENCE DE COMPRADOR')
      .then(docs => {
        const dataReq = docs.data().requerimientos;
        dataReq.forEach(doc => {
          const contenedor1 = document.createElement('tr');
          let acum = '';
          acum += `
                  <td class="text-center px-3">
                    <input type="checkbox" value="${doc.value}" class="checkthis" id="${doc.value}"/>

                  </td>
                  <td class="text-left">
                    <p class="mb-0 px-2 font-weight-normal">${doc.value}</p>
                  </td>
                `;

        contenedor1.innerHTML = `${acum}`;
        box.appendChild(contenedor1);

      });

      box.querySelectorAll('.checkthis').forEach((checkbox) =>
        checkbox.addEventListener('click', (e) => {
          array.push(e.target.id)
          console.log(array)
        }))
        sectionElem.querySelector('#checkall').addEventListener('click',() => {
          all.push(dataReq)
          console.log(all);
        })
    })
    .catch((err) => console.log('error', err));

  const continuar = sectionElem.querySelector('#continuar');
  continuar.addEventListener('click', (e) => {
    console.log('t', e.target)
    fn(array);
  });

  return sectionElem;
};

