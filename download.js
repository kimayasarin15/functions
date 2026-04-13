// https://codepen.io/mfehrenbach/pen/ZYpqEPK
// https://www.google.com/search?smstk=Chg5NXVWMExqR3hteUxPRDRwS0VtQVM3ST0QBA%3D%3D&smstidx=0&q=js+html+div+to+image&udm=50&csuir=1&aep=34&kgs=e48946be8f8903d4&shndl=37&shmd=H4sIAAAAAAAA_3WNOQ7CMBAASZuaiso1ElnSUCD-Ym1sa73Il-wN5mm8gVdxtIh2pJkZH8O4vTblJQZl-aYkK45IbnfxIqWdAXrvEzVBYTOZHKE5rMYfSs0xA3LUzWN1Wvwal4QcppJov3kO-l_g22-wVEyWEwHlTMGRpoqWXRKY7z9Mv_1ksVo9n462fB4vllssx7sAAAA&shmds=v1_ATWGeePOGdoFW1MNLJZHBUc_mErQ5pId_nmIhSUoWkExgq4QAw&source=sh%2Fx%2Faio%2Fm1%2F1&mtid=EGvdaYGXBpjW5NoPhLurkAo
// From Michael and Eric ^ 

import * as htmlToImage from 'html-to-image';

const download = document.querySelector('#download');

download.addEventListener('click', () => {
    
htmlToImage.toPng(document.querySelector('#posterbox'))
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'my-image.png';
    link.href = dataUrl;
    link.click();
  });

}); 

