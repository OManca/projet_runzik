let modal = document.getElementById("monModal");

let panier = document.getElementById("panier_noir");

let span = document.getElementsByClassName("close")[0];

let nbre = document.querySelector("#A");
console.log(nbre);
 
panier.addEventListener('click', function (){
  modal.style.display = "block";
});



let afficheModul = 0;

  nbre.addEventListener('click', function(){
    if (afficheModul === 0) {
      modal.style.display = "none";      
      afficheModul--
    } else {
      modal.style.display = "block";
      afficheModul++
    }
  })

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let nombreArticle = 0;
let monBouton = document.querySelector('#panier_casque');
let recepteur = document.querySelector('#A');
let moins = document.querySelector('#moins');
let plus = document.querySelector('#plus');
let boite = document.querySelector ('#boite');
let articleCasque = document.querySelector('#casque_article');
let prixCasque = document.querySelector('#prix_casque')
let nomArticle = ['Casque', '189,00€'];

monBouton.addEventListener('click', clickPanier)
function clickPanier (event){
  nombreArticle++;
  recepteur.innerHTML = nombreArticle;
  boite.innerHTML = nombreArticle;
  nomArticle.push['Casque'];  
  articleCasque.innerHTML = nomArticle;


  };

plus.addEventListener('click', function (){
  nombreArticle++;
  recepteur.innerHTML = nombreArticle;
  boite.innerHTML = nombreArticle;
});

moins.addEventListener('click', function(){
  if (nombreArticle >=1){
    nombreArticle--;
    recepteur.innerHTML = nombreArticle;
    boite.innerHTML = nombreArticle;
  }
});





<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title> Notre Casque</title>
    <link rel="stylesheet" href="css/style_produits.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

</head>

<body>
    <nav>
        <ul id="nav-bar">
            <li>
                <a href="index.html"><img class=img-logos src="images/logo-runzik.jpg" alt='Logo Run' Zik'></a></li>
            <li>
                <a href="produits.html">Nos produits</a>
                <ul>
                    <li><a href="casque.html">Notre casque</a></li>
                    <li><a href="montre.html">Notre montre</a></li>
                    <li><a href="brassard.html">Notre brassard</a></li>
                </ul>
            </li>
            <li><a href="#">Notre technologie</a>
            </li>
            <li><a href="#">Infos</a>
                <ul>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="cgv.html">CGV</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </li>
            <li>
                <form class="form-inline">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <input type="image" src="loupe.png" class="loupe" placeholder="Search" aria-label="Search">
                </form>
            <li>
                <a href="inscription.html" class="inscription">Connexion/Inscription</a>
            </li>
            <li>
                <a href="#"><img src="images/drapeau_us.png" alt="Drapeau anglais" class="drapeau_us"></a>
            </li>
            <li>
                <a href="#"><p id="A"></p>
                <img src="images/panier.png" alt="Logo panier" id="panier_noir"></a>
  
                <div id="monModal" class="modal">

                  <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Votre panier</p>
                    <input id="plus" type="button" value="+">
                    <div id="boite"></div> 
                    <p id="casque_article"></p>
            
                    <input id ="moins" type="button" value="-" >
                  </div>
                
                </div>            
            </li>
            <ul>
            </ul>
            </li>
        </ul>
    </nav>


    #panier_noir {
  width: 20px;
  color: red;
}

#A {
  position: absolute;
  top: 13px;
  left: 21px;
  color: white;
  font-family: 'roboto';
}

#boite {
  border: 1px solid black;
  width: 50px;
  height: 30px;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 

}

.modal-content {
  background-color: #fefefe;
  margin: 50px auto; 
  margin-left: 550px;
  padding: 20px;
  border: 1px solid #F58C21;
  width: 50%; 
}

.close {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #F58C21;
  text-decoration: none;
  cursor: pointer;
}