// Get the modal
const modal = document.getElementById('imgModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const images = document.getElementsByClassName('image');
const modalImg = document.getElementById("zoomedImg");
const leftArrow = document.getElementById("modalLeft");
const rightArrow = document.getElementById("modalRight");
window.images = Array.prototype.slice.call(images);
window.idx = 0;

Array.prototype.rotate = function( n ) {
  this.unshift( ...this.splice(n, this.length) );
};

function updateArrows(){
  if(window.idx === 0){
    leftArrow.style.opacity = "0";
    leftArrow.style.cursor = "default";
  }else{
    leftArrow.style.opacity = "1";
    leftArrow.style.cursor = "pointer";
  }

  if(window.idx === images.length - 1){
    rightArrow.style.opacity = "0";
    rightArrow.style.cursor = "default";
  }else{
    rightArrow.style.opacity = "1";
    rightArrow.style.cursor = "pointer";
  }
}


function updateImage(){
  const image = window.images[window.idx].childNodes[0];
  modalImg.src = image.src;
}

function getIndex(array, el){
  for (let i = 0; i < array.length; i++) {
    if(el === array[i]){ return i; }
  }
  return -1;
}

function handleClick(){
  if(screen.width > 500){
    modal.style.display = "block";
    const idx = getIndex(window.images, this);
    window.idx = idx;
    updateImage();
    updateArrows();
  }
}

function handleNext(){
  if(window.idx < window.images.length - 1){
    window.idx ++;
  }
  updateImage();
  updateArrows();
}

function handleBack(){
  if(window.idx > 0){
    window.idx --;
  }
  updateImage();
  updateArrows();
}

for (let i = 0; i < images.length; i++) {
  images[i].onclick = handleClick;
}

rightArrow.onclick = handleNext;
leftArrow.onclick = handleBack;


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
};

document.onkeydown = function(event) {
     if (!event){
       event = window.event;
     }
     let code = event.keyCode;
     if(event.charCode && code === 0){
       code = event.charCode;
     }
     switch(code) {
          case 27:
              modal.style.display = "none";
              break;
          case 37:
              handleBack();
              break;
          case 39:
              handleNext();
              break;
     }
};
