var student = {
    name : "Hitesh",
    rollNo : 180876,
    age : 20

};
console.log(student.name);
for(var prop in student){
    console.log(prop, student[prop])
}

var keys = Object.getOwnPropertyNames[student];
var keys = Object.keys[student];