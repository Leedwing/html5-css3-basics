# Partie 4 - Fonctionalités évoluées

## 1. Ajoutez des tableaux
- Un tableau s'insère avec la balise ```<table>```  et se définit ligne par ligne avec ```<tr>```.

- Chaque ligne comporte des cellules ```<td>```  (cellules normales) ou ```<th>```  (cellules d'en-tête).

- Le titre du tableau se définit avec ```<caption>```  .

- On peut ajouter une bordure aux cellules du tableau avec border  . Pour fusionner les bordures, on utilise la propriété CSS border-collapse  .

- Un tableau peut être divisé en trois sections : ```<thead>```  (en-tête), ```<tbody>```  (corps) et ```<tfoot>```  (bas du tableau). L'utilisation de ces balises n'est pas obligatoire.

- On peut fusionner des cellules horizontalement avec l'attribut colspan  ou verticalement avec rowspan  . Il faut indiquer combien de cellules doivent être fusionnées.