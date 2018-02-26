console.log("d")
const text = document.getElementById("texte")
const show = document.getElementById("show")
const hide = document.getElementById("hide")

function onClick(evt){
    console.log(evt.target)
    if(evt.target === show){
        text.style.display = "block"
    }else{
        text.style.display = 'none';
    }
}

hide.addEventListener('click', onClick)
show.addEventListener('click', onClick)
