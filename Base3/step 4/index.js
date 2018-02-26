console.log("f")
const passowrd = document.getElementById("password")
const confirmation = document.getElementById("confirmation")
const button = document.getElementsByTagName('button') ;
button[0].addEventListener('click' , conf)
function conf (){
    if (password.value === confirmation.value){
        alert("you are good to go" )
    }else{
        passowrd.style.border = " 3px solid red"
        confirmation.style.border = "4px solid red"
    }
}