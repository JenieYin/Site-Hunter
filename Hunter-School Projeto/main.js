document.getElementById("P1").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = "https://www.ironstudios.com.br/"; // Substitua com o seu link de destino
});

// document.getElementById('meuLink').addEventListener('click', function(event) {
//     var caixa = event.target;
//     var limiteEsquerda = caixa.offsetLeft;
//     var limiteDireita = caixa.offsetLeft + caixa.offsetWidth;
//     var limiteSuperior = caixa.offsetTop;
//     var limiteInferior = caixa.offsetTop + caixa.offsetHeight;
  
//     var mouseX = event.clientX;
//     var mouseY = event.clientY;
  
//     if (mouseX >= limiteEsquerda && mouseX <= limiteDireita && mouseY >= limiteSuperior && mouseY <= limiteInferior){
//       // Código a ser executado quando a caixa for clicada
//       alert('Você clicou na caixa!');
//     }

//     event.preventDefault(); // Impede o comportamento padrão do link
//     window.location.href = "https://www.ironstudios.com.br/";
//   });