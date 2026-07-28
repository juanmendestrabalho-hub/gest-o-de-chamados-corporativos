const DATABASE = {


users:[


{

id:1,

username:"admin",

password:"1234",

name:"Administrador",

role:"ADMIN"

},


{

id:2,

username:"analista",

password:"1234",

name:"Analista TI",

role:"ANALYST"

},


{

id:3,

username:"usuario",

password:"1234",

name:"Usuário Final",

role:"USER"

}


],



tickets:[],

teams:[


{
id:1,

name:"Service Desk N1",

area:"Suporte",

level:"N1",

members:[

"João",
"Ana"

]

},



{
id:2,

name:"Infraestrutura",

area:"Infra",

level:"N2",

members:[

"Carlos",
"Marcos"

]

},



{
id:3,

name:"Redes",

area:"Network",

level:"N2",

members:[

"Pedro",
"Lucas"

]

},



{
id:4,

name:"Segurança",

area:"Cyber",

level:"N3",

members:[

"Fernanda"

]

}


],


sla:[


{
priority:"Crítica",

response:15,

solution:240

},


{
priority:"Alta",

response:60,

solution:480

},


{
priority:"Média",

response:240,

solution:1440

},


{
priority:"Baixa",

response:480,

solution:2880

}


],



audit:[]


};





function initializeDatabase(){


if(
!localStorage.getItem("callflowDB")
){


localStorage.setItem(

"callflowDB",

JSON.stringify(DATABASE)

);


}


}




function getDatabase(){


return JSON.parse(

localStorage.getItem("callflowDB")

);


}




function saveDatabase(data){


localStorage.setItem(

"callflowDB",

JSON.stringify(data)

);


}



initializeDatabase();
