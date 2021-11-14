var saldo=3000;
var PG,PP,PA;

despesas=[];
despesas[0]=["Conta de luz", "Conta de Água", "Plano de Saúde","Limpeza","comida", "Internet"];
despesas[1]=[300,500,250,150,1200,199.00]; /* Está de acordo com o [0] */


function mostraDP(tipo){
    /*
    var number= typeof "number";
    */
    document.getElementById("DP").innerHTML= despesas[0][tipo];
    
}
function mostraVD(tipo){
    document.getElementById("VP").innerHTML= despesas[1][tipo];
}
 /* Lembrar de colocar a função nos determinados elementos */
 
function mostrasaldo(){
    document.getElementById("saldo").innerHTML=("R$ "+ saldo);
}

function mostraPP(){
    var PP= Number.parseFloat((despesas[1][0]+ despesas[1][1] + despesas[1][2]+ despesas[1][3]+despesas[1][4]+ despesas[1][5])-saldo ); 
    document.getElementById("PP").innerHTML= Number.parseFloat(PP/100 + "%"); 
}

function mostrPG(){
    PG=Number.parseFloat(saldo*(100-PP));
    document.getElementById("PG").innerHTML=(PG + "%");

}
function mostraPA(){
    PA=Number.parseFloat(PG+(saldo*10)/100);
    document.getElementById("PA").innerHTML=(PA + "%");
}

/* Concertar a emissão de valores, eles estão saindo de escala, muito grandes */