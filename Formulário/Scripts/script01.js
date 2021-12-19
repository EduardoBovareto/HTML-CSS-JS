var texto="";
var total=0.00;
var i;

produtos=[]
produtos[0]=["livroPai",150.34]
produtos[1]=["Seumadruga",80.45]
produtos[2]=["CamisaStar",120.57]
produtos[3]=["Dinheiro",30.34]

function escreve(){
texto=texto+produto_compra.pr.value +"\n"; 
produto_compra.selecionados.value=texto;

    /*  Aqui estamos pegando primeiramente, o valor de uma variavel,"texto", pois se houver algum conteúdo dentro dela, ira ser adcionado imediatamente. Posteriormente, pegamos o valor do select que esta dentro do html. Da seguinte maneira, indicar na programação passo a passo os elementos macro e micros (como se fosse um caminho) até chegar no select, todos identificados por name="" e id="". 
    Meio que devemos descrever o caminho para se chegar ao dado do elemento select através de name="" e id="" nos elementos: compra.comprados.value-> (formulario->select->valor do select)
*/

for(i=0;i<4;i++){
    if(produtos[i][0]==produtoscompra.selecao_produtos.value){
      total = total+produtos[i][1]
/*
    for(...<produtos.length) podemos colocar a quantidade limite do laço de algumas maneiras, uma delas é através do valor cheio, que é 4, outra através do total de posições do vetor através do comando .length (produtos.length) pois o meu array ja é identificado ao se escreve-lo e se coloca length para se ter o tamanho do vetor maior, por mais que length seja para caracteres.
 */

    // NÃO ERSTÁ FAZENDO A CONTA DE SOMA
 
    }

    document.getElementById("total").innerHTML=total;
 }

}

