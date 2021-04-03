$().ready(function(){

     let umaDIv = $("div");
     let umParagrafo = $("<p>Olá mundo</p>")

    umaDIv.append(umParagrafo);

    $("<p>123 Luiz Chequini 1234</p>").prependTo(umaDIv);

    $("p").html("<strong>Negrito</strong> Trocando");

    $("p").text("Vamos ver isto");
});