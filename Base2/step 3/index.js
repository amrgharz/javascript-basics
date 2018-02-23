console.log("")
function key (){
    
    const name = document.getElementById("name").value
    const dive = document.getElementById ("div").innerHTML = name
    console.log(dive)
    

}
addEventListener('keyup' , key)