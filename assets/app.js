$(document).ready(function () {

// variables
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dXsHsqNh4L9eb2FvQGxgPwJ4zGKNKxUr&limit=5");
xhr.done(function (data) { console.log("success got data", data); });

var sports = ["curling", "hockey", "baseball", "volleyball", "tennis","rollerderby","snowbaording"]

var button = "";



    createButtons() {
        $("#sports-html").empty();

        for (var i = 0; i < sports.length; i++) {
           
        }
    }
}

































