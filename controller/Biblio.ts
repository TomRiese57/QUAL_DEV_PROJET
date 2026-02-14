// controller/Biblio.ts

// Implementation de la classe Biblio
export class Biblio {
    // Attribut de la classe Biblio
    private biblio: string[];

    // Constructeur de la classe Biblio
    public constructor() {
        this.biblio = [];
    }

    // Ajouter un livre à la bibliothèque
    public ajoutLivre(livre : string): void {
        this.biblio.push(livre);
    }

    // Supprimer un livre de la bibliothèque
    public suprimerLivre(livre : string) {
        const index = this.biblio.indexOf(livre);
        if(index !== -1){
            this.biblio.splice(index, 1);
        }else{
            throw new Error("Livre non trouvé");
        }
    }

    // Afficher les livres de la bibliothèque
    public afficherLivres(): string[] {
        return this.biblio;
    }
}