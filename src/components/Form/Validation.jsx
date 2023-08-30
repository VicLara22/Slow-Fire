
function Validation(value) {
  const errors = {};

  const regExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (!value.name) {
    errors.name = "El nombre es requerido";
  } 

  if (!value.lastName) {
    errors.lastName = "El apellido es requerido";
  }

  if (!value.phone) {
    errors.phone = "El télefono es requerido";
  }
  value
  if (!value.email) {
    errors.email = "El email es requerido";
  } 
  
  if (!regExp.test(value.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!value.location) {
    errors.location = "La localidad es requerida";
  }

  if (!value.asunto) {
    errors.asunto = "El asunto es requerido";
  }

  if (!value.message) {
    errors.message = "El mensaje es requerido";
  } else if (value.message?.length < 20) {
    errors.message = "El mensaje no puede tener menos de 20 caracteres";
  }

  return errors;
}

export default Validation;