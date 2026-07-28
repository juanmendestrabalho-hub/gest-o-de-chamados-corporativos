function loadSLA(){


const db =
getDatabase();



const container =
document.getElementById(
"slaCards"
);



container.innerHTML="";



db.sla.forEach(item=>{


container.innerHTML += `


<div class="sla-card">


<h2>

${item.priority}

</h2>


<p>

Tempo resposta:

</p>


<div class="time">

${item.response} min

</div>


<p>

Tempo solução:

</p>


<div class="time">

${item.solution} min

</div>


</div>


`;



});


}



loadSLA();


function checkSLA(ticket){


if(!ticket.slaDeadline)
return "Sem SLA";



const now =
new Date();



const deadline =
new Date(
ticket.slaDeadline
);



if(now > deadline){

return "Estourado";

}


return "Dentro";

}
