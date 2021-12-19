/* Padrão: Título,tamanho_janela, imagem, Tipo_do_Produto, Quantidade, Preço. */
/* No caso com 2 imagens, é para redução de espaço,mas está quase no padrão*/

Marcas=[];
Marcas[0]=["Iogurte", 300, "<img class='janInfoImg' src='Imagens/IogurteNatMel100.jpg'>","Natural com Mel", 130, 8.00];
Marcas[1]=["Iogurte", 300, "<img class='janInfoImg' src='Imagens/Iogurtezerolac100.jpg'>", "Zero Lactose", 130, 8.00];
Marcas[2]=["Bala", 300, "<img class='janInfoImg'src='Imagens/BalaGengibre100.jpg'>", "Gengibre e Mel", 60, 6.00];
Marcas[3]=["Bala",300,"<img class='janInfoImg' src='Imagens/BalaAnis100.jpg'>", "Mel e Anis",60, 6.00];
Marcas[4]=["Barra", 300, "<img class='janInfoImg' src='Imagens/BarraGranAveiaMel100.jpg'>", "Cereal de Mel e Granola", 60, 5.00];
Marcas[5]=["Pote",300, "<img class='janInfoImg'src='Imagens/MelSilvestre100.jpg'>", "Mel Flores Silvestres", 350, 20.00 ];
Marcas[6]=["Pote", 300, "<img class='janInfoImg'src='Imagens/MelEucalipto100.jpg'>", "Mel de Eucalipto", 450, 25.00];
Marcas[7]=["Pote", 300, "<img class='janInfoImg' src='Imagens/MelSilvestre100.jpg'>", "Mel de Laranjeiras", 750, 40.00];
Marcas[8]=["Extrato", 300, "<img class='janInfoImg' src='Imagens/Propol100.jpg'>", "Própolis", 30, 16.00];
Marcas[9]=["Spray", 300, "<img class='janInfoImg' src='Imagens/Spray100.jpg'>", "Própolis", 35, 9.00];



function Mostrawindow(tipo)
{
    var window1= open("", Marcas[tipo],"width=300,height=400"); /*sempre usar uma variavel para abrir uma page de fora e colocar o objeto aberto dentro dela.*/
    with (window1.document) {
    write("<html><head><title></title>");
    write("<link rel='stylesheet' type='text/css'");
    write("href='Newwindow.css'>");
    write("</head>","<body class='janinfo'>"); /* TEM UMA CLASSE AQUI */
    write("<p>", Marcas[tipo][0],"</p>");
    write(Marcas[tipo][2]);
    write("<ul><li>","<span class='janInfoDetalhe'>Tipo:", Marcas[tipo][3] ,"</span></li>");
    write("<li><span class='janInfoDetalhe'>Qtd:", Marcas[tipo][4], "g", "</span></li>");
    write("<li><span class='janInfoDetalhe'>Preco:R$</span>", "<b>", Marcas[tipo][5], ",00","</b></li></ul>");
    write("<script src='scripts/Misturademel.js'></script>");
    write("<button onclick='FechaJ();'>Fechar</button>");
    write("</body></html>");
    }
}
function FechaJ()
{
window1=window.close()
} 


/***/

/* A PÁGINA DIRETO DA ABELHA, ESTÁ USANDO O ARRAY ABAIXO  */

Produto=[];

Produto[0]=["Flores Silvestres", "<img src='Imagens/MelSilvestre100.jpg' class='img'>",  20.00] 

Produto[1]=["Eucalipto 450g", " \n\n <img src='Imagens/MelEucalipto100.jpg' class='img'>", 25.00];

Produto[2]=["Flor de Laranjeira 750g", "<img src='Imagens/MelLaranja100.jpg' class='img'>", 40.00];

Produto[3]=["Extrato 30 ml", "<img src='Imagens/Propol100.jpg' class='img'>  ", 16.00];

Produto[4]=["Spray", "<img src='Imagens/Spray100.jpg' class='img' > ", 9.00];


function mostra(indice){
document.getElementById("vazio").innerHTML=Produto[indice][0] + "<BR>" + Produto[indice][1] + "<BR> Preço:R$" + Produto[indice][2] +",00";
}


/*uma ideia é colocar a entrada nos links dentro de um registro com cookies e os dois documentos linkados por mesmo source de script*/