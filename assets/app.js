$(document).ready(function () {

    // variables
    // var to get the api data
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dXsHsqNh4L9eb2FvQGxgPwJ4zGKNKxUr&limit=5");
    xhr.done(function (data) { console.log("success got data", data); });
    // array for the buttons
    var sports = ["curling", "hockey", "baseball", "volleyball", "tennis", "rollerderby", "snowbaording"]
    // button id to add more
    var buttonID = "";

    var sport = $(this).attr("data-name");

    var queryURL: "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dXsHsqNh4L9eb2FvQGxgPwJ4zGKNKxUr&limit=10";


// function to create the buttons
    function createButtons() {
        $("#sports-html").empty();
// loop through the buttons array creating buttons with the needed attributes to get things showing up on the page
        for (var i = 0; i < sports.length; i++) {
            var btn = $("<button type='button' class='btn btn-info'>");
            btn.addClass("sport-button");
            btn.attr("id", "item" + (i + 1));
            btn.attr("data-name", sports[i]);
            btn.text(sport[i]);
//
            if (buttonID === buttonID.attr("id")) {
                btn.addClass("btn-info");
            }
// display button on the page
            $("#button-html").append(btn);
        }
    }

    $("#add-sport").on("click", function (event) {
        event.preventDefault();

        var sport = $("#sport-input").val().trim();
        sports.push(sport);
        $("#food-input").val("");

        createButtons();

    });

    //need click vent to make the giphys when buttons are clicked

    $(document).on("click", "sport-button", function(){
        buttonID = $(this).attr("id");

        for (var i =0; i < sports.length; i++) {
            $("#buttons-html").children().eq(i).removeClass("btn-success");
        }
        $(this).addClass("btn-success");

        $.ajax({
            

        })
    


    })

});

































