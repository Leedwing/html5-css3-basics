# Les fonctions

## Fonctions callback

C'est une fonction passée en paramètre d'une autre fonction. Elle sera géneralément exécutée sous certaines conditions, après que d'autres opérations soient terminées.

Exemple: nous pouvons écrire une fonction qui vérifie qu'un nombre est pair ou pas. La fonction peut prendre en paramètre le nombre en question et une fonction callback qui sera exécutée si et seulement si le nombre est pair.

```js
const isPair = function (a, cb) {
  if (a % 2 === 0) {
    cb(a);
  }
};

isPair(4, function (n) {
  console.log("Mon nombre est pair: ", n);
});
```

### Why do we need callbacks?

1. Operations asynchrones
   Parce que JavaScript est single-threaded, les callbacks sont utilisés pour éviter qu'une longue opération bloque l'éxécution d'autres opérations.

Example: si une opération doit être exécuté après un timer de 2 secondes, on peut passer cette opération en callback, permettant de libérer le thread qui exécutera d'autres opération. Une fois que les 5 secondes seront écoulées le callback sera exécuté à son tour

```js
console.log("Start");

setTimeout(function () {
  console.log("Callback executed after 2 seconds");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Callback executed after 2 seconds
```

2. Gestions d'évènements

```js
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

3. Modularité et Réutilisabilité - Généricité
Les callbacks permettent de rendre des fonctions plus génériques en déférant des comportements/opérations spécifiques, à un callback
