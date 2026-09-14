// ==========================================
// 1. DEFINICIÓN DE TIPOS E INTERFACES
// ==========================================

type Prioridad = 'Alta' | 'Media' | 'Baja';

interface ITarea {
    readonly id: number;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
    descripcion?: string;
}

// ==========================================
// 2. IMPLEMENTACIÓN DE LA CLASE
// ==========================================

class GestorTareas {
    private tareas: ITarea[];

    constructor() {
        this.tareas = [];
    }

    public agregarTarea(tarea: ITarea): void {
        this.tareas.push(tarea);
    }

    public completarTarea(id: number): void {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }

    public listarPendientes(): void {
        console.log("=== TAREAS PENDIENTES ===");
        this.tareas
            .filter(t => !t.completada)
            .forEach(t => {
                const desc = t.descripcion ? ` - Desc: ${t.descripcion}` : "";
                console.log(`[ID: ${t.id}] ${t.titulo} (${t.prioridad})${desc}`);
            });
    }
}

// ==========================================
// 3. PRUEBA DE EJECUCIÓN (Lógica CLI)
// ==========================================
console.log("Ejecutando indes.js");
const gestor = new GestorTareas();
gestor.agregarTarea({ id: 1, titulo: "Configurar tsconfig.json", prioridad: "Alta", completada: false });
gestor.agregarTarea({ id: 2, titulo: "Crear modelos", prioridad: "Media", completada: false, descripcion: "Definir esquemas iniciales" });

gestor.listarPendientes();
gestor.completarTarea(1);
gestor.listarPendientes();