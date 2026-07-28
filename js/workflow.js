const WORKFLOW = [


"Aberto",


"Triagem",


"Classificado",


"Em atendimento",


"Validação",


"Fechado"


];






function nextStatus(current){


let index =
WORKFLOW.indexOf(current);



if(index === -1)
return WORKFLOW[0];



return WORKFLOW[index+1] || current;


}






function advanceTicket(id){



const db =
getDatabase();



const ticket =
db.tickets.find(
t=>t.id===id
);



if(!ticket)
return;



const old =
ticket.status;



ticket.status =
nextStatus(
ticket.status
);




ticket.history.push({


date:
new Date()
.toLocaleString(),


action:

`
Status alterado:

${old}

→

${ticket.status}

`


});




saveDatabase(db);


}
