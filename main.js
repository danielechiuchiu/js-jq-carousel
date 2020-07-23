$(document).ready(function () {



// Funzione slider dx
 $('.next').click(
   function() {
     getNextImg();
   }
 );


// Funzione slider sx
 $('.prev').click(
   function() {
     getPrevImg();
   }
 );


/*
Step #1: Al click della freccia dx, lo slide fa scorrere le immagini rimuovendo la classe .active dall'immagine corrente e aggiungendola a quella succesiva
Step #2: Il carousel-indicator relativo all'immagine corrente si colora di blu (rimuovo classe .active dal carousel-indicator e la aggiungo a quello dell'immagine succesiva)
*/

function getNextImg() {
  var currentImg = $('.images img.active');
  var currentIndicator = $('.nav i.active');

  currentImg.removeClass('active');
  currentIndicator.removeClass('active');

  // Se img corrente è l'ultima (classe .last), aggiungo classe .active a prima img (classe .first). Stesso procedimento per carousel-indicator.
  if (currentImg.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  // Se img corrente non è l'utlima, aggiungo classe .active a img successiva. Stesso procedimento per carousel-indicator.
  else {
    currentImg.next('img').addClass('active');
    currentIndicator.next('i').addClass('active');
  }
}
/*
Step #3: Ripeto step #1 e # 2 per attivare le funzionalità dello slider verso sx (img precedente)
*/

function getPrevImg() {
  var currentImg = $('.images img.active');
  var currentIndicator = $('.nav i.active');

  currentImg.removeClass('active');
  currentIndicator.removeClass('active');

  if (currentImg.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  else {
    currentImg.prev('img').addClass('active');
    currentIndicator.prev('i').addClass('active');
  }
}

});
