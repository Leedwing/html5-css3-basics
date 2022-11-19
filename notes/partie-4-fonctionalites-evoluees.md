# Partie 4 - Fonctionalités évoluées

## 1. Ajoutez des tableaux
- Un tableau s'insère avec la balise ```<table>```  et se définit ligne par ligne avec ```<tr>```.

- Chaque ligne comporte des cellules ```<td>```  (cellules normales) ou ```<th>```  (cellules d'en-tête).

- Le titre du tableau se définit avec ```<caption>```  .

- On peut ajouter une bordure aux cellules du tableau avec border  . Pour fusionner les bordures, on utilise la propriété CSS border-collapse  .

- Un tableau peut être divisé en trois sections : ```<thead>```  (en-tête), ```<tbody>```  (corps) et ```<tfoot>```  (bas du tableau). L'utilisation de ces balises n'est pas obligatoire.

- On peut fusionner des cellules horizontalement avec l'attribut colspan  ou verticalement avec rowspan  . Il faut indiquer combien de cellules doivent être fusionnées.

See [tableaux.html](../tableaux.html)

See [tableaux.css](../styles/tableaux.css)


## 2. Créez des formulaires


See [formulaires.html](../formulaires.html)

See [formulaires.css](../styles/formulaires.css)


## 3. Enrichissez votre site avec de la vidéo et de l'audio
 Visitez [caniuse.com](https://caniuse.com/?search=format) pour savoir quel navigateur est capable de gérer quel format de media.

 Pour convertir les formats de video utilisez [miro video converter](https://miro-video-converter.en.uptodown.com/windows). Facile à utiliser et gratuit.

See [audio-video.html](../audio-video.html)

See [audio-video.css](../styles/audio-video.css)


### 3.1. Résumé
- Insérer de la musique ou de la vidéo n'était pas possible autrefois en HTML. Il fallait recourir à un plugin comme Flash.

- Depuis HTML5, les balises ```<audio>```  et ```<video>```  ont été introduites et permettent de jouer de la musique et des vidéos sans plugin..

- Il existe plusieurs formats audio et vidéo. Il faut notamment connaître :

    - pour l'audio : MP3 et Ogg Vorbis ;

    - pour la vidéo : H.264, Ogg Theora et WebM.

- Aucun format n'est reconnu par l'ensemble des navigateurs : il faut proposer différentes versions de sa musique ou de sa vidéo pour satisfaire tous les navigateurs.

- Il faut ajouter l'attribut **controls**  aux balises ```<audio>```  et ```<video>```  pour permettre au visiteur de lancer ou d'arrêter le média.

- **Ces balises ne sont pas conçues pour empêcher le téléchargement de la musique et de la vidéo. Vous ne pouvez pas protéger votre média contre la copie.**


## 4. Le responsive design avec les Media Queries
Le principe est simple: Il s'agit de charger des config CSS différentes en fonctions de certains critères comme la largeur de l'écran. Il y'a 2 façons de procéder:
- soit vous créez un fichier css spécial pour certaines tailles d'écrans
- soit vous utilisez un seul fichier css dans lequel vous indiquerez des différentes règles pour toutes les tailles décran

### 4.1. Les règles disponibles
Il existe de nombreuses règles permettant de construire des media queries. Je vous présente ici les principales :

- color  : gestion de la couleur (en bits/pixel) ;

- height  : hauteur de la zone d'affichage (fenêtre) ;

- width  : largeur de la zone d'affichage (fenêtre) ;

- device-height  : hauteur du périphérique ;

- device-width  : largeur du périphérique ;

- orientation  : orientation du périphérique (portrait ou paysage) ;

- media  : type d'écran de sortie. Quelques-unes des valeurs possibles :

    - screen  : écran « classique »,

    - handheld  : périphérique mobile,

    - print  : impression,

    - tv  : télévision,

    - projection  : projecteur,

    - all  : tous les types d'écrans.

On peut rajouter le préfixe **min-**  ou **max-**  devant la plupart de ces règles. Ainsi, **min-width**  signifie « largeur minimale », **max-height**  « hauteur maximale », etc.
La différence entre width  et device-width  se perçoit surtout sur les navigateurs mobiles des smartphones ; nous en reparlerons plus loin.

Les règles peuvent être combinées à l'aide des mots suivants :

**only**  : « uniquement » ;

**and**  : « et » ;

**not**  : « non ».


Pour cibler les smartphones, plutôt que d'utiliser max-width  , il peut être intéressant de recourir à max-device-width  : c'est la largeur du périphérique. Les périphériques mobiles ne dépassant pas 480 px de large, on pourra viser uniquement les navigateurs mobiles avec cette media query :

```
@media all and (max-device-width: 480px)
{
    /* Vos règles CSS pour les mobiles ici */
}
```

See [media-query.html](../media-query.html)

See [media-query.css](../styles/media-query.css)
