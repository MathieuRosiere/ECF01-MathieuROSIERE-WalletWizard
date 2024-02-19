# ECF FRONT

## Launch App

- Ouvrir le terminal. Vérifier que le path est correct, sinon se déplacer des les fichiers avec la commande ```cd```.
- Une fois au bon endroit, toujours dans le terminal, rentrer la commande ```npm i``` pour installer les différents packages.
- Quand l'installation est terminée, on execute un ```npm run dev``` pour lancer l'application. il n'y a plus qu'a cliquer sur le lien qui apparaît dans le terminal.

## Logic

### Bases

Cette application permet de gérer un portefeuille.

- L'application s'ouvre sur une page d'accueil qui indique la balance actuelle du portefeuille.
- On peut naviguer dans l'application par un routeur, celui ci permet de se diriger soit vers la page d'accueil, les formulaires ou un historique des opérations effectuées par l'utilisateur. 
- L'intéraction avec l'app se fait grâce à des formulaires, dans lesquels on peut indiquer des retraits ou des dépôts.

---

### Store

- La majeure partie de la logique de l'application se trouve dans le store.
- On y trouve :
1. Les constantes qui sotckent les objets issus des formulaires.
2. Des computed qui gèrent toute la partie mathématiques de l'application. 
3. Les fonctions déclenchées par les submits des formulaires.

- Les data sont égalament stockées dans la local storage du navigateur.

---

### Display

- L'affichage de l'application est géré par des selects qui en fonction de leur value vont trigger des rendus conditionnels. ```v-if```

---