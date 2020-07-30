var stringaVuota = '';
$("#add-text").keydown(function(){
    if (event.which == 13 || keyCode == 13){
        invioMessaggio();
    }
})

//***********FUNZIONI***************//
function invioMessaggio(){
    //prendere il valore  dall'input//
    var testoInput = $("#add-text").val();
    //creo il clone//
    var clone = $(".template .messaggio-impostato").clone();
    //aggiungo la classe che devo dare al clone //
    clone.addClass("inviato");
    //inserimento del testo//
    clone.find(".paragrafo").append(testoInput);
    clone.find(".orariomex").append("12:20");
    //inserimento nel DOM//
    $(".chat").append(clone);
    //risposta automatica//
    setTimeout(rispostaAutomatica,2000);
}

function rispostaAutomatica(){
    // clonare il template
    var clone2 = $(".template .messaggio-impostato").clone();
    // 2 step - mettere la classe
    clone2.addClass("ricevuto");
    // 3 step - aggiungere il Testo
    clone2.find(".paragrafo").append("Ciao come stai?");
    clone2.find(".orariomex").append("12:40");
    // 4 step - mettere elemento nel DOM
    $(".chat").append(clone2);
}