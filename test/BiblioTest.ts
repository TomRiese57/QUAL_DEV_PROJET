// test/BiblioTest.ts

// Importation des modules nécessaires pour les tests
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { Biblio } from "../controller/Biblio.ts";

// Test pour la méthode ajoutLivre de la classe Biblio
Deno.test("Test ajoutLivre", () => {
    const biblio = new Biblio();
    biblio.ajoutLivre("Le Petit Prince");
    assertEquals(biblio["biblio"].includes("Le Petit Prince"), true);
})

// Test pour la méthode suprimerLivre de la classe Biblio
Deno.test("Test suprimerLivre", () => {
    const biblio = new Biblio();
    biblio.ajoutLivre("Le Petit Prince");
    biblio.suprimerLivre("Le Petit Prince");
    assertEquals(biblio["biblio"].includes("Le Petit Prince"), false);
})

// Test pour la méthode suprimerLivre de la classe Biblio lorsque le livre n'est pas trouvé
Deno.test("Test suprimerLivre non trouvé", () => {
    const biblio = new Biblio();
    try {
        biblio.suprimerLivre("Le Petit Prince");
    } catch(e) {
        assertEquals(e instanceof Error, true);
    }
})

// Test pour la méthode afficherLivres de la classe Biblio
Deno.test("Test afficherLivres", () => {
    const biblio = new Biblio();
    biblio.ajoutLivre("Le Petit Prince");
    biblio.ajoutLivre("Harry Potter");
    assertEquals(biblio.afficherLivres(), ["Le Petit Prince", "Harry Potter"]);
})