import { signIn } from '../Controller/a-controll.js';

export default () => {
  const template = `
  <form>
  <div class="container h-100">
  <div class="d-flex justify-content-center h-100">
      <div class="user_card">
          <div class="d-flex justify-content-center">
              <div>
                  <img src="./lib/Img/Tipográfico blanco sin fondo.png" class="brand_logo" alt="Logo" />
              </div>
          </div>
          <h4 class="titleproyect text-center">Plataforma de Requerimientos de Información</h4>
          <br />
          <div class="d-flex justify-content-center form_container">
              <div class="col-md-10">
                  <div class="input-group mb-4">
                      <div class="input-group-append">
                          <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="email" id="input-mail" class="form-control input_user" placeholder="ejemplo@ejemplo.com">
                  </div>
                  <div class="input-group mb-2">
                      <div class="input-group-append">
                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input type="password" id="input-password" class="form-control input_pass" placeholder="Escribe tu contraseña" >
                      <span id="icon-clave" class="icon-input icon-clave"></span>
                      <span id="icon-password" class="icon-input"></span>
                  </div>

              </div>
          </div>
          <div class="d-flex justify-content-center mt-3 login_container">
              <button class="btn login_btn font-weight-bold mx-4" id="btn-iniciar-registrar" data-action ='login'>INGRESAR</button>
          </div>
      </div>
  </div>
</div>
</form>
`;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex gradiente');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  const inputPassword = sectionElem.querySelector('#input-password');
  const btnIniciarRegistrar = sectionElem.querySelector('#btn-iniciar-registrar');
  const btnMostrarClave = sectionElem.querySelector('#icon-clave');

  let claveOculta = 0;

  btnIniciarRegistrar.addEventListener('click', signIn);

  btnMostrarClave.addEventListener('click', () => {
    if (claveOculta === 0) {
      inputPassword.setAttribute('type', 'text');
      claveOculta = 1;
      btnMostrarClave.classList.add('mostrar');
    } else {
      inputPassword.setAttribute('type', 'password');
      claveOculta = 0;
      btnMostrarClave.classList.remove('mostrar');
    }
  });
  return sectionElem;
};
