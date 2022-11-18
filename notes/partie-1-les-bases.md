# Partie 1 - Découvrez les bases de HTML5

## 1. Découvrez le fonctionnement des sites web
Le langage HTML a été inventé par un certain Tim Berners-Lee en 1991.  Il a créé le World Wide Web Consortium (W3C), qui définit les nouvelles versions des langages liés au Web. Il a par ailleurs créé plus récemment la World Wide Web Foundation, qui analyse et suit l'évolution du Web.

Internet n'est pas le Web. Internet comprend:
- le Web
- les e-mails
- la messagerie instatanée
- etc.

*HTML* et *CSS* sont deux « langues » qu'il faut savoir parler pour créer des sites web. C'est le navigateur web qui fera la traduction entre ces langages informatiques et ce que vous verrez s'afficher à l'écran.

### 1.1. Les rôles de HTML et CSS
_HTML_ (HyperText Markup Language) : il a fait son apparition dès 1991 lors du lancement du Web. **Son rôle est de gérer et organiser le contenu.** C'est donc en HTML que vous écrirez ce qui doit être affiché sur la page : du texte, des liens, des images… Vous direz par exemple : « Ceci est mon titre, ceci est mon menu, voici le texte principal de la page, voici une image à afficher, etc. » ;

_CSS_ (Cascading Style Sheets, aussi appelées feuilles de style) : **le rôle du CSS est de gérer l'apparence de la page web** (agencement, positionnement, décoration, couleurs, taille du texte…). Ce langage est venu compléter le HTML en 1996.

### 1.2. Les outils
- HTML5
- CSS3
- Editeur de text
- Navigateur

Le célèbre site [caniuse.com](caniuse.com) tient à jour une liste des fonctionnalités prises en charge par les différentes versions de chaque navigateur


### 1.3. Résumé
- Le Web a été inventé par Tim Berners-Lee au début des années 1990.

- Pour créer des sites web, on utilise deux langages informatiques :

    - HTML : permet d'écrire et organiser le contenu de la page (paragraphes, titres…) ;

    - CSS : permet de mettre en forme la page (couleur, taille…).

- Il y a eu plusieurs versions des langages HTML et CSS. Les dernières versions sont HTML5 et CSS3.

- Le navigateur web est un programme qui permet d'afficher des sites web. Il lit les langages HTML et CSS pour savoir ce qu'il doit afficher.

- Il existe de nombreux navigateurs web différents : Google Chrome, Mozilla Firefox, Internet - Explorer, Safari, Opera… Chacun affiche un site web de manière légèrement différente des autres navigateurs.

- Dans ce cours, nous allons apprendre à utiliser les langages HTML et CSS. Nous travaillerons dans un programme appelé « éditeur de texte » (Sublime Text, Notepad++, jEdit, vim…).

<br/>
<br/>

## 2. Créez votre première page web en HTML

### 2.1. Structure de base d'une page HTML5

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Titre</title>
    </head>

    <body>
    
    </body>
</html>
```

### Le doctype
```
<!DOCTYPE html>
```
La toute première ligne s'appelle le doctype. Elle est indispensable car c'est elle qui indique qu'il s'agit bien d'une page web HTML.

### L'en-tête (head)
Cette section donne quelques informations générales sur la page, comme son titre, l'encodage

### L'encodage
```
<meta charset="utf-8" />
```
Sans rentrer dans les détails, car cela pourrait vite devenir compliqué, l'encodage indique la façon dont le fichier est enregistré. C'est lui qui détermine comment les caractères spéciaux vont s'afficher (accents, idéogrammes chinois et japonais, caractères arabes, etc.).

### 2.2. Résumé
- On utilise l'éditeur de texte (Sublime Text, Notepad++, jEdit, vim…) pour créer un fichier ayant l'extension .html  (par exemple : test.html  ). Ce sera notre page web.

- Ce fichier peut être ouvert dans le navigateur web simplement en faisant un double-clic dessus.

- À l'intérieur du fichier, nous écrirons le contenu de notre page, accompagné de balises HTML.

- Les balises peuvent avoir plusieurs formes :

```<balise> </balise>```  : elles s'ouvrent et se ferment pour délimiter le contenu (début et fin d'un titre, par exemple) ;

```<balise />```  : balises orphelines (on ne les insère qu'en un seul exemplaire), elles permettent d'insérer un élément à un endroit précis (par exemple une image).

- - Les balises sont parfois accompagnées d'attributs pour donner des indications supplémentaires (exemple : ```<image nom="photo.jpg" />```  ).

Une page web est constituée de deux sections principales : un en-tête ( ```<head>```  ) et un corps ( ```<body>```  ).

- On peut afficher le code source de n'importe quelle page web en faisant un clic droit puis en sélectionnant Afficher le code source de la page  .


## 3. Organiser le texte
```
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>
<p> <!--indique que le texte est important-->
<em> <!--indique que le texte est important et est mis en italique-->
<strong> <!--indique que le texte est important et est mis en gras-->
<mark> <!--marque le texte en jaune-->
```
