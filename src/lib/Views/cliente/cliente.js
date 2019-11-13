{/* <a href="mailto:scahuantico@gmail.com?body=Estimada%20te%20enviamos%20el%20siguiente%20link&subject=Miranda%20esta%20revisando%20tu%20caso"> Enviar email</a>
<progress value="0" id="uploader" max="100"></progress>
<input type="file" value="upload" id="fileButton">
<button id="download">Descargar</button>
<a href="https://firebasestorage.googleapis.com/v0/b/talent-fest-miranda-y-amado.appspot.com/o/1%2Fdl.png?alt=media&token=82fac344-37a3-4cae-b37e-ee57e40fb77f" target="_blank" download >des</a>
<div id="mensaje"> </div> */}

// const uploader = sectionElem.querySelector('#uploader');
// const fileButton = sectionElem.querySelector('#fileButton');
// fileButton.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   const storageRef = firebase.storage().ref(`1/${file.name}`);
//   const task = storageRef.put(file);

//   task.on('state_changed',
//     (snapshot) => {
//       const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 1000;
//       uploader.value = percentage;
//     });
// });
// const storage = firebase.storage();
// const btnDownload = sectionElem.querySelector('#download');
// const imgRef = storage.ref('1/dl.png');
// btnDownload.addEventListener('click', () => {
//   imgRef.getDownloadURL().then((url) => {
//     console.log(url);
//     const anchor = document.createElement('a');
//     anchor.href = url;
//     div.setAttribute('download',true);
//     btnDownload.appendChild(div);
//   })
// });