function loadAudit(){


const db =
getDatabase();



const table =
document.getElementById(
"auditTable"
);



table.innerHTML="";



db.audit
.reverse()
.forEach(log=>{


table.innerHTML += `


<tr>

<td>
${log.date}
</td>


<td>
${log.action}
</td>


</tr>


`;


});



}



loadAudit();
