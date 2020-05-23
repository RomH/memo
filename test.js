const myAnchor = document.getElementById('bateau'); // Recherche d'un élément à partir d'une ID

const contents = document.getElementsByClassName('introduction'); // Recherche d'un élément à partir d'un nom de class
const firstContent = contents[0]; // Contenu dans un tableau car il peut y avoir plusieurs balises avec une même class

const articles = document.getElementsByTagName('article'); // Recherche d'un élément à partir d'un nom de balise
const thirdArticle = articles[2]; // Contenu dans un tableau car il peut y avoir plusieurs balises du même nom

const elt = document.querySelector("#bateau p.empty > a"); //Récupère le lien de la balise a, enfant du paragraphe p qui a pour class "empty", enfant lui même de la balise avec l'ID bateau