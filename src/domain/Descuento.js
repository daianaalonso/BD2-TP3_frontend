class Descuento {
  constructor(id, fechaInicio, fechaFin, porcentaje, tipo, descripcion) {
    this.id = id;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.porcentaje = porcentaje;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}

export default Descuento;
