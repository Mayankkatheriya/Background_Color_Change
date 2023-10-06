let background = document.querySelector(".container");
let changeColor =  document.querySelector("#colorChange")
let changeBg =  document.querySelector("#bgChange")
let changeGradient =  document.querySelector("#gradient");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

//? Change Color
function rgbSelect(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
}
changeColor.addEventListener('click', function () {
    audio.play();
    let newColor = rgbSelect();
    background.style.backgroundImage = "none";
    background.style.backgroundColor = newColor;
    background.style.transition = "0.8s ease-in-out"
});

// ? change bg
let images = ["./Assets/1.jpeg", "./Assets/2.jpg",
                "./Assets/3.jpg", "./Assets/4.jpg",
                "./Assets/5.jpeg", "./Assets/6.jpg",
                "./Assets/7.jpg", "./Assets/8.jpg",
                "./Assets/9.jpg", "./Assets/10.jpg"
            ];
function randomBg(){
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';
    return bgImg;
}
changeBg.addEventListener('click', function () {
    audio.play();
    let newImg = randomBg();
    console.log(newImg);
    background.style.backgroundImage = newImg;
    // background.style.transition = "0.2s ease-in-out"

});

// ? change gradient
let gradients = [
"(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
"(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
"(120deg, #f6d365 0%, #fda085 100%)",
"(120deg, #a1c4fd 0%, #c2e9fb 100%)",
"(120deg, #84fab0 0%, #8fd3f4 100%)",
"(120deg, #a6c0fe 0%, #f68084 100%)",
"(to right, #fa709a 0%, #fee140 100%)",
"(to top, #a8edea 0%, #fed6e3 100%)",
"(to top, #d299c2 0%, #fef9d7 100%);",
"(to top, #fddb92 0%, #d1fdff 100%);"
];
function randomGradient(){
    var randomNumber = Math.floor(Math.random() * gradients.length);
    var bgGrad = `linear-gradient${gradients[randomNumber]}`;
    return bgGrad;
}
changeGradient.addEventListener('click', function () {
    audio.play();
    let grad = randomGradient();
    console.log(grad);
    background.style.backgroundImage = grad;
    background.style.transition = "0.4s ease-in-out"
});