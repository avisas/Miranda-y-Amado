export const formCliente = () => {
  const template = `
  <div class="container">  
      
  <h1 style="text-align:center;color:green;"> 
      GeeksforGeeks 
  </h1>  

  <!-- Bootstrap table and table-striped classes -->
  <table class="table table-striped">  
      <thead>  
          <tr>  
              <th scope="col"># item</td>  
              <th scope="col">Subir</td>  
              <th scope="col">Eliminar</td>  
          </tr>  
      </thead>  
        
      <tbody>  
          <tr>  
              <th scope="row">1</td>  
              <td><i class="fas fa-upload"></i></td>  
              <td><span><i class="fas fa-trash-alt"></i></span></td>  
          </tr>  
          <tr>  
              <th scope="row">2</td>  
              <td><i class="fas fa-upload"></i></td>  
              <td><i class="fas fa-trash-alt"></i></td>    
          </tr>  
          <tr>  
              <th scope="row">3</td>  
              <td><i class="fas fa-upload"></i></td>  
              <td><i class="fas fa-trash-alt"></i></td>  
          </tr>  
      </tbody>  
  </table>  
</div>  

      
    `;
  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento

  return sectionElem;
};
