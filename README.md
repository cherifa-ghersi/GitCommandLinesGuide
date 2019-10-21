# Cheat sheet Git 

Sommaire

[Introduction](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#Introduction)

[Historique](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#historique)

[Configuration](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#configuration)

[Création d'un repository](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#creation)

[Modification](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#modif)

    Ajout  

    Validation

    Publication

    Récuperation

    Annulation

[Branches et tags](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#branches&tags)

[Synchonisation](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#Synchonisation)


[Alias](https://github.com/cherifa-ghersi/GitCommandLinesGuide/blob/master/README.md#alias)

### Introduction
 système de gestion de versions décentralisée
 

![](/src/assets/gitCommandes.gif)

### Historique
![](/src/assets/gitHistorique.gif)

### Configuration

|  commande  | Utilité  |
| ------------- | ------------- |
| $ git config --global user.name "nom prenom" | Configuration initiale du nom et prénom de l'utilisateur |
| $ git config --global user.email "nom.prenom@email.com"   |Configuration initiale de l'email de l'utilisateur  |
| $ git config --global color.ui true, false ou  always  | Configuration optionnelle de la couleur de sortie dans la console  |
| $ git config list | Lister de toute les configurations  |
| $ git config --help | Lister de toute les commande quand peut utilisé avec git config |
### Création d'un repository

|  commande  | Utilité  |
| ------------- | ------------- |
| $ git init nom_repository| Initialisation d'un nouveau dépot dans le repertoire ou on se trouve |

  Aprés avoir initialisé le dépôt sur notre répertoire de travail, il faut ajouter nous modification à notre index avec  "$ git add .", l'enregistrer sur le repository local "$ git commit -m 'message à sauvgarder'" et ensuite l'envoyer sur le repository distant "$git push ".

|  commande  | Utilité  |
| ------------- | ------------- |
| $ git clone url_repository | Copié un repository distant |

Aprés avoir copié le repository disatant il faut se mettre sur le repertoire crée "cd nom_depot"

### Modification

### Branches&tags

### Synchonisation

### Alias

