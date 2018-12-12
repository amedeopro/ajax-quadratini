$(document).ready(function(){

  $('.box').click(function(){

    var questoElemento = $(this)

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

  });
  })
