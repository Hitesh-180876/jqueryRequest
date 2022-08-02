function sayHello(){
    alert("hello on screen");
}

function sayBye(){
    alert("say byee");
}
var Hellobutton = document.getElementById('btn');
Hellobutton.addEventListener('click', sayHello)
Hellobutton.addEventListener('click', sayBye);
