import {
  verRequerimientos
} from '../../Model/firebase-db.js'
import {
  fn
} from './form.js'

let all = [];
let array = [];
export const dueVendedor = () => {
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


<div id="page-content">
  <div class="container text-center">

        <div class="texto_uno p-2 mw-80 mb-3">
          <p class="text-white mb-0 ">DUE DILIGENCE PARA VENDEDOR</p>
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
                  <th class="bg-white font-weight-normal text-dark">DOCUMENTO</th>
                  </tr>
                </thead>
                <tbody class="table-hover" id ="contenedor">
                </tbody>
              </table>
  

            <div>
               <a href="#/requerimiento"> <button> Volver </button> </a>
               <a href="#/confirmacion-requerimientos"> <button id="continuar"> Continuar </button> </a> 

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
    <small>Copyright M Y A</small>
  </div>
</footer>
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

  verRequerimientos('requerimientos', 'DUE DILIGENCE DE VENDEDOR')
    .then(docs => {
      const dataReq = docs.data().requerimientos;
      dataReq.forEach(doc => {
        const contenedor1 = document.createElement('tr');
        let acum = '';
        acum += `
                  <td class="text-center px-3">
                    <input type="checkbox" value="${doc.value}" class="checkthis" id="${doc.value}" />
                  </td>
                  <td class="text-left">
                    <p class="mb-0 px-2 font-weight-normal">${doc.value}</p>
                  </td>
                `;
        contenedor1.innerHTML = `${acum}`;

        box.appendChild(contenedor1);
      });
      box.querySelectorAll('.checkthis').forEach((checkbox) => {
        checkbox.addEventListener('click', (e) => {
          array.push(e.target.id)
        });
        sectionElem.querySelector('#checkall').addEventListener('click',() => {
          all.push(dataReq)
          console.log(all);
        })
      })

    })
    .catch((err) => console.log('error', err));

    const continuar = sectionElem.querySelector('#continuar');
    continuar.addEventListener('click', ()=>{
      fn(array);
    });

  return sectionElem;
};
