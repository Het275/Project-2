var slider_img = document.querySelector('.slider_img');

var images = ['flowers-gfbaa48ed9_1280.jpg','mountains-g44c25934d_1280.jpg','sunset-gf3d3a0688_1920.jpg','aurora-g79a8a2479_1920.jpg'];


var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();   
}

function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg(); 
}

function shrink(){

    var image = document.getElementById("slid");
    image.style.width = "300px";
    
    image.style.height = "200px";

    }

function enla(){
    
    var image = document.getElementById("slid");
    image.style.width = "700px";
    
    image.style.height = "400px";
}


function setImg(){

    return slider_img.setAttribute('src', 'images/' + images[i]);
}

function img1(){
    return slid.setAttribute('src', 'images/' + images[i]);
}

function myfunction(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();

}