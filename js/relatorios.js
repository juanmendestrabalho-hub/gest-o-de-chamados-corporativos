function loadReports(){


const db =
getDatabase();


const tickets =
db.tickets;



document.getElementById(
"reportTotal"
).innerHTML =
tickets.length;



document.getElementById(
"reportClosed"
).innerHTML =

tickets.filter(

t=>t.status==="Fechado"

).length;



document.getElementById(
"reportSLA"
).innerHTML =

tickets.filter(

t=>t.slaStatus==="Estourado"

).length;


}




function exportCSV(){


const db =
getDatabase();



let csv =
"ID,Titulo,Categoria,Prioridade,Status,Equipe\n";



db.tickets.forEach(t=>{


csv +=

`${t.id},${t.title},${t.category},${t.priority},${t.status},${t.team}\n`;


});



const blob =
new Blob(

[csv],

{
type:"text/csv"
}

);



const url =
URL.createObjectURL(blob);



const link =
document.createElement("a");


link.href=url;


link.download=
"relatorio_chamados.csv";


link.click();



}



loadReports();
