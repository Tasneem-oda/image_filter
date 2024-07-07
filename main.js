let saturate = document.querySelector('#saturate');
let contrast = document.querySelector('#contrast');
let brightness = document.querySelector('#brightness');
let sepia = document.querySelector('#sepia');
let grayScale = document.querySelector('#gray-scale');
let blur = document.querySelector('#blur');
let hueRotate = document.querySelector('#hue-rotate');
let download = document.querySelector('.download');
let reset = document.querySelector('span');
let upload = document.querySelector('#upload');
let image = document.querySelector('.img');
let imageBox = document.querySelector('.image-box');
let canvas = document.querySelector('canvas');
let drw = canvas.getContext('2d');

window.onload = function(){
    download.style.display ='none';
    reset.style.display ='none';
    imageBox.style.display ='none';
}
function resetvalue(){
    drw.filter ='none';
    contrast.value ='100';
    saturate.value ='100';
    sepia.value ='0';
    grayScale.value ='0';
    blur.value ='0';
    hueRotate.value ='0';
    brightness.value ='100';
}
upload.onchange = function(){
    resetvalue();
    download.style.display ='block';
    reset.style.display ='block';
    imageBox.style.display ='block';
    let File = new FileReader();
    File.readAsDataURL(upload.files[0]);
    File.onload =function(){
            image.src = File.result
    };
    image.onload = function(){
        canvas.width =image.width;
        canvas.height = image.height
        drw.drawImage(image,0,0,canvas.width,canvas.height)
        image.style.display ='none';

    }

}
let filters = document.querySelectorAll('.filters input');
filters.forEach(
    filter =>{
        filter.addEventListener('input', function(){
           drw.filter =`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayScale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
            `
            drw.drawImage(image,0,0,canvas.width,canvas.height);
        })
    }
);
download.onclick= function(){
    
   download.href = canvas.toDataURL();
   canvas.filter ='none';
}