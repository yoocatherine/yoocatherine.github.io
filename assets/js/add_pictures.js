const numPics = NUM_PICS;
const pictures = [];

let i = 1;
while(i <= numPics){
  let num = i + '';
  if(i < 10){
    num = "0" + i;
  }
  $('#workPics').append(
    $('<div>').addClass('grid-item').append(
      $('<a>').addClass('image').append(
        $('<img>').attr('src',`images/pic${num}.jpg`)
      )
    )
  );
  i++;
}
