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

