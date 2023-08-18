var produit = JSON.parse(localStorage.getItem('produit')) || [] ;

function affichage(){
let table = ``;
let i=1;
produit.forEach(element => {
    table += `
    <tr>
    <td>${i} </td>
    <td>${element.Name}</td>
    <td>${element.Description}</td>
    <td>${element.Price}</td>
    <td>${element.Quantity}</td> 
    <td> <button type="button" class="btn btn-danger"  onclick="Delete( ${i-1})">  Delete  </button> </td>
    <td> <button type="button" class="btn btn-success" data-id="${element.ID}"  data-bs-toggle="modal" data-bs-target="#exampleModal"> UpDate  </button> </td>
    </tr>
    `
    i++ ;
});
document.getElementById('post').innerHTML = table ;
}
function Delete(x){
    produit.splice(x,1);
localStorage.setItem('produit',JSON.stringify(produit));
affichage();
}  
let id 
function update(y){
var prod = produit.find(element => element.ID == y);
document.getElementById('nom').value =  prod.Name ;
document.getElementById('description').value =  prod.Description ;
document.getElementById('prix').value =  prod.Price ;
document.getElementById('quantité').value =  prod.Quantity ;
id = y
}
function save(){
var prod = produit.find(element => element.ID == id );
prod.Name = document.getElementById('nom').value ;
prod.Description = document.getElementById('description').value;
prod.Price = document.getElementById('prix').value ; 
prod.Quantity = document.getElementById('quantité').value ;
localStorage.setItem('produit',JSON.stringify(produit));
window.location.reload() ;
}
