function loadArchitecture(){


const db =
getDatabase();



const container =
document.getElementById(
"teams"
);



container.innerHTML="";



db.teams.forEach(team=>{


let members="";



team.members.forEach(member=>{


members += `

<div class="member">

👤 ${member}

</div>

`;


});




container.innerHTML += `


<div class="team-card">


<h3>

${team.name}

</h3>


<p>

Área:
${team.area}

</p>


<p>

Nível:
${team.level}

</p>


<hr>


<h4>
Técnicos
</h4>


${members}


</div>


`;



});


}



loadArchitecture();
