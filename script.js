// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
// // I added my image at the base of the canvas 
// const img = new Image();

// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });

// img.src = "postertest.png"; 


const input = document.querySelector('#primary-text');
const preview = document.querySelector('#maintext');

input.addEventListener('input', () => {
    preview.innerText = input.value;
});

const input2 = document.querySelector('#secondary-text');
const preview2 = document.querySelector('#secondtext');

input2.addEventListener('input', () => {
    preview2.innerText = input2.value;
});


// added buttons and classes for my styles

const style1 = document.querySelector('#style-1');
style1.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3');
    preview.classList.add('style-1');
    preview2.classList.remove('style-1', 'style-2', 'style-3');
    preview2.classList.add('style-1');
});

const style2 = document.querySelector('#style-2');
style2.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3');
    preview.classList.add('style-2');
    preview2.classList.remove('style-1', 'style-2', 'style-3');
    preview2.classList.add('style-2');
});

const style3 = document.querySelector('#style-3');
style3.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3');
    preview.classList.add('style-3');
    preview2.classList.remove('style-1', 'style-2', 'style-3');
    preview2.classList.add('style-3');
});





