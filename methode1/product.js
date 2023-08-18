var addition = document.getElementById('Add');
var Name = document.getElementById('nom');
var Description = document.getElementById('description');
var Price = document.getElementById('prix');
var Quantity = document.getElementById('quantité');
// addition.addEventListener('click',F_add);
var v=true
function F_add(event){
    event.preventDefault();
    if (Name.value=='') {
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
         v = false ;
    }else {
        Name.classList.add('is-valid');
        Name.classList.remove('is-invalid');
    }
    if (Description.value=='') {
        Description.classList.add('is-invalid');
        Description.classList.remove('is-valid');
        v = false ;
    }else {
        Description.classList.add('is-valid');
        Description.classList.remove('is-invalid');
    }
    if (Price.value=='') {
        Price.classList.add('is-invalid');
        Price.classList.remove('is-valid');
         v = false ;
    }else {
        Price.classList.add('is-valid');
        Price.classList.remove('is-invalid');
    }
    if (Quantity.value=='') {
        Quantity.classList.add('is-invalid');
        Quantity.classList.remove('is-valid');
         v = false ;
    }else {
        Quantity.classList.add('is-valid');
        Quantity.classList.remove('is-invalid');
    }
    if (v == true) {
    var produit = JSON.parse(localStorage.getItem('produit')) || [] ;
    var id = Math.random().toString(36).substring(2) ;
    var prod ={
        Name : Name.value,
        Description : Description.value,
        Price : Price.value,
        Quantity : Quantity.value,
        ID : id
    }
    produit.push(prod);
    localStorage.setItem('produit',JSON.stringify(produit));
    document.location.href = 'listProduct.html';
    }
}
