class Pokemon {
  constructor(id, nombre, altura, habilidad, imagen, frase) {
    this.id = id;
    this.nombre = nombre;
    this.altura = altura;
    this.habilidad = habilidad;
    this.imagen = imagen;
    this.frase = frase;
  }
  getId() { return this.id; }
  setId(valor) { this.id = valor; }
  getNombre() { return this.nombre; }
  setNombre(valor) { this.nombre = valor; }
  getAltura() { return this.altura; }
  setAltura(valor) { this.altura = valor; }
  getHabilidad() { return this.habilidad; }
  setHabilidad(valor) { this.habilidad = valor; }
  getImagen() { return this.imagen; }
  setImagen(valor) { this.imagen = valor; }
  getFrase() { return this.frase; }
  setFrase(valor) { this.frase = valor; }
}
module.exports = Pokemon; 