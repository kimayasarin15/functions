const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
// I added my image at the base of the canvas 
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "postertest.png"; 

// adding my text value to show up through innertext 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText

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


// added buttons and classes for my styles - to come back to: is there a way to combine adding my classes for both primary and secondary?

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

// adding my color pickers https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color


const primaryColor = document.querySelector('#primary-color');
primaryColor.addEventListener('input', () => {
    preview.style.color = primaryColor.value;
});

const secondaryColor = document.querySelector('#secondary-color');
secondaryColor.addEventListener('input', () => {
    preview2.style.color = secondaryColor.value;
});


// removed classes with a reset button but need to figure out how to remove the color
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3');
    preview2.classList.remove('style-1', 'style-2', 'style-3');
});