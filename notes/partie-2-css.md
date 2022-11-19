# Partie 2 - Mise en forme de page avec CSS

## 1. Mettre en place le CSS dans le code HTML 

### 1.2. Methodes
3 methodes
- importer un fichier .css se trouvant dans un dossier du projet (recommandé car peut commander plusieurs pages à la fois)
- écrire le css dans la balise ```<style>``` dans l'en-tête de la page html
- placer du css directement dans la balise concerné dans lattribut **style**

### 1.2. Div et Span
Balise structurantes juste pour pourvoir effectuer des operations sur des parties précises de la page HTML comme des config css.

### div
Se place n'importe où je pense

### span 
Se place dans une balise p -> paragraphe

### 1.3. Example CSS 

```
/* "*" peut être utilisé pour referencer toutes les balises de la page*/
* {

}

p {
    color: blue;
    font-weight: bold; /* commentaire */
}

/*Uniquement le paragraphe qui suit un <h1>"*/
h1 + p {
    color: red;
}

/*Uniquement <em> qui se trouvent dans un <h1>"*/
h1 em {
    color: green;
}

/*reference à l'attribut class grâce au symbole "."*/
.introduction {
    color: red;
}

/*reference à l'attribut id grâce au symbole "#"*/
#introduction { 
    color: yellowgreen;
}
```

## 2. Formatez du texte

```
h1 {
    font-weight: bold;
    text-decoration: underline;
    text-align: center;
  }
  

p {
  font-size: 1.3em; /* Taille - il est recommander d'utiliser les valeur en unité "em car elle est relative et s'adapte en fonction de la résolution de l'écran"*/
  font-family: "Sono", "Courier New", Courier, monospace; /*utiliser par ordre de priorité si la police existe ou*/
  font-style: italic;
  /*text-align: center;*/
}

.flottant {
    float: left;
}

.dessous {
    clear: both;
}
```

## 3. Ajouter de la couleur de fond

En CSS, si vous appliquez un style à une balise, toutes les balises qui se trouvent à l'intérieur prendront le même style.

C'est d'ailleurs de là que vient le nom « CSS », qui signifie « Cascading Style Sheets », c'est-à-dire « Feuilles de style en cascade ». 

```
body {
    /* background-color: rgb(168, 186, 163);
    background-image: url("../images/flottant.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top right; */ /*ne fonctionne que si background-repeat est defini*/
    background: url("../images/flottant.png") fixed no-repeat top right, url("../images/flottant.png") fixed no-repeat bottom right; /*il est possible d'aligner plusieur backgrounds*/
}

h1 {
    /*color: rgb(205, 26, 26);*/
    color: rgb(205, 26, 26, 0.5); /*4th parameter règle la transparance (opacity)*/
    /*opacity: 0.5;*/
}
```
