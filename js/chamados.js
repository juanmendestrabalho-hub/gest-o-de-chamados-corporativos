let tickets = [];



function loadTickets(){


const db = getDatabase();


tickets = db.tickets;


renderTickets(tickets);


}




// ===============================
// CRIAR CHAMADO
// ===============================


function createTicket(){


const db =
getDatabase();



const impact =
document.getElementById("impact").value;



const urgency =
document.getElementById("urgency").value;



const priority =
calculatePriority(
impact,
urgency
);



const ticket = {

  createdAt:
new Date().toISOString(),


slaDeadline:
calculateDeadline(priority),

function calculateDeadline(priority){


const db =
getDatabase();



const rule =
db.sla.find(
s=>s.priority===priority
);



if(!rule)
return null;



let minutes =
rule.solution;



return new Date(

Date.now()
+
minutes*60000

).toISOString();


}
  
id:
Date.now(),


title:
document.getElementById("title").value,


description:
document.getElementById("description").value,


category:
document.getElementById("category").value,


impact,


urgency,


priority,


team:
routeTicket(
document.getElementById("category").value
),


status:
"Aberto",


slaStatus:
"Dentro",


comments:[],


history:[

{

date:
new Date().toLocaleString(),


action:
"Chamado criado"

}

]


};




db.tickets.push(ticket);



saveDatabase(db);



createAudit(
"Novo chamado criado ID "
+ ticket.id
);



clearForm();



loadTickets();


}





// ===============================
// CALCULO PRIORIDADE
// ===============================


function calculatePriority(
impact,
urgency
){



if(
impact==="Alto"
&&
urgency==="Alta"
){

return "Crítica";

}



if(
impact==="Alto"
||
urgency==="Alta"
){

return "Alta";

}



if(
impact==="Médio"
||
urgency==="Média"
){

return "Média";

}



return "Baixa";


}





// ===============================
// LISTAGEM
// ===============================


function renderTickets(data){



const table =
document.getElementById(
"ticketTable"
);



table.innerHTML="";



data.forEach(ticket=>{


table.innerHTML += `


<tr>


<td>
#${ticket.id}
</td>


<td>

${ticket.title}

</td>


<td>

${ticket.category}

</td>



<td class="priority">

${ticket.priority}

</td>



<td>

<span class="status">

${ticket.status}

</span>

</td>



<td>


<button onclick="
changeStatus(${ticket.id})
">

Atender

</button>



<button onclick="
closeTicket(${ticket.id})
">

Fechar

</button>



</td>


</tr>


`;



});


}





// ===============================
// ALTERAR STATUS
// ===============================


function changeStatus(id){


const db =
getDatabase();



const ticket =
db.tickets.find(
t=>t.id===id
);



ticket.status=
"Em atendimento";



ticket.history.push({

date:
new Date().toLocaleString(),

user:
JSON.parse(
localStorage.getItem("callflowSession")
).name,

action:
`Status alterado para ${ticket.status}`

});



saveDatabase(db);



loadTickets();


}





function closeTicket(id){


const db =
getDatabase();



const ticket =
db.tickets.find(
t=>t.id===id
);



ticket.status=
"Fechado";



ticket.history.push({

date:
new Date().toLocaleString(),


action:
"Chamado encerrado"

});



saveDatabase(db);



loadTickets();


}




// ===============================
// PESQUISA
// ===============================


function filterTickets(){


const text =
document
.getElementById("search")
.value
.toLowerCase();



const filtered =
tickets.filter(
t=>
t.title
.toLowerCase()
.includes(text)
);



renderTickets(filtered);



}





function clearForm(){


document.getElementById("title").value="";

document.getElementById("description").value="";


}




// ===============================
// AUDITORIA
// ===============================

function createAudit(action){


const db =
getDatabase();



const session =
JSON.parse(
localStorage.getItem("callflowSession")
);



db.audit.push({


date:
new Date()
.toLocaleString(),


user:
session ?
session.name :
"Sistema",


action


});



saveDatabase(db);


}

loadTickets();

function routeTicket(category){


const routes={


"Hardware":
"Service Desk N1",


"Software":
"Service Desk N1",


"Rede":
"Redes",


"Acesso":
"Segurança",


"Sistemas":
"Infraestrutura"


};



return routes[category] ||
"Service Desk N1";


}

function suggestAI(){

const text =
document.getElementById("description").value;



const result =
analyzeTicket(text);



document.getElementById("category").value =
result.category;



document.getElementById("team").value =
result.team;



alert("Sugestão aplicada pela IA");

}
