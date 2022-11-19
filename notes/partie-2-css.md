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

See [style.css](../styles/style.css)

See [inde.html](../index.html)

## 2. Formatez du texte

See [style-text.css](../styles/style-text.css)

See [style-text.html](../style-text.html)

## 3. Ajouter de la couleur de fond

En CSS, si vous appliquez un style à une balise, toutes les balises qui se trouvent à l'intérieur prendront le même style.

C'est d'ailleurs de là que vient le nom « CSS », qui signifie « Cascading Style Sheets », c'est-à-dire « Feuilles de style en cascade ». 

See [colors.css](../styles/colors.css)

See [colors.html](../colors.html)


## 4. Bordures et ombres

See [bordures.css](../styles/bordures.css)

See [bordures.html](../bordures.html)


## 5. Créer de apparances dynamiques
- En CSS, on peut modifier l'apparence de certaines sections dynamiquement, après le chargement de la page, lorsque certains évènements se produisent. On utilise pour cela les pseudo-formats.

- Le pseudo-format :hover  permet de changer l'apparence au survol (par exemple : a:hover  pour modifier l'apparence des liens lorsque la souris pointe dessus).

- Le pseudo-format :active  modifie l'apparence des liens au moment du clic, :visited  lorsqu'un lien a déjà été visité.

- Le pseudo-format :focus  permet de modifier l'apparence d'un élément sélectionné.

See [pseudo-format.css](../styles/pseudo-format.css)

See [pseudo-format.html](../pseudo-format.html)