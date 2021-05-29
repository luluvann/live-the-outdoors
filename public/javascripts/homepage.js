//when creating the trail card dynamically add an automatic incrementing id to the parent node with class ="card"


// //remove the trail card from the  favorite trail section
// $(".card-deck").on("click", ".remove-btn", function() {
//     $(this).parent().remove();
//     //remove from the favorite table in the db
//  });

$(".card-deck").on("click", ".remove-btn", removeCard);
 
$('.card-deck').on("click", '.add-btn', addCard);

function addCard() {
    console.log("I am here");
}

// async function addCard () {
//     event.preventDefault();
//     var cardId = $(this).parent().attr('id');
//     var parentId = $(cardId).parent().attr('id');
//     $(parentId).parent().removeClass('hidden');
//     const completed = true;

//     const response = await fetch ('/api/trail/:id', {
//         method : 'put',
//         body : JSON.stringify({
//             completed
//         }),
//         headers  :{'Content-Type' : 'application/json'}
//     });
    
//     if (response.ok)
//     {
//         console.log('success');
//     }
//     else
//     {
//         alert (response.statusText);
//     }
// }
 
 
 async function removeCard (event) {
     event.preventDefault();
     var cardId = $(this).parent().attr('id');
     const completed = false;

     const response = await fetch ('/api/trail/:id', {
         method : 'put', 
         body : JSON.stringify({
             completed
         }), 
        headers: { 'Content-Type': 'application/json' }
     });

     if (response.ok)
    {
        console.log("success");
    }
    else
    {
        alert(response.statusText);
    }
 }