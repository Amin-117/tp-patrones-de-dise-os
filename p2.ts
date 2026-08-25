abstract class EquipoBase {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  abstract detalles(): string;
}

class Notebook extends EquipoBase {
  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends EquipoBase {
  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoBase {
  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): EquipoBase {
    if (tipo === "Notebook") {
      return new Notebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    }
    
    throw new Error("Tipo de equipo no soportado");
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());