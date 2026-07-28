let statusChart;
let priorityChart;



function loadDashboard(){


const db =
getDatabase();


const tickets =
db.tickets;



const total =
tickets.length;



const open =
tickets.filter(
t=>t.status==="Aberto"
).length;



const progress =
tickets.filter(
t=>t.status==="Em atendimento"
).length;



const closed =
tickets.filter(
t=>t.status==="Fechado"
).length;



const sla =
tickets.filter(
t=>t.slaStatus==="Estourado"
).length;




document.getElementById(
"totalTickets"
).innerHTML = total;



document.getElementById(
"openTickets"
).innerHTML = open;



document.getElementById(
"progressTickets"
).innerHTML = progress;



document.getElementById(
"closedTickets"
).innerHTML = closed;



document.getElementById(
"slaExpired"
).innerHTML = sla;




createStatusChart(tickets);


createPriorityChart(tickets);


generateSummary(tickets);



}





function createStatusChart(tickets){


const data={


"Aberto":

tickets.filter(
t=>t.status==="Aberto"
).length,


"Em atendimento":

tickets.filter(
t=>t.status==="Em atendimento"
).length,


"Fechado":

tickets.filter(
t=>t.status==="Fechado"
).length



};



if(statusChart){

statusChart.destroy();

}



statusChart =
new Chart(

document.getElementById(
"statusChart"
),

{


type:"doughnut",


data:{


labels:Object.keys(data),


datasets:[{


data:Object.values(data)



}]


}


}



);



}





function createPriorityChart(tickets){



const data={


"Crítica":

tickets.filter(
t=>t.priority==="Crítica"
).length,


"Alta":

tickets.filter(
t=>t.priority==="Alta"
).length,


"Média":

tickets.filter(
t=>t.priority==="Média"
).length,


"Baixa":

tickets.filter(
t=>t.priority==="Baixa"
).length



};



if(priorityChart){

priorityChart.destroy();

}



priorityChart =
new Chart(

document.getElementById(
"priorityChart"
),

{


type:"bar",


data:{


labels:Object.keys(data),


datasets:[{


label:"Chamados",

data:Object.values(data)


}]


}


}


);



}






function generateSummary(tickets){


const element =
document.getElementById(
"summaryText"
);



let message="";


if(tickets.length===0){


message =
`
Nenhum chamado registrado.
<br>
O sistema está aguardando novos atendimentos.
`;

}


else{


message =

`

Total de chamados registrados:
<b>${tickets.length}</b>

<br><br>

A operação possui acompanhamento
através de indicadores de SLA,
prioridade e status.

`;

}



element.innerHTML=message;



}




loadDashboard();
