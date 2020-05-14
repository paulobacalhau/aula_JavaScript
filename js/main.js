
// Manipulando elementos da página
function clicou(){
  //alert("Obrigado por clicar...");
  document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar...</b>";
};

function ir(){
   window.open("http://www.terra.com.br");
   //window.location.href = "http://www.abola.pt";
};
    
function trocar(){
    document.getElementById("onmouse").innerHTML="<b>Você passou o mouse em cima...</b>";
};
function voltar(elemento){
    elemento.innerHTML="<b>Passe o mouse aqui....</b>";
};

function carga(){
   alert("Página carregada...")
};

function funcaoChange(elemento){
   console.log(elemento.value);
};
/*
// Desenvolva páginas web com JavaScript
// Funções
function soma(num1, num2){
    return (num1 + num2);
};

alert(soma(10,20));
*/

/*
// Terceira aula
var data = new Date();
alert(data);
alert(data.getMonth()+1);
*/

/*
for (var count=0; count<=5;count++){
   console.log(count);
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
//var idade = 18;

var idade = prompt ("Informe sua idade");
if (idade > 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/

/*
// Segunda aula
var lista =["maçã", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.length);
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
// alert(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
//alert(frutas[1].cor);
*/


/*
// Primeira aula
// alert ('Meu primeiro JS');
// var nome = "Paulo ";
//var idade = 58;
// alert (nome + " tem " + idade + " anos.");

var frase = "Japão é o melhor time do mundo";
console.log(nome);
console.log(nome + idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
*/
