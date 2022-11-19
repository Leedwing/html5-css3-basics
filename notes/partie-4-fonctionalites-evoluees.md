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