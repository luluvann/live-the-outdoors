//when creating the trail card dynamically add an automatic incrementing id to the parent node with class ="card"


//remove the trail card from the  favorite trail section
$(".card-deck").on("click", ".remove-btn", function() {
   $(this).parent().remove();
   //remove from the favorite table in the db
});

//add the trail card to the all trails section



