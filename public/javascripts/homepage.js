//event listeners
$('#all-trails').on("click", '.add-btn', addCardToFav);
$('#favorite-trails').on('click', '.remove-btn', removeCardFromFav);
$('section').on('click', '.complete-btn', completedTrail );
$('section').on('click', '.incomplete-btn', incompleteTrail );




//function to add trail card to the favorites section 
async function addCardToFav () {
      
    var cardId = $(this).parent().attr('id');
    var apiRoute = `api/trail/${cardId}`
    console.log("cardid", cardId);
    // $("section").removeClass('hidden');

    const response = await fetch (apiRoute, {
        method : 'put',
        body : JSON.stringify({
            fav_trail : true
        }),
        headers  :{'Content-Type' : 'application/json'}
    });
    
    location.reload();
    
    if (response.ok)
    {
        console.log('success');
    }
    else
    {
        alert (response.statusText);
    }
}
 
//function to remove the trai card from the favorite trails section
async function removeCardFromFav () {
     //event.preventDefault();
     var cardId = $(this).parent().attr('id');
     //console.log("card id", cardId)
     var apiRoute = `api/trail/${cardId}`

     const response = await fetch (apiRoute, {
         method : 'put', 
         body : JSON.stringify({
            fav_trail : false
         }), 
        headers: { 'Content-Type': 'application/json' }
     });

     location.reload();

    if (response.ok)
    {
        console.log("success");
    }
    else
    {
        alert(response.statusText);
    }
 }

 //function to update completion of the trail
 async function completedTrail() {
    var cardId = $(this).parent().attr('id');
    console.log("card id", cardId);
    var apiRoute = `/api/trail/${cardId}`

    const response = await fetch (apiRoute, {
        method : 'put', 
        body : JSON.stringify({
           completed : true
        }), 
       headers: { 'Content-Type': 'application/json' }
    });

    location.reload();
    
    if (response.ok)
    {
        console.log("success");
    }
    else
    {
        alert(response.statusText);
    }
 }

 //function to update completion of the trail
 async function incompleteTrail() {
    var cardId = $(this).parent().attr('id');
    //console.log("card id", cardId);
    var apiRoute = `/api/trail/${cardId}`

    const response = await fetch (apiRoute, {
        method : 'put', 
        body : JSON.stringify({
           completed : false
        }), 
       headers: { 'Content-Type': 'application/json' }
    });

    location.reload();
    
    if (response.ok)
    {
        console.log("success");
    }
    else
    {
        alert(response.statusText);
    }
 }

 //display the section only if it has cards 
window.onload = (event) => {
    if ($('#favorite-trails').children().length > 0)
    {
        $("#fav-section").removeClass('hidden');
    }

    if($('#all-trails').children().length <= 0)
    {
        $("#all-section").addClass('hidden');
    }
}

