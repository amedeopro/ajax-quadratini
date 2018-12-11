$(document).ready(function(){
$('.box').click(function(){
for (var i = 0; i < 1; i++) {
    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data){
          var numero = data.response;
          console.log(numero);
          $('.box').click(function(){
            var inserisciNumero = $(this).text(numero);

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
}

});
})
