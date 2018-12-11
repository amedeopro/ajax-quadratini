$(document).ready(function(){


    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data){
        $('.box').click(function(){
          for (var i = 0; i < 1; i++) {
            var numero = data.response
            console.log(data.response)
            if (numero <= 5) {
              $(this).addClass('bg-giallo');
            } else if (numero > 5) {
              $(this).addClass('bg-verde');
            }

            var numeroInserito = $(this).text(numero);
        }


       })
      },
      error: function(){
        alert('si è verificato un errore');
      }
    });


});
