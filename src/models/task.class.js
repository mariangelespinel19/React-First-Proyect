// Especificaremos los componentes de la tarea, nombre, descripción, completada, nivel de urgencia
// componente CLASE
import { LEVELS } from "./levels.enum"

export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}