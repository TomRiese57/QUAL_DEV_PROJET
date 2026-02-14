// controller/TodoList.ts

// Implementation de la classe TodoList
export class TodoList {
    // Attribut de la classe TodoList
    private list: Map<string, number>;

    // Constructeur de la classe TodoList
    public constructor() {
        this.list = new Map<string, number>();
    }

    // Ajouter une tâche à la liste de tâches
    public ajoutTache(tache : string): void {
        this.list.set(tache, 0);
    }

    // Supprimer une tâche de la liste de tâches
    public suprimerTache(tache : string) {
        if(this.list.has(tache)){
            this.list.delete(tache);
        }
        else{
            throw new Error("Tâche non trouvée");
        }
        
    }

    // Marquer une tâche comme terminée
    public finiTache(tache : string) {
        if(this.list.has(tache)){
            this.list.set(tache, 1);
        }
        else{
            throw new Error("Tâche non trouvée");
        }
        
    }
}