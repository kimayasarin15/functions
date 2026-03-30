const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
// I added my image at the base of the canvas 
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "postertest.png"; 




