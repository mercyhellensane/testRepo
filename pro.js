//recuperation des elements 
const form=document.querySelector("#form")
const username=document.querySelector("#username")
const name=document.querySelector("#name")
const age=document.querySelector("#age")
const email=document.querySelector("#email")
const classe=document.querySelector("#classe")
const identifiant=document.querySelector("#identifiant")
const telephone=document.querySelector("#telephone")
const photo=document.querySelector("#image")
const password =document.querySelector("#password")
const password2=document.querySelector("#password2")
// evenement 
form.addEventListener("submit",e=>{
    e.preventDefault
     form_verify
})
document.getElementById("inscruption").addEventListener("submit",funtion(e))
    var erreur
    var inputs= document.getElementsByTagName(inputs)
    for (let i =0 ;i< inputs.lenght;i++) {
        console.log(inputs[i]);
        if(!inputs[i] .value) {
            erreur="veillez renseignez tous les champs "
        } 
    }
    if(erreur){
e.preventDefault();
document.getElementById("erreur").innerHTML=erreur
return false

    }else
    alert('formulaire envoyee!')
//fonction
function form_verify() {
 //obtenir tous les valeurs des imputs  
 var uservalue=username.value.trim() 
 var namevalue=username.value.trim() 
 var agevalue=age.value.trim() 
 var emailvalue=email.value.trim() 
 var classevalue=classe.value.trim() 
 var identifiant=identifiant.value.trim()
 var telephone=telephone.value.trim() 
 var photo=photo.value.trim()
 var password=password.value.trim()
 var password2=password2.value.trim()
 //username verification
 if (uservalue === "") {
    let error= "username ne peut etre vide"
    setError(username,error)
 }
 function setError(elem,error) {
    const formcontrol=elem.parentElement
    const small=formcontrol.querySelector("small");
    //ajout du message d'erreur
    small.innertText= error
 }
}
var tableauE=['nomE','prenom','email','age','classe','identifiant','telephone','photo','password','passeword2']
for(value of tableauE){
    console.log(value);
}
var tableauP=['nomP','prenom','email','age','classe','identifiant','telephone','photo','departement','password','passeword2']
for(value of tableauP){
    console.log(value);
}
console.log(tableauP);
var a= 'tableau professeur deja renplir '
try {
    if (tableauP==a )
    throw new Error("veillez remplir les champs")
} catch (error) {
    console.log(error)
}
try {
    if (tableauP==null)
    throw new Error("veillez remplir les champs")
} catch (error) {
    console.log(error)
}