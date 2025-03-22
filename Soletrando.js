var numero;
var pts = 0;
timedLoop(5000, function() {
  setImageURL("imagem2", "cd.gif");
  numero = randomNumber(1, 7);
  setImageURL("image2", numero+".png");
  playSound(numero+".mp3", false);
});
onEvent("botao1", "click", function( ) {
  var insercao = getText("texto_insercao1");
  var insercaoMinusculas = insercao.toLowerCase();
  if (numero == 1 && insercaoMinusculas == "melancia") {
    pts = pts+1;
  } else if ((numero == 2 && insercaoMinusculas == "galinha")) {
    pts = pts+1;
  } else if ((numero == 3 && insercaoMinusculas == "tomate")) {
    pts = pts+1;
  } else if ((numero == 4 && insercaoMinusculas == "pimentão")) {
    pts = pts+1;
  } else if ((numero == 5 && insercaoMinusculas == "leite")) {
    pts = pts+1;
  } else if ((numero == 6 && insercaoMinusculas == "bananas")) {
    pts = pts+1;
  } else if ((numero==7 && insercaoMinusculas=="ovos")) {
    pts = pts+1;
  }
  setText("etiqueta1", "Pontos: "+pts);
  setText("texto_insercao1", "");
  playSound("sound://category_app/app_interface_click.mp3", false);
});
