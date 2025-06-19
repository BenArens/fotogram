let myImgs = [
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
    for (let i = 0; i < myImgs.length; i++) {
        
        
    }
}

    
// let dialog = document.getElementById('dialog'); 
let currentIndex = 0; 
let numberfield = document.getElementById('number-field');
let image = document.getElementById('load_image');
  

function openDialog(index, event){
    currentIndex = index; 
    dialog.classList.remove('hide');
    event.stopPropagation()
    // numberfield = document.getElementById('number-field').innerHTML = `${currentIndex}`;
    // image.innerHTML = `<img class="img" src="${myImgs[currentIndex]}">`;
    updateImage();
}

function forward(){
    currentIndex++;
    // numberfield = document.getElementById('number-field').innerHTML = `${currentIndex}`;
    // image.innerHTML = `<img class="img" src="${myImgs[currentIndex]}">`;
    updateImage();
}


function backward(){
    currentIndex--;
    updateImage();
}

function closeDialog(event){
    dialog.classList.add('hide');
    event.stopPropagation();
}





function updateImage(){
    if (currentIndex > myImgs.length-1){
        currentIndex = 0; 
    } else if (currentIndex < 0){
        currentIndex = 8;
    }
    numberfield.innerHTML = `${currentIndex+1}`;
    image.innerHTML = `<img class="img" src="${myImgs[currentIndex]}">`;
}