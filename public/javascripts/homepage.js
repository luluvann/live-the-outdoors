//when creating the trail card dynamically add an automatic incrementing id to the parent node with class ="card"


//remove the trail card from the  favorite trail section


//$(".card-deck").on("click", ".remove-btn", removeCard);

// function buttonClick() {
//     var button = $('button');
//     for (var i = 0; i < button.length; i++)
//     {
//         $
//     }
// }
 

$('.card-deck').on("click", '.btn-danger', addCard);

// function addCard(event) {
//     event.preventDefault();
//     console.log("I am here");
// }

async function addCard () {
    //event.preventDefault();
    
    var cardId = $(this).parent().attr('id');
    var parentId = $(cardId).parent().attr('id');
    $("section").removeClass('hidden');
    console.log("card id", cardId);
    console.log("parent id", parentId);

   var apiRoute = `api/trail/${cardId}`

    const response = await fetch (apiRoute, {
        method : 'put',
        body : JSON.stringify({
            fav_trail : true
        }),
        headers  :{'Content-Type' : 'application/json'}
    });
    //console.log("response", response);
    
    if (response.ok)
    {
        console.log('success');
    }
    else
    {
        alert (response.statusText);
    }
}
 
 
//  async function removeCard (event) {
//      event.preventDefault();
//      var cardId = $(this).parent().attr('id');
//      const completed = false;

//      const response = await fetch ('/api/trail/:id', {
//          method : 'put', 
//          body : JSON.stringify({
//              completed
//          }), 
//         headers: { 'Content-Type': 'application/json' }
//      });

//      if (response.ok)
//     {
//         console.log("success");
//     }
//     else
//     {
//         alert(response.statusText);
//     }
//  }

// window.addEventListener("load", function() {
//     buttonClick();
// });