console.log("  ")
var shoe= document.getElementById("shoe_size")
var year = document.getElementById("year")
var vaidate = document.getElementById("validate").addEventListener('click' , result)

function result (){
    alert (( ((shoe.value)*2)+5)*50-1991+1766);
}
