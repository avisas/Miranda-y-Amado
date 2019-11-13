
export default () => {
  const template = `
  <div id="actualizar">
  
  </div>

  <div>
  <div>
  <a href="#/requerimiento" class="button-req">Crear Requerimiento</a>
  </div>
    <p class="last-req"><strong>Revisa tus últimos Requerimientos</strong></p>
    <ul>
      <li class="list">
        <a class="list-req" href="#clienteprueba">Proyecto A</a>
      </li>
      <li class="list">
        <a class="list-req" href="#proyecto B">Proyecto B</a>
      </li>
      <li class="list">
        <a class="list-req" href="#proyecto C">Proyecto C</a>
      </li>
    </ul>
  </div>
 
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
  <div class="container text-center">
    <small>Copyright &copy; Your Website</small>
  </div>
</footer>
    `;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

    // const getRequiremnts = (id) => {
  //   const req = firebase.firestore().collection('caso 1').doc(id).get();
  //   console.log(req);
  // }
  // getRequiremnts('Relacion de inmuebles');
  // const getRequiremnts = () => {
  //   const req = firebase.firestore().collection('AllCases').doc('cada caso').get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("Document data:", doc);
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     }).catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });
  // }
 const  getReq = () => {
  firebase.firestore().collection('AllCases').doc('cada caso').collection('Apelacion')
    .onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        //comment.push({ idPost, id: doc.id, ...doc.data() });
      });
      // pintarComentario(comment);
    });
};
getReq()
return sectionElem;
};
// var name, email, photoUrl, uid, emailVerified;
// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }
 
