console.log("  ")
const age = document.getElementById("age")
const validate = document.getElementById("validate").addEventListener('click',allowed)
function allowed (){if (age.value<18 ){
    alert("your age is under 18")
}
else {
    alert("your age is over 18")
}
}