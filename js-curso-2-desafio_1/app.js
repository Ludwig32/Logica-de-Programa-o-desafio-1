let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function oBotãoFoiClicado(){
   console.log ('O botão foi clicado');
 
}
    function iLoveJS(){
        alert ('Eu Amo JS!');

    }
    function cidadeDoBrasil(){
        let cidade = prompt (`me fale qual cidade do brasil você foi?`);
            alert (`eu fui para ${cidade} e achei muito bonito!`);
            

    }

    function soma(){

   let primeironumero = parseInt(prompt ('qual o primeiro número?'));
        alert (` o primero numero é ${primeironumero}`)
   let segundonumero = parseInt(prompt('qual o segundo número?'));
        alert(`o segundo número é ${segundonumero}`);

        let resultado  = primeironumero + segundonumero;
        alert (`${primeironumero} + ${segundonumero} = ${resultado}`);
        

    }
