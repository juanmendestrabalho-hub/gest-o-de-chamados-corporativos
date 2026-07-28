function login(){


const username =
document.getElementById("username").value;


const password =
document.getElementById("password").value;



const db =
getDatabase();



const user =
db.users.find(
u =>
u.username === username &&
u.password === password
);



if(user){


localStorage.setItem(

"callflowSession",

JSON.stringify(user)

);



window.location.href=
"dashboard.html";



}

else{


document.getElementById("error").innerHTML=

"Usuário ou senha inválidos";


}



}




function logout(){


localStorage.removeItem(
"callflowSession"
);


window.location.href=
"index.html";


}




function validateSession(){


const session =
localStorage.getItem(
"callflowSession"
);



if(!session){

window.location.href=
"index.html";

return;

}



const user =
JSON.parse(session);



const info =
document.getElementById(
"userInfo"
);



if(info){


info.innerHTML=

`${user.name} | ${user.role}`;


}


}




if(
window.location.pathname.includes(
"dashboard"
)

){


validateSession();


}
