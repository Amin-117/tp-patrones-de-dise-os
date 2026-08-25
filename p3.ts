interface Observador {
  notificar(nombre: string, nuevoEstado: string): void;
}

class Soporte implements Observador {
  notificar(nombre: string, nuevoEstado: string): void {
    console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${nuevoEstado}.`);
  }
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.notificar(this.nombre, this.estado);
    }
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");