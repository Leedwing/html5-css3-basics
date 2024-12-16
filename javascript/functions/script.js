// Si une fonction est déclarée sur un objet alors 'this' aura la valeur de l'objet.
const a = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log(a.func()) // '42'

// L'opérateur this est un opérateur particulier que l'on peut utiliser dans une fonction.
// La valeur de cet opérateur dépendra de la façon dont une fonction est appelée.
function maFonction() {
    console.log(this);
}
maFonction(); // 'this' sera l'objet global (window dans le cas du navigateur)
maFonction.call(3); // 'this' sera l'object courant, qui est 3


// Les fonction fléchées ont comme particularité de ne pas posséder de valeur 'this'
const hello = () => {
    console.log(this)
}
hello() // 'this' sera l'objet global (window dans le cas du navigateur)
hello.call(3) // 'this' sera toujours l'objet global

// Le mot clé 'this' est important et peut être utilisé de façon diverse
// e.g. dans du JavaScript côté navigateur, quand on clique sur un bouton, 'this' fera
// référence au bouton sur lequel on a cliqué.

// Fonction callback
// E.g. 1
const isPair = function(a, cb){
    if (a % 2 === 0) {
        cb(a)
    }
}

isPair(4, function (n) {
    console.log('Mon nombre est pair: ', n);
    
})

// E.g. 2
console.log('Start');

setTimeout(function () {
    console.log('Callback executed after 2 seconds');
}, 2000);

console.log('End');
