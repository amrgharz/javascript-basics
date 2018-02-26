console.log("")
const text = document.getElementById("text")
const color = document.getElementsByClassName("color")
color[0].addEventListener ('click' , function (){
    text.style.color = "green"
})
color[1].addEventListener('click' , function (){
    text.style.color = "red"
})
color[2].addEventListener ('click' , function (){
    text.style.color = "blue"
})


