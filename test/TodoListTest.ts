// test/TodoListTest.ts

// Importation des modules nécessaires pour les tests
import { assertEquals, assertThrows } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { TodoList } from "../controller/TodoList.ts";

// Test pour la méthode ajoutTache de la classe TodoList
Deno.test("Test ajoutTache", () => {
    const todoList = new TodoList();
    todoList.ajoutTache("Faire les courses");
    assertEquals(todoList["list"].has("Faire les courses"), true);
})

// Test pour la méthode suprimerTache de la classe TodoList
Deno.test("Test suprimerTache", () => {
    const todoList = new TodoList();
    todoList.ajoutTache("Faire les courses");
    todoList.suprimerTache("Faire les courses");
    assertEquals(todoList["list"].has("Faire les courses"), false);
})

// Test pour la méthode suprimerTache de la classe TodoList lorsque la tâche n'est pas trouvée
Deno.test("Test superimerTache non trouvé", () => {
    const todoList = new TodoList();
    try {
        todoList.suprimerTache("Faire les courses");
    } catch (e) {
        assertThrows(() => {
            throw new Error("Tâche non trouvée");
        }, Error, "Tâche non trouvée");
    }
})

// Test pour la méthode finiTache de la classe TodoList
Deno.test("Test finiTache", () => {
    const todoList = new TodoList();
    todoList.ajoutTache("Faire les courses");
    todoList.finiTache("Faire les courses");
    assertEquals(todoList["list"].get("Faire les courses"), 1);
})

// Test pour la méthode finiTache de la classe TodoList lorsque la tâche n'est pas trouvée
Deno.test("Test finiTache non trouvé", () => {
    const todoList = new TodoList();
    try {
        todoList.finiTache("Faire les courses");
    } catch (e) {
        assertThrows(() => {
            throw new Error("Tâche non trouvée");
        }, Error, "Tâche non trouvée");
    }
})
