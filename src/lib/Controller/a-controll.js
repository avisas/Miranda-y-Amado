import {
  signInGoogle,
  signInEmail,
  signOut,
  currentUser,
} from '../Model/firebase-auth.js';
import { createUser } from '../Model/firebase-db.js';

export const signIn = (e) => {
  e.preventDefault();
  const inputPassword = document.querySelector('#input-password');
  const inputMail = document.querySelector('#input-mail');
  const msInfoAlerta = document.querySelector('#ms-info-alert');
  const iconMail = document.querySelector('#icon-mail');
  const iconPassword = document.querySelector('#icon-password');
  const btnIniciarRegistrar = document.querySelector('#btn-iniciar-registrar');

  if (btnIniciarRegistrar.dataset.action === 'login') {
    signInEmail(inputMail.value, inputPassword.value)
      .then(() => {
        window.location.hash = '#/abogado';
      })
      .catch((error) => { // Para ver si devuelve un error
        switch (error.code) {
          case 'auth/invalid-email':
            inputPassword.classList.remove('info-alert');
            iconPassword.classList.remove('icon-alert');

            inputMail.classList.add('info-alert');
            iconMail.classList.add('icon-alert');

            msInfoAlerta.innerHTML = '**El formato del correo ingresado no es valido, verifica e intente de nuevo.';
            break;
          case 'auth/user-not-found':
            inputPassword.classList.remove('info-alert');
            iconPassword.classList.remove('icon-alert');

            inputMail.classList.add('info-alert');
            iconMail.classList.add('icon-alert');

            msInfoAlerta.innerHTML = '**No hay usuario registrado con ese correo., verifica e intente de nuevo.';
            break;
          case 'auth/wrong-password':
            inputMail.classList.remove('info-alert');
            iconMail.classList.remove('icon-alert');

            inputPassword.classList.add('info-alert');
            iconPassword.classList.add('icon-alert');

            msInfoAlerta.innerHTML = '**La contraseña no es válida, verifica e intente de nuevo.';
            break;
          default:
            // console.log(error);
            break;
        }
      });
  }
};

export const signInWithGoogle = () => {
  signInGoogle()
    .then(() => {
      const user = currentUser();
      createUser(user.displayName, user.email, user.uid, user.photoURL);
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};

export const logOut = (e) => {
  e.preventDefault();
  signOut()
    .then(() => {
      window.location.hash = '#/signin';
    });
};
