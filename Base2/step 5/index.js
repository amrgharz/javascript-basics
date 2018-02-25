console.log("j")
const images = document.querySelectorAll (".container img")
images.forEach ((img , i )=>{
    img.addEventListener('mouseover' , function (){
        this.src= "images/image" + ++i +"_2.jpg";
    })
})