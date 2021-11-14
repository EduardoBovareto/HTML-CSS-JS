var saldo=4000;
var PG,PP;

despesas=[];
despesas[0]=["Conta de luz", "Conta de Água", "Plano de Saúde","Limpeza","comida", "Internet"];
despesas[1]=[300,500,250,150,1200,199.00]; /* Está de acordo com o [0] */


function mostradesp(tipo){
    /*
    var number= typeof "number";
    */
    document.getElementById("DP").innerHTML(despesas[0][tipo]);
}
 /* Lembrar de colocar a função nos determinados elementos */
 
function mostratab2(){
    document.getElementeById("saldo").innerHTML("R$"+ saldo);
    var PP= (saldo - (despesas[0]+ despesas[1] + despesas[1]+ despesas[3]+despesas[4]+ despesas[5])); 
    document.getElementById("PP").innerHTML(PP/100 + "%"); 
    PG=(saldo*(100-PP));
    document.getElementById("PG").innerHTML(PG+ "%");
}
