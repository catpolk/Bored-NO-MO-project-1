// Variables to target text input for cards
var act = document.querySelector("#activity")
var accessibility = document.querySelector("#accessibility")
var type = document.querySelector("#type")
var participants = document.querySelector("#participants")
var price = document.querySelector("#price")
var imgType = document.querySelector("#imgtype")

// Variables to target activities images to display cards
var diy = document.querySelector("#diy")
var busywork = document.querySelector("#busywork")
var charity = document.querySelector("#charity")
var cooking = document.querySelector("#cooking")
var education = document.querySelector("#education")
var music = document.querySelector("#music")
var recreational = document.querySelector("#recreational")
var relaxation = document.querySelector("#relaxation")
var social = document.querySelector("#social")

// Variables to target dropdown menus
var select1 = document.querySelector("#select1")
var select2 = document.querySelector("#select2")
var select3 = document.querySelector("#select3")
var select4 = document.querySelector("#select4")

// Variables to target texts to display or not
var noAct = document.querySelector("#noact")
var main = document.querySelector("main")

// Variable that targets submit button
var button = document.querySelector("#submit")

// Code to not display no activity found text
noAct.style.display = "none"; 

// Event listener in order to locally store values of items selected in dropdown menu by user
button.addEventListener("click", function(){
  var typeValue= select1.value
  localStorage.setItem("typevalue", typeValue)
  var priceValue= select2.value
  localStorage.setItem("pricevalue", priceValue)
  var participantsValue = select3.value
  localStorage.setItem("participantsvalue", participantsValue)
  var accessValue = select4.value
  localStorage.setItem("accessvalue",accessValue)
});

// Get items from local storage in order to display them in the dropdown menus after activity is shown
$("#select1").val(localStorage.getItem("typevalue"));
$("#select2").val(localStorage.getItem("pricevalue"));
$("#select3").val(localStorage.getItem("participantsvalue"));
$("#select4").val(localStorage.getItem("accessvalue"));

// Variables in order to grab values from dropdown menu to input in api url
var typeUrl = (localStorage.getItem("typevalue"))
var priceUrl = (localStorage.getItem("pricevalue"))
var partUrl = (localStorage.getItem("participantsvalue"))
var accessUrl = (localStorage.getItem("accessvalue"))

// Bored api data url with variables 
var apiUrl = 'https://cors-everywhere.herokuapp.com/http://www.boredapi.com/api/activity?type='+ typeUrl +'&price='+ priceUrl +'&participants=' + partUrl +'&accessibility='+ accessUrl+'';

// Fetch function to grab data from api
fetch(apiUrl)
.then((response)=> response.json())
.then((data)=> {
    var activity = data;
    console.log(activity)
    act.textContent = activity.activity;
    accessibility.textContent = activity.accessibility;
    type.textContent = activity.type;
    participants.textContent = activity.participants;
    price.textContent = activity.price
    
    var image = document.querySelector("#image")
    // From line 76 to line 102, if statements in order to display correct icons in type card element
    if (activity.type==="social"){
    image.src = "./assets/images/social.png"

    } else if (activity.type==="diy"){
    image.src = "./assets/images/diy.png"

    } else if (activity.type==="busywork"){
    image.src = "./assets/images/busywork.png"

    } else if (activity.type==="charity"){
    image.src = "./assets/images/charity.png"

    } else if (activity.type==="cooking"){
    image.src = "./assets/images/cooking.png"

    } else if (activity.type==="education"){
    image.src = "./assets/images/education.png"

    } else if (activity.type==="music"){
    image.src = "./assets/images/music.png"

    } else if (activity.type==="recreational"){
    image.src = "./assets/images/recreational.png"

    } else if (activity.type==="relaxation"){
    image.src = "./assets/images/relaxation.png"

    // Code in order to display no activity text when no activity meets parameters
    } else if (activity){
      noAct.style.display = "block";
      main.style.display = "none";
    }
    }
  );

// Weather fetching 
const apiKey = "fd4520c83ce363d53b2477e844a3ab5f";

var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);

var weatherIcon = document.querySelector("#icon")
weatherIcon.style.display = "none"

function getApi() {
  var cityName = document.getElementById("citynameField").value;
  var geoRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
  
  fetch(geoRequestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data){
      var weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`;
      fetch(weatherRequestUrl)
      .then(function (response) {
        return response.json();
      }).then(function (data){
        console.log(data);
        weatherIcon.style.display = "block";
        weatherIcon.setAttribute(`src`, `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("weather-display").style.display = "block";
      });
    }).catch(function(){
      var alert = document.getElementById("modal-js-example");
      alert.classList.add("is-active");
    }); 
    
}

