$(function() {
    $(".notDevoured").on("Click", function(event){
        const id = $(this).data('id');
        const newDevoured = $(this).data("newdevoured");

        const newDevourItem = {
            devoured: newDevoured
        };

        $.ajax("api/burgers" + id, {
            type: "PUT",
            data: newDevourItem
        }).then(
            function() {
                console.log("Burger Devoured ", newDevoured)
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event){
        event.preventDefualt();

        const newBurger = {
            name: $("bn").val().trim()
        };

        $.ajax("api/burgers", {
          type:"POST",
          data: newBurger
        }).then(
            function() {
                console.log("Created new Burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted cat", id);
                location.reload()
            }
        );
    });
});