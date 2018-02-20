console.log(" lzc ")
var x = document.getElementById("first_number")
var y = document.getElementById("second_number")
var validate = document.getElementById("validate").addEventListener('click', result);
function result  (){
    alert((x.value)*(y.value));

}
result();