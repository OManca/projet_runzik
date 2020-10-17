
let monBouton = document.querySelector('#panier_casque');

// ==========================================
// fenêtre modale
// ==========================================
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("monModal");

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
// ===== fin : fenêtre modale ==========


let basket = document.querySelector('#basket');
let addHeadPhone = document.querySelector('#addHP');
let removeHeadPhone = document.querySelector('#removeHP');
// objet panier
const cart = {

  listeProduits: [],

  // obtenir le prix total des articles
  getTotalPrice(price) {
    return price * (product.quantity);
  },

  // obtenir la quantité total d'un article
  getTotalQtt(product) {
    return product.quantity;
  },

  //==========================================
  // ajouter un nouveau produit dans le panier
  // =========================================
  addProduct(product) {
    let indexProductExist = this.getIndexProductExist(product);
    
    // si le produit n'existe pas
    if (indexProductExist == -1) {
      //Ajout d'un nouveau produit
      this.listeProduits.push(product)
      // si le produit existe augmenter sa quantité
    } else {
      this.listeProduits[indexProductExist].quantity += product.quantity;

    }
  },
  // ===================================
  // supprimer un produit dans le panier
  // ===================================
  removeProduct(product) {
    let indexProductExist = this.getIndexProductExist(product);
    // si le produit n'existe pas, affiche un message d'erreur
    if (indexProductExist == -1) {
      alert("anomalie : impossible de supprimer un produit inexistant");
      return 0;
    } else {
      // si le nombre d'article et au moins 1,
      // diminuer le nombre d'articles
      if (nombreArticle >= 1) {
        nombreArticle--;
        recepteur.innerHTML = nombreArticle;
        boite.innerHTML = nombreArticle;
      }
      // si le nombre d'articles est 0,
      // retirer l'article de la liste
      if (nombreArticle == 0) {
        this.product
      }
    }

  },

  // ====================================================
  // obtenir les produits depuis le tableau listeProduits
  // ====================================================
  getIndexProductExist(product) {
    let indexPExist = -1;
    for (let p in this.listeProduits) {
      if (this.listeProduits[p].id == product.id) {
        indexPExist = p;
      }
    }
    return indexPExist;
  },

  toString() {
    console.log(this);
  }
};
// =========== fin : objet panier ==============



addHeadPhone.addEventListener('click', () => {
  let price = 189.00;
  cart.addProduct('casque Run\'Zic');
  unitPrice.innerHTML = price;
  totalPrice.innerHTML = cart.getTotalPrice(price);
  basket.innerHTML = cart.getTotalQtt('casque Run\'Zic');

})

removeHeadPhone.addEventListener('click', () => {
  cart.removeProduct('casque Run\'Zic');
  unitPrice.innerHTML = price;
  totalPrice.innerHTML = cart.getTotalPrice(price);
  basket.innerHTML = cart.getTotalQtt('casque Run\'Zic');
})

