console.log ("  ")
const name = document.getElementById("name")
const surname = document.getElementById("surname")
const city = document.getElementById("city")
const button = document.querySelector('button').addEventListener("click" , clear)
function clear (){
    const r = confirm ( "Are you sure ??");
   if (r == true) {
       name.value = ''
       surname.value =''
       city.value = ''
   }
   
        
}