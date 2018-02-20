var sname = document.getElementById("name")
var surname = document.getElementById("surname")
var city = document.getElementById("city")
var validate = document.getElementById("validate")

function add(){
    alert("name :" + sname.value + "\nsurename :" + surname.value + "\ncity :"+ city.value)
}
validate.addEventListener('click' ,add)
