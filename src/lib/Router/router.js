import { components } from './components.js';

export const viewTemplate = (routes) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routes) {
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/abogado':
      container.appendChild(components.abogado());
      break;
    default:
      container.appendChild(components.login());
      break;
    case '#/requerimiento':
      container.appendChild(components.requerimiento());
      break;
    case '#/dueComprador':
      container.appendChild(components.dueComprador());
      break;
    case '#/dueVendedor':
      container.appendChild(components.dueVendedor());
      break;
    case '#/confirmacion-requerimientos':
      container.appendChild(components.form());
      break;
    case '#/formAbogado':
      container.appendChild(components.formAbogado());
      break;
    case '#/formCliente':
      container.appendChild(components.formCliente());
      break;
  }
};

