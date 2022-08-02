// function fetchRandom(){
//     $.ajax({
//         url:'https://dog.ceo/api/breeds/image/random',
//         method: 'get',
//         success: function(data){
//             var imageUrl = data.message;
//             $('#Dog-image').attr('src', imageUrl);
//         }
//     })

// }

function fetchRandom(){


$.get('https://dog.ceo/api/breeds/image/random1', function(data){
    
    var imageUrl = data.message;
    $('#Dog-image').attr('src', imageUrl);
}).fail(function() {console.log("Request failed");});

}


$('#btn').click(fetchRandom);
