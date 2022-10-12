//variable for api key
var APIKey = "7011d52b38576fe07e02c7905f6470f5";
var city = ("form-searchinput")
var search = ("searchBtn")
var history = ("search-history")
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//local storage
$(".searchBtn").on("click", function (event) {
    var cityItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, history);
});


//fetch the api url
fetch(queryURL)
.then(function(response) {
return response.json();
});



