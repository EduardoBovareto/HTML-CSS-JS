var c=document.cookie=""; /* o .cookie é uma propriedade do objeto document */

function criacookie(nameUser){ /* Parametro é o nome que foi digitado no prompt */

data=new Date; /* Aqui está guardando a hora e dia que foi executado esse script no site, para o site é uma nova data */

  document.getElementById("MDA").innerHTML="date at that moment: "+" "+data.toGMTString()+" "+" user="+ nameUser ; 
  /* A linha acima pega o elemento com MDA e escreve a string, a data nova que se guardou e o nome de quem é */

  data.setMinutes(30); /* Aqui se pega a nova data e adciona mais 30 minutos tendo uma outra nova data */

  c=document.cookie="user="+ nameUser +";EXPIRES="+data.toGMTString(); /* Temos uma variavel "c" e que dentro dela tem um objeto, que esse objeto recebe um valor de strings mas uma data, que indiretamente estão dentro de uma variavel */

  document.getElementById("MDD").innerHTML=data.toGMTString() + c; /* Aqui se tem a ultima data mais uma relação de prazo final "EXPRISE e o nome do cara" */


}
