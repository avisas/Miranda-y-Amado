import login from '../Views/login.js';
import abogado from '../Views/abogado/abogado.js';
import { requerimiento } from '../Views/abogado/requerimiento.js';
import { dueComprador } from '../Views/abogado/due-comprador.js'
import { dueVendedor } from '../Views/abogado/due-vendedor.js';
import { form } from '../Views/abogado/form.js'
import { formAbogado } from '../Views/abogado/form-abogado.js';
import { formCliente } from '../Views/cliente/form-cliente.js';

export const components = {
  login: login,
  abogado: abogado,
  requerimiento: requerimiento,
  dueComprador: dueComprador,
  dueVendedor: dueVendedor,
  form: form,
  formAbogado: formAbogado,
  formCliente: formCliente,
};
