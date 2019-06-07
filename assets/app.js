$(document).ready(function () {

    // variables
    // var to get the api data
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dXsHsqNh4L9eb2FvQGxgPwJ4zGKNKxUr&limit=10");
    xhr.done(function (data) { console.log("api key is working", data); });
    // array for the buttons
    var sports = ["curling", "hockey", "baseball", "volleyball", "tennis", "rollerderby", "snowbaording"]
    // button id to add more
    var buttonID = "";




    // function to create the buttons
    function createButtons() {
        $("#buttons-html").empty();
        // loop through the buttons array creating buttons with the needed attributes to get things showing up on the page
        for (var i = 0; i < sports.length; i++) {
            var btn = $("<button type='button' class='btn btn-info'>");
            btn.addClass("buttons");
            btn.attr("id", "item" + (i + 1));
            btn.attr("data-name", sports[i]);
            btn.text(sports[i]);
            //
            if (buttonID === btn.attr("id")) {
                btn.addClass("btn-info");
            }
            // display button on the page
            $("#buttons-html").append(btn);
        }
    }

    $("#add-sport").on("click", function (event) {
        event.preventDefault();

        var sport = $("#sports-input").val().trim();
        sports.push(sport);
        $("#sports-input").val("");

        createButtons();

    });

    //need click vent to make the giphys when buttons are clicked

    $(document).on("click", ".buttons", function () {
        buttonID = $(this).attr("id");

        var sport = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dXsHsqNh4L9eb2FvQGxgPwJ4zGKNKxUr&limit=10";

        // ajax call to connect with giphy api and pull data on to page

        // this section is not working
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {
            $("#sports-html").empty();

            for (var i = 0; i < 10; i++) {
                var sportDiv = $("<div>"); // create a new div for the giphy
                sportDiv.addClass('sport-img');
                var rating = response.data[i].rating;
                var ratingDisplay = $("<h2>").text("Rating: " + rating);
                var gifDisplay = $("<img>");
                gifDisplay.attr("src", response.data[i].images.fixed_height_still.url);
                gifDisplay.attr("data-still", response.data[i].images.fixed_height_still.url);
                gifDisplay.attr("data-animate", response.data[i].images.fixed_height.url);
                gifDisplay.attr("data-state", "still");
                gifDisplay.addClass('imageClick');
                console.log(gifDisplay);
                sportDiv.append(gifDisplay);
                sportDiv.append(ratingDisplay);
                $(".sports-html").prepend(sportDiv);        
           
            };
            console.log(response)


        });
    })


    // on click event to change from still to animate and back
    $(document).on("click", ".imageClick", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");

        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    createButtons();
});

































