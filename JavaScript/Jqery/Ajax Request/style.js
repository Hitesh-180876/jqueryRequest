
function fetchRandom(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        if(xhrRequest.status>=200 && xhrRequest.status<400){
            console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#Dog-image').attr('src', imageUrl);
        }else{
            //window.alert("Not found");
            var outPut = document.getElementById('btn');
            outPut.innerHTML = 'Sorry, Image is not exist on the server'
           // $('#btn').html("not found");
        }
        

    };

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();

}
$('#btn').click(fetchRandom);
