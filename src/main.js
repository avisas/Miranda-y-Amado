import { viewTemplate } from './lib/Router/router.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAmv_M3kRMx2IvtnnWybjbPtnq851JdmOk',
  authDomain: 'talent-fest-miranda-y-amado.firebaseapp.com',
  databaseURL: 'https://talent-fest-miranda-y-amado.firebaseio.com',
  projectId: 'talent-fest-miranda-y-amado',
  storageBucket: 'talent-fest-miranda-y-amado.appspot.com',
  messagingSenderId: '435591039116',
  appId: '1:435591039116:web:6fdc91f1f485120080d3a9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const init = () => {
  viewTemplate(window.location.hash);
  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
};

window.addEventListener('load', init);
