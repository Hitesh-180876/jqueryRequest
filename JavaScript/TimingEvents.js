function sayHello(){
    console.log("Hello");
}

setTimeout(sayHello, 6000);
// it will pass sayHello after 6 seconds

setInterval(sayHello, 10000);
// it will pass sayHello after every interval of 10 seconds

