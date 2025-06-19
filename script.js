let myImg = [
    "./BilderGalerieSVG/bild1.png",
    "./BilderGalerieSVG/bild2.png",
    "./BilderGalerieSVG/bild3.png",
    "./BilderGalerieSVG/bild4.png",
    "./BilderGalerieSVG/bild5.png",
    "./BilderGalerieSVG/bild6.png",
    "./BilderGalerieSVG/bild7.png",
    "./BilderGalerieSVG/bild8.png",
    "./BilderGalerieSVG/bild9.png"
];
let altDescription = [
    "Opa und Chogan.", 
    "Ben mit Opas.", 
    "Netter Esel.",
    "Pumba im Körbchen.",
    "Toni im Körbchen.", 
    "Ben und Toni", 
    "Pumba", 
    "Lisa und Tiffy" 
]; 



function loadImages(){
    let image = document.getElementById('load_image');
    let imgContainer = document.getElementById('img_container');
    for (i = 0; i < myImg.length; i++) {
        imgContainer.innerHTML += `<img onclick="openDialog(${i})"  class="imgg" src="${myImg[i]}" alt ="${altDescription[i]}">`;
    }
}

function openDialog(i){
    let dialog = document.getElementById('dialog'); 
    body.classList.toggle('stop-overflow');
    currentIndex = i; 
    dialog.classList.remove('hide');
    updateImage(i);
}

function forward(){
    currentIndex++;
    updateImage();
}

function backward(){
    currentIndex--;
    updateImage();
}

function closeDialog(){
    let body = document.getElementById('body');
    let dialog = document.getElementById('dialog'); 
    dialog.classList.add('hide');
    body.classList.toggle('stop-overflow');
    
}

function closeProtection(event){
    event.stopPropagation();
}

function updateImage(){
    let image = document.getElementById('load_image');
    let numberfield = document.getElementById('number-field');
    if (currentIndex > myImg.length-1){
        currentIndex = 0; 
    } else if (currentIndex < 0){
        currentIndex = 8;
    }

    numberfield.innerHTML = `${currentIndex+1}`;
    image.innerHTML = `<img class="dialog-img" src="${myImg[currentIndex]}" alt="${altDescription[currentIndex]}">`;
}