const images = document.querySelectorAll (".container img")
    images.forEach((img , i)=>{

    img.addEventListener('mouseover' , function (){
        this.src= "images/image" + (i+1) +"_2.jpg";
    })
})



