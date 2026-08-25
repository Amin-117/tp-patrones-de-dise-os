interface Equipo {
  nombre: string;
  tipo: string;
  estado: string; 
}

class Inventario {
  private static instancia: Inventario;

  private equipos: Equipo[] = [];

  private constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const nuevoEquipo: Equipo = { nombre, tipo, estado };
    this.equipos.push(nuevoEquipo);
  }

  public listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");

console.log(inventario.listarEquipos());

const otroInventario = Inventario.obtenerInstancia();
console.log(inventario === otroInventario); 
