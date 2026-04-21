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

const mainInput = document.querySelector('#primary-text');
const mainText = document.querySelector('#maintext');

mainInput.addEventListener('input', () => {
    mainText.innerText = mainInput.value;
});

const secondInput = document.querySelector('#secondary-text');
const secondText = document.querySelector('#secondtext');

secondInput.addEventListener('input', () => {
    secondText.innerText = secondInput.value;
});


// added buttons and classes for my styles - to come back to: is there a way to combine adding my classes for both primary and secondary?

const style1 = document.querySelector('#style-1');
style1.addEventListener('click', () => {
    mainText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    mainText.classList.add('style-1');
    secondText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    secondText.classList.add('style-1');
    style1.classList.add('active');
    style2.classList.remove('active');
    style3.classList.remove('active');
    style4.classList.remove('active');
});

const style2 = document.querySelector('#style-2');
style2.addEventListener('click', () => {
    mainText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    mainText.classList.add('style-2');
    secondText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    secondText.classList.add('style-2');
    style2.classList.add('active');
    style1.classList.remove('active');
    style3.classList.remove('active');
    style4.classList.remove('active');
});

const style3 = document.querySelector('#style-3');
style3.addEventListener('click', () => {
    mainText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    mainText.classList.add('style-3');
    secondText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    secondText.classList.add('style-3');
    style3.classList.add('active');
    style1.classList.remove('active');
    style2.classList.remove('active');
    style4.classList.remove('active');
});

const style4 = document.querySelector('#style-4');
style4.addEventListener('click', () => {
    mainText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    mainText.classList.add('style-4');
    secondText.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
    secondText.classList.add('style-4');
    style4.classList.add('active');
    style1.classList.remove('active');
    style2.classList.remove('active');
    style3.classList.remove('active');
});

// adding my color pickers https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color


const primaryColor = document.querySelector('#primary-color');
primaryColor.addEventListener('input', () => {
    mainText.style.color = primaryColor.value;
});

const secondaryColor = document.querySelector('#secondary-color');
secondaryColor.addEventListener('input', () => {
    secondText.style.color = secondaryColor.value;
});


// removed classes with a reset button but need to figure out how to remove the color
// removed this for now but not need it
// const reset = document.querySelector('#reset');
// reset.addEventListener('click', () => {
//     preview.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
//     preview2.classList.remove('style-1', 'style-2', 'style-3', 'style-4');
// });

// from eric and michael to keep an image
// const input3 = document.getElementById('imageInput');
// const preview3 = document.getElementById('preview3');

// input3.addEventListener('change', () => {
//   const file = input3.files[0];
//   if (file) {
//     preview3.src = URL.createObjectURL(file); // Create a temporary local URL
//     preview3.style.display = 'block'
//   }
// });

// test

// my variable for my input - my variable for container is already defined in preview3
// this works on my laptop but not on other devices - need to fix
const mainImage = document.getElementById('imageInput');

mainImage.addEventListener('change', () => {
  const file = mainImage.files[0];
  if (file) {
    // this is creating a new variable for my URL and using innerHTML is is creating an image when the user uploads it
    const uploadedUrl = URL.createObjectURL(file); // Create a temporary local URL
    // creating an image tag with the source of the URL in my preview3 box
    imageContainer.innerHTML = `<img src="${uploadedUrl}">`
  }
});



// I wanted to add that if a user clicks the image button the text doesn't show - but might make them separate buttons dont need this anymore - toggles below
// input3.addEventListener('click', () => { 
//     preview.style.display = 'none';
//     preview2.style.display = 'none';
// });

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src - changing the image src with JS and a button

// https://claude.ai/share/679d9a71-65bc-4683-9a79-91a3ab7643eb I pasted in the same question to Claude and asked for it not to give me any code - I just wanted to check this was the correct way to do it - I'm adding and removing my classes then I click the buttons
// I used Claude to help me understand the logic of 'active' states for buttons - I'm just adding the active class - https://claude.ai/share/4d989eb1-5ff7-4c20-a925-a53d8c66cedf - I so far will just be writing them all one by one because that helps me understand it - but need to see if there is a better way to do it

const image = document.querySelector('#image');
const subway = document.querySelector('#image-1');
const billboard = document.querySelector('#image-2');
const sidewalk = document.querySelector('#image-3');
const imageContainer = document.getElementById('preview3-box');

subway.addEventListener('click', () => {
    image.src = 'subway.png';
    mainText.classList.remove('mainlayout-billboard', 'mainlayout-sidewalk');
    mainText.classList.add('mainlayout-subway');
    secondText.classList.remove('secondlayout-billboard', 'secondlayout-sidewalk');
    secondText.classList.add('secondlayout-subway');
    imageContainer.classList.remove('preview3-box-billboard','preview3-box-sidewalk');
    imageContainer.classList.add('preview3-box-subway');
    subway.classList.add('active');
    billboard.classList.remove('active');
    sidewalk.classList.remove('active');
});

billboard.addEventListener('click', () => {
    image.src = 'billboard.png';
    mainText.classList.remove('mainlayout-subway', 'mainlayout-sidewalk');
    mainText.classList.add('mainlayout-billboard');
    secondText.classList.remove('secondlayout-subway', 'secondlayout-sidewalk');
    secondText.classList.add('secondlayout-billboard');
    imageContainer.classList.remove('preview3-box-subway','preview3-box-sidewalk');
    imageContainer.classList.add('preview3-box-billboard');
    billboard.classList.add('active');
    subway.classList.remove('active');
    sidewalk.classList.remove('active');
});

sidewalk.addEventListener('click', () => {
    image.src = 'sidewalk.png';
    mainText.classList.remove('mainlayout-subway', 'mainlayout-billboard');
    mainText.classList.add('mainlayout-sidewalk');
    secondText.classList.remove('secondlayout-subway', 'secondlayout-billboard');
    secondText.classList.add('secondlayout-sidewalk');
    imageContainer.classList.remove('preview3-box-subway','preview3-box-billboard');
    imageContainer.classList.add('preview3-box-sidewalk');
    sidewalk.classList.add('active');
    subway.classList.remove('active');
    billboard.classList.remove('active');
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
    mainText.style.display = 'block';
    secondText.style.display = 'block';
    modeText.classList.add('active');
    modeImage.classList.remove('active');
    imageContainer.style.display = 'none';
});

modeImage.addEventListener('click', () => {
    textControls.style.display = 'none';
    textControls2.style.display = 'none';
    imageControls.style.display = 'block';
    mainText.style.display = 'none';
    secondText.style.display = 'none';
    modeImage.classList.add('active');
    modeText.classList.remove('active');
    imageContainer.style.display = 'block';
});


// resize image control - need to fix this come back to it 

// const imageSize = document.querySelector('#size');

// imageSize.addEventListener('input', () => {
//     // imageContainer.style.width = `${imageSize.value}%`;
//     // imageContainer.style.height = `${imageSize.value}%`;
//     imageContainer.style.transform = `scale(${imageSize.value})`;
// });