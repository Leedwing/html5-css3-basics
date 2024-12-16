# Javascript classes

## L'object Prototype

Soit l'object:

```js
const a = { a: 2 };
```

Si on inspecte l'object `a` dans la console du navigateur, on remarque qu'il a une propriété particulière [[Prototype]], qui elle aussi contient des propriétés et des métohodes. Cet object [[Prototype]] peut, lui aussi, être obtenu grâce à la methode `Object.getPrototypeOf()`.

Lorsqu'on veut une méthode ou une proprété d'un object, le moteur JavaScript va regarder si la méthode ou propriété en question existe sur l'object en question. Dane le cas contraire, il va regarder le prototype et ensuite le prototype du prototype, ainsi de suite jusqu'au bout de la chaîne (l'élément qui n'a pas de prototype: l'élément `Object`). C'est sur ce système qu'est basé l'héritage en JavaScript.

Enfait un prototype définit les attributs et methodes d'un object. Nous pouvons définir nos propres prototype en utilisant le mot clé `class`.

Les prototypes sont the type `function`. Ceci peut être vérifié en exécutant `typeof <Object>`

## Classes
```js
class SuperEtudiant{
    _college; // propriété privée (par convention: peut toujours être accessible à l'extérieur de la classe)
    #age; // propriété privé. Il faut définir des getters et setters pour y accéder.

    constructor(firstname, lastname, age){
        this._firstname = firstname;
        this._lastname = lastname;
        this.#age = age;
    }

    get age(){
        return this.#age
    }


    set college(college){
        this._college = college;
    }

    get college(){
        return this._college;
    }
}

const superEtudiant = new SuperEtudiant("Mac", "Jugal", 30);
console.log(superEtudiant);
```

Héritage
```js
class Etudiant extends SuperEtudiant{
    _matricule;

    constructor(firstname, lastname, age){
        super(firstname, lastname, age)
    }

    get matricule(){
        return this._matricule;
    }

    set matricule(matricule){
        this._matricule = matricule;
    }
}

const etudiant = new Etudiant("Audrey", "Nanie", 28);
console.log(etudiant);
console.log(etudiant.age);
etudiant.matricule = 12345;
console.log(etudiant.matricule);
```
