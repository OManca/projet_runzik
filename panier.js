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
let prixCasque = document.querySelector('#prixducasque')
let nomArticle = ['Casque'];
let prixDuCasque = ['189,00€'];

monBouton.addEventListener('click', clickPanier)
function clickPanier (event){
  nombreArticle++;
  recepteur.innerHTML = nombreArticle;
  boite.innerHTML = nombreArticle;
  nomArticle.push['Casque'];  
  articleCasque.innerHTML = nomArticle;
  prixCasque.innerHTML = prixDuCasque;
  if (nombreArticle >=1){
    nombreArticle --;
  }
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



