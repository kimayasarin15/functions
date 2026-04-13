// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
// // I added my image at the base of the canvas 
// const img = new Image();

// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });

// img.src = "postertest.png"; 

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
    preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview.classList.add('style-1');
    preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview2.classList.add('style-1');
});

const style2 = document.querySelector('#style-2');
style2.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview.classList.add('style-2');
    preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview2.classList.add('style-2');
});

const style3 = document.querySelector('#style-3');
style3.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview.classList.add('style-3');
    preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview2.classList.add('style-3');
});

const style4 = document.querySelector('#style-4');
style4.addEventListener('click', () => {
    preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview.classList.add('style-4');
    preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview2.classList.add('style-4');
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
    preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
});

// from eric and michael to keep an image
const input3 = document.getElementById('imageInput');
const preview3 = document.getElementById('preview3');

input3.addEventListener('change', () => {
  const file = input3.files[0];
  if (file) {
    preview3.src = URL.createObjectURL(file); // Create a temporary local URL
    preview3.style.display = 'block'
  }
});

// I wanted to add that if a user clicks the image button the text doesn't show - but might make them separate buttons dont need this anymore - toggles below
// input3.addEventListener('click', () => { 
//     preview.style.display = 'none';
//     preview2.style.display = 'none';
// });

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src - changing the image src with JS and a button

// https://claude.ai/share/679d9a71-65bc-4683-9a79-91a3ab7643eb I pasted in the same question to Claude and asked for it not to give me any code - I just wanted to check this was the correct way to do it - I'm adding and removing my classes then I click the buttons
const image = document.querySelector('#image');
const image1 = document.querySelector('#image-1');
const image2 = document.querySelector('#image-2');
const image3 = document.querySelector('#image-3');
const preview3box = document.getElementById('preview3-box');

image1.addEventListener('click', () => {
    image.src = 'subway.png';
    preview.classList.remove('mainlayout-billboard', 'mainlayout-sidewalk');
    preview.classList.add('mainlayout-subway');
    preview2.classList.remove('secondlayout-billboard', 'secondlayout-sidewalk');
    preview2.classList.add('secondlayout-subway');
    preview3box.classList.remove('preview3-box-billboard','preview3-box-sidewalk');
    preview3box.classList.add('preview3-box-subway');
});

image2.addEventListener('click', () => {
    image.src = 'billboard.png';
    preview.classList.remove('mainlayout-subway', 'mainlayout-sidewalk');
    preview.classList.add('mainlayout-billboard');
    preview2.classList.remove('secondlayout-subway', 'secondlayout-sidewalk');
    preview2.classList.add('secondlayout-billboard');
    preview3box.classList.remove('preview3-box-subway','preview3-box-sidewalk');
    preview3box.classList.add('preview3-box-billboard');
});

image3.addEventListener('click', () => {
    image.src = 'sidewalk.png';
    preview.classList.remove('mainlayout-subway', 'mainlayout-billboard');
    preview.classList.add('mainlayout-sidewalk');
    preview2.classList.remove('secondlayout-subway', 'secondlayout-billboard');
    preview2.classList.add('secondlayout-sidewalk');
      preview3box.classList.remove('preview3-box-subway','preview3-box-billboard');
    preview3box.classList.add('preview3-box-sidewalk');
});


// two buttons for my 'modes'

const modeText = document.querySelector('#text-mode');
const modeImage = document.querySelector('#image-mode');
const textControls = document.querySelector('#text-controls');
const textControls2 = document.querySelector('#text-controls-poster');
const imageControls = document.querySelector('#image-controls');

modeText.addEventListener('click', () => {
    textControls.style.display = 'block';
    textControls2.style.display = 'block';
    imageControls.style.display = 'none';
    preview.style.display = 'block';
    preview2.style.display = 'block';
});

modeImage.addEventListener('click', () => {
    textControls.style.display = 'none';
    textControls2.style.display = 'none';
    imageControls.style.display = 'block';
    preview.style.display = 'none';
    preview2.style.display = 'none';
});


