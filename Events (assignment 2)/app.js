var image = document.getElementById("image")
var image1 = document.getElementById("image1")
function imageHandler(){
    console.log("image" , image.src)
    image.src = "./imgifs/img2.gif"
    console.log("image1" , image1.src)
    image1.src = "./imgifs/img4.jpg" 
}

function imageOutHandler(){
    console.log("image" , image.src)
    image.src = "./imgifs/img1.jpg"
    console.log("image1" , image1.src)
    image1.src = "./imgifs/img3.jpg"
}