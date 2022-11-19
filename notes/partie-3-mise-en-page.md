# Partie 3 - Mettez en page votre site

## 1. Structurer votre page
Avec une bonne mise en page de votre site (ceci est l'en-tête de la page, ceci est le menu, etc) votre code est bien organisé mais surtout votre page est bien reférencée sur les moteurs de recherche.

![](../images/page-structure.png)


## 2. Le modèle des boîtes

### 2.1. Les balises de type block et inline
**block** : _une balise de type block sur votre page web crée automatiquement un retour à la ligne avant et après._ Il suffit d'imaginer tout simplement un bloc. Votre page web sera en fait constituée d'une série de blocs les uns à la suite des autres. Mais vous verrez qu'en plus, il est possible de mettre un bloc à l'intérieur d'un autre, ce qui va augmenter considérablement nos possibilités pour créer le design de notre site ! On peut **modifier** la taile des blocks et les **espacer** les uns des autres grâce à des marge _margin_ (marge extérieure) et _padding_ (marge intérieure) ainsi que les disposer comme on veut.

Example: ```<p></p>, <div></div>```

Les blocks ont 
- une **largeur** width
- une **hauteur** hei
- par défaut un block occupe toute la largeur - on peut le voir en affichant le border ou un background color

**inline** : _une balise de type inline se trouve obligatoirement à l'intérieur d'une balise block._ Une balise inline ne crée pas de retour à la ligne, le texte qui se trouve à l'intérieur s'écrit donc à la suite du texte précédent, sur la même ligne (c'est pour cela que l'on parle de balise « en ligne »).

Example: ```<a></a>, <span></span>, <strong></strong>, <em></em>, <img/>```

See [block-inline.css](../styles/block-inline.css)

See [flexbox.html](../block-inline.html)


## 3. Mise en page avec Flexbox
Fonctionalité récente de CSS grâce à laquelle on va pouvoir créer des élements de la page comme des boîtes flexibles qu'on peut agencer les unes à côté des autres comme bon nous semble.

- Il existe plusieurs techniques pour positionner les blocs sur la page. Flexbox est la technique la plus récente et de loin la plus puissante, que je vous recommande d'utiliser.

- Le principe de Flexbox est d'avoir un conteneur, avec plusieurs éléments à l'intérieur. Avec **display: flex**; sur le conteneur, les éléments à l'intérieur sont agencés en mode Flexbox (horizontalement, par défaut).

- Flexbox peut gérer toutes les directions. Avec **flex-direction**  , on peut indiquer si les éléments sont agencés horizontalement (par défaut) ou verticalement. Cela définit ce qu'on appelle l'axe principal.

- L'alignement des éléments se fait sur l'axe principal avec **justify-content** , et sur l'axe secondaire avec **align-items**.

- Avec **flex-wrap**  , on peut autoriser les éléments à revenir à la ligne s'ils n'ont plus d'espace.

- S'il y a plusieurs lignes, on peut indiquer comment les lignes doivent se répartir entre elles avec **align-content**. 

- Chaque élément peut être réagencé en CSS avec **order** (pas besoin de toucher au code HTML !).

- Avec la super-propriété **flex**  , on peut autoriser nos éléments à occuper plus ou moins d'espace restant.

- Flexbox, c'est cool.


See [flexbox.css](../styles/flexbox.css)

See [flexbox.html](../flexbox.html)


## 4. Autres techniques de mise en page
A évité le max possible car Flexbox nous offre des outils plus modernes et puissants.

- Float: necessite du margin pour replacer les autres élements - pas très cool
- Display
    - block: l'élément se comportera comme un block et pourra être redimentioné ```<p> <div> <section>```
    - inline: les éléments seront alignés en inline ```<a> <em> <span>```
    - inline-block: élément alingné en inline mais pourra être redimentioné ```<select>, <input>```. Avec la proprété **vertical-align** on peut positioner un inline-block de facon appropriée
    - none: invisible. ```<head>```
- le **positionnement absolu** : il nous permet de placer un élément n'importe où sur la page (en haut à gauche, en bas à droite, tout au centre, etc.); 
    - _l'élément se déplace avec la page_

- le **positionnement fixe** : identique au positionnement absolu mais, cette fois, l'élément reste toujours visible, même si on descend plus bas dans la page. C'est un peu le même principe que background-attachment: fixed;  (si vous vous en souvenez encore);
    - _l'élément ne se déplace pas avec la page et est toujours visible_

- le **positionnement relatif** : permet de décaler l'élément par rapport à sa position normale.
    - _agit un peu comme du margin_

See [openclassroom.com](https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/1606402-decouvrez-dautres-techniques-de-mise-en-page)


## 5. Créer un site web pas à pas
Le bouton ne devrait-il pas se placer en bas à droite de la page ?

Non, souvenez-vous ce que je vous avais dit : si un bloc est positionné en absolu dans un autre bloc lui-même positionné en absolu, fixe ou relatif, alors il se positionne à l'intérieur de ce bloc.
Notre bannière est positionnée en relatif (sans décalage). Comme le bouton est positionné en absolu à l'intérieur, il se place donc en bas à droite de la bannière !

C'est une technique particulièrement utile et puissante dans la réalisation d'un design, souvenez-vous-en !

See [index.html](../index.html)

See [index.css](../styles/style.css)