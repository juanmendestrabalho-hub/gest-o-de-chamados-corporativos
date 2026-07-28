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
