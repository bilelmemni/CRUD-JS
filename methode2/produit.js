///La partie Ajout:
var Nom = document.getElementById('Nom');
var Description = document.getElementById('Description');
var Price = document.getElementById('Price');
var Quantité = document.getElementById('Quantité');

var validation =true

function save(event){
    event.preventDefault();
    
    if (Nom.value =='') {
        Nom.classList.add('is-invalid');
        Nom.classList.remove('is-valid');
         validation = false ;
    }else {
        Nom.classList.add('is-valid');
        Nom.classList.remove('is-invalid');
    }
    if (Description.value =='') {
      Description.classList.add('is-invalid');
      Description.classList.remove('is-valid');
       validation = false ;
    }else {
      Description.classList.add('is-valid');
      Description.classList.remove('is-invalid');
    }
    if (Price.value =='') {
      Price.classList.add('is-invalid');
      Price.classList.remove('is-valid');
       validation = false ;
    }else {
      Price.classList.add('is-valid');
      Price.classList.remove('is-invalid');
    }
    if (Quantité.value =='') {
      Quantité.classList.add('is-invalid');
      Quantité.classList.remove('is-valid');
       validation = false ;
    }else {
      Quantité.classList.add('is-valid');
      Quantité.classList.remove('is-invalid');
    }
    if (validation == true) {
      var Produits = JSON.parse(localStorage.getItem('Produits')) || [] ;
      var id = Math.random().toString(36).substring(2) ;
      var Prod ={
          Nom : Nom.value,
          Description : Description.value,
          Price : Price.value,
          Quantité : Quantité.value,
          ID : id
      }
      Produits.push(Prod);
      localStorage.setItem('Produits',JSON.stringify(Produits));
      document.location.href = 'produit.html';
      window.location.reload() ;
      }
  }
 
  //La Partie Affichage
var Produits = JSON.parse(localStorage.getItem('Produits')) || [] ;

function affichage(){
let table = ``;
let i=1;
Produits.forEach(element => {
    table += `
    <tr>
    <td>${i}</td>
    <td>${element.Nom}</td>
    <td>${element.Description}</td>
    <td>${element.Price}</td>
    <td>${element.Quantité}</td>
    <td> <button type="button" class="btn btn-danger"  onclick="Delete(${i-1})">  Delete  </button> </td>
    <td> <button type="button" class="btn btn-success MAJ" data-id="${element.ID}"   data-bs-toggle="modal" data-bs-target="#UpdateProduit"> UpDate  </button> </td>
    </tr>
    `
    i++ ;
});
document.getElementById('post').innerHTML = table ;
}

function Delete(x){
  Produits.splice(x,1);
  localStorage.setItem('Produits',JSON.stringify(Produits));
  affichage();
}

//LA mise a jour:
var UpdateNom = document.getElementById('UpdateNom');
var UpdateDescription = document.getElementById('UpdateDescription');
var UpdatePrice = document.getElementById('UpdatePrice');
var UpdateQuantité = document.getElementById('UpdateQuantité');

let id;
function update(y){
  var Prod = Produits.find(element => element.ID == y);
  UpdateNom.value = Prod.Nom;
  UpdateDescription.value = Prod.Description;
  UpdatePrice.value = Prod.Price;
  UpdateQuantité.value = Prod.Quantité;
  id=y;
}

function SaveUpdate(){
  var Prod = Produits.find(element => element.ID == id);
  Prod.Nom = document.getElementById('UpdateNom').value ;
  Prod.Description= document.getElementById('UpdateDescription').value;
  Prod.Price= document.getElementById('UpdatePrice').value;
  Prod.Quantité= document.getElementById('UpdateQuantité').value;
  
  localStorage.setItem('Produits',JSON.stringify(Produits));
  window.location.reload() ;
}