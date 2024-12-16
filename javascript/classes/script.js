console.log('Les classes');

const a = { a: 2 };
console.log(a);
console.log(Object.getPrototypeOf(a));
const str = "test";
console.log(Object.getPrototypeOf(str));

// class Student {
//     ecole = "LYCLABAF";
//     notes = [];

//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this._notes = [];
//     }

//     set notes(v) {
//         if (Array.isArray(v)) {
//             //this.notes = v; - this will create stack overflow when calling student1.notes = 20 for e.g.
//             this._notes = v; // solve the above issue
//         }
//     }

//     canPass(){
//         return this._notes >= Student.moyenne;
//     }

//     static moyenne = 10;
// }


class Student {
    // Declare and initialize the notes attribute as an empty array
    _notes = [];

    // Constructor to initialize the attributes
    constructor(name, age, grade) {
        this._name = name; // Student's name
        this._age = age;   // Student's age
        this._grade = grade; // Student's grade
    }

    // Getters and Setters for the 'name' attribute
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    // Getters and Setters for the 'age' attribute
    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Age must be a positive number');
        }
    }

    // Getters and Setters for the 'grade' attribute
    get grade() {
        return this._grade;
    }

    set grade(newGrade) {
        this._grade = newGrade;
    }

    // Getters and Setters for the 'notes' attribute
    get notes() {
        return this._notes;
    }

    set notes(newNotes) {
        if (Array.isArray(newNotes)) {
            this._notes = newNotes;
        } else {
            console.error('Notes must be an array');
        }
    }

    // Method to display student details
    displayDetails() {
        return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
    }

    // Method to check if the student is eligible to graduate (example logic)
    isEligibleToGraduate() {
        return this._grade >= 50 ? `${this._name} is eligible to graduate.` : `${this._name} is not eligible to graduate.`;
    }

    canPass(){
        return this._notes.reduce((a, b) => a + b) / this._notes.length >= Student.moyenne;
    }

    static moyenne = 14;
}

// Example usage
const student = new Student('Alice', 20, 55);

console.log(student.displayDetails()); // Output: Name: Alice, Age: 20, Grade: 55
console.log(student.isEligibleToGraduate()); // Output: Alice is eligible to graduate.

// Managing notes
student.notes = [12, 14, 11]; // Adding notes
console.log(student.notes); // Output:  [12, 14, 11]

student.notes = 10; // Invalid update
// Output: Notes must be an array

console.log(student.canPass());


console.log(student);



//  NOUVEAU EXAMPLE

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

const superEtudiant = new SuperEtudiant("Mac", "Jugal", 30);
console.log(superEtudiant);

const etudiant = new Etudiant("Audrey", "Nanie", 28);
console.log(etudiant);
console.log(etudiant.age);
etudiant.matricule = 12345;
console.log(etudiant.matricule);



