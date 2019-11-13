export default () => {
    const user = firebase.auth().currentUser;
    const div = document.createElement('div');
    let template = '';
    if(user.email === 'abogado@gmail.com'|| user.email === 'cliente@gmail.com'){
        template =  `
        <p class="hide" id="ab">Soy abogado</p>
        <p class="hide"  id="cl">Soy cliente</p>
        `;
        div.innerHTML = template;
        const pa = div.querySelector('#ab');
        const pc = div.querySelector('#cl');
        if(user.email === 'abogado@gmail.com'){
            pa.classList.remove('hide');
        }else{
            pc.classList.remove('hide');
        }
    }
  return div;
}
