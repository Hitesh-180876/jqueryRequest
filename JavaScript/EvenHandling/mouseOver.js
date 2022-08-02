function mouseover(){
    console.log('mouseOver');
}
function mouseouter(){
    console.log('mouseouter');
}
var mouse = document.getElementById('div')
mouse.addEventListener('mouseover', mouseover)

var mouse = document.getElementById('div')
mouse.addEventListener('mouseout', mouseouter)


