// Todo lo que este dentro de onload se ejecutara cuando el elemento window este totalmente cargado
window.onload = function() {
  var board = document.querySelector('.board-js');
  /*board.addEventListener('click', addBgc);
    // console.log(event.target);// Traerá lo que genero el evento

  board.addEventListener('dblclick',function(event) {
    event.target.style.backgroundColor = 'blue';
  });

  board.addEventListener('mouseover',function(event) {
    event.target.style.backgroundColor = 'yellow';
  });

  // board.removeEventListener('click', addBgc);*/
  board.addEventListener('click', addX);
};

var centinel = true;

  function addX(event) {
    if(event.target.matches('td') && event.target.textContent === '') {
     if (centinel)
     event.target.textContent = 'X';
     else
     event.target.textContent = 'O'
     centinel = !centinel;
   }
  }


/*
function addBgc(event) {
  event.target.style.backgroundColor = 'red';
};*/
