## Langage utilisé

Le langage utilisé dans ce projet est le TypeScript fonctionnant avec Deno

## Installtion de Deno

Suivre les indications selon votre OS sur : https://docs.deno.com/runtime/getting_started/installation/

## Structure

le projet ce défini par deux dossiers

```
controller/
    Biblio.ts -> Classe Biblio
    TodoList.ts -> classe TotoList
test/
    BilbioTest.ts -> Fichier de test pour la classe Biblio
    TodoListTest.ts -> Fichier de test pour la classe TodoList
```

## Execution des tests avec les scripts suivant

```
deno test test/BiblioTest.ts
deno test test/TodoListTest.ts
```