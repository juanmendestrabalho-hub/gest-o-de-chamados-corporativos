function analyzeTicket(text){

text = text.toLowerCase();



const rules = [

{
keywords:["vpn","rede","internet","conexão"],
category:"Rede",
team:"Redes",
priority:"Alta"
},

{
keywords:["senha","acesso","login"],
category:"Acesso",
team:"Segurança",
priority:"Alta"
},

{
keywords:["outlook","email","office"],
category:"Software",
team:"Service Desk N1",
priority:"Média"
},

{
keywords:["servidor","erro","sistema"],
category:"Sistemas",
team:"Infraestrutura",
priority:"Crítica"
}

];



for(let rule of rules){

for(let word of rule.keywords){

if(text.includes(word)){

return rule;

}

}

}



return {

category:"Hardware",
team:"Service Desk N1",
priority:"Baixa"

};

}
