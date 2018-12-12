$(document).ready(function(){

var posiz = []; //creo un array dove andrò ad inserire la posizione del numero generato

  $('.box').one().click(function(){
    var posizElem = $(this).index(); //prendo la posizione del numero generato
    var questoElemento = $(this) //mi creo questa variabile prima in modo che possa riutilizzarla all'interno
      if (posiz.includes(posizElem)) {  //controllo se la posizione è già inclusa nell'array allora ti blocco

       alert('hai già cliccato');

     } else{ // altrimenti pusho la posizione nell'array ed eseguo la chiamata AJAX

           posiz.push(posizElem);

            $.ajax({
              url: 'https://www.boolean.careers/api/random/int',
              method: 'GET',
              success: function(data){
                  var numero = data.response;
                  console.log(numero);

                  questoElemento.text(numero);

                    if (numero <= 5) {
                        questoElemento.addClass('bg-giallo');
                      } else if (numero > 5) {
                        questoElemento.addClass('bg-verde');
                      }



              },
              error: function(){
                alert('si è verificato un errore');
              }
            });
      }
      });
      })
