var window1; /* essa variavel serve para armazenar um objeto (window=janela), esse objeto recebe a propriedade de documento para ser aberto e escrito dentro dela, pois para o objeto window receber um comando "open para abrir, necessita de uma variavel".*/
var texto="";

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
}

function mostra(){

document.getElementById("1").innerHTML=produtos[0][0]; //array para mudança de option com id
document.getElementById("2").innerHTML=produtos[1][0];

}

function mostraD(){
    //segundo select com o preço, chamará o array para ter o texto
}

function Newwindow(tipo){ //parametro tipo, que é puxado no html dentro do onclick para ficar mais facil o array
    janela=[];
    janela[0]=["Finalização", "<img src='https://2.bp.blogspot.com/-xfN56hR3oTw/VNiOVQoIiFI/AAAAAAAA7Po/Gfag3xj60xw/s1600/obrigado1.jpg' class='sempre'>","Obrigado por nos acompanhar"]; //conteúdos do array

    window1=open("",janela[tipo],"width=300px, height=300px mid top"); /*armazena a janela aberta dentro da variavel, aberta pois está com o comando "open", os parametros para abrir uma janela são:
    "url (não necessário)","primeiro conteúdo dela,tamanho e orientação" "OLHAR NO MDN(mozilla domain developer)"
    */
    with(window1.document){ //condição de que: enquanto a var window for um documento (no caso sempre), se escreve  o que há abaixo!
    write("<html><head><meta charset='UTF-8'>"); //estrutura basica do html com caracteres especiais
    write("<link rel='stylesheet' type='text/css' href='Estilos/window-array.css'>"); //link de css
    write("<title>Janela de finalização</title></head>"); //titulo da guia da pagina
    write("<body>"+"<h1>"+janela[tipo][0]+"</h1>");/*titulo do corpo da pagina atraves de array e parametro*/
    write("<br>"+janela[tipo][1]+"<br>"); 
    write("<h4 class='mid'>"+janela[tipo][2]+"</h4>");
    write("<script src='script-array.js'></script>");
    write("<input type='button' value='Fechar' name='fechar janela' onclick='fechar();'>"); //botão de close
    write("</body></html>");
    }

}

function fechar(){
    window1=window.close; /*fecha a janela criada, objeto window com propriedade close, a função é chamada pelo link do script na pagina*/
}