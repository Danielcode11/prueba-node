function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    const mes = fechaActual.getMonth();
    const dia = fechaActual.getDate();
    const mesNacimiento = fechaNacimientoObj.getMonth();
    const diaNacimiento = fechaNacimientoObj.getDate();
    if (mes < mesNacimiento || (mes === mesNacimiento && dia < diaNacimiento)) {
      edad--;
    }
    return edad;
  }
  
  module.exports = {
    calcularEdad
  }
  