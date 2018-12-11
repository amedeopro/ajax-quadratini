$(document).ready(function(){


    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data){
        $('.box').click(function(){

          var numero = data.response
          var numeroInserito = $(this).text(numero);
          if (numero <= 5) {
            $(this).addClass('bg-giallo');
          } else if (numero > 5) {
            $(this).addClass('bg-verde');
          }

       })
      },
      error: function(){
        alert('si è verificato un errore');
      }
    });


});
