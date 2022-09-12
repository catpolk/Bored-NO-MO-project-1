var act = document.querySelector("#activity")
var accessibility = document.querySelector("#accessibility")
var type = document.querySelector("#type")
var participants = document.querySelector("#participants")
var price = document.querySelector("#price")
var imgtype = document.querySelector("#imgtype")

var diy = document.querySelector("#diy")
var busywork = document.querySelector("#busywork")
var charity = document.querySelector("#charity")
var cooking = document.querySelector("#cooking")
var education = document.querySelector("#education")
var music = document.querySelector("#music")
var recreational = document.querySelector("#recreational")
var relaxation = document.querySelector("#relaxation")
var social = document.querySelector("#social")

var select1 = document.querySelector("#select1")
var select2 = document.querySelector("#select2")
var select3 = document.querySelector("#select3")
var select4 = document.querySelector("#select4")

var noact = document.querySelector("#noact")
var main = document.querySelector("main")

noact.style.display = "none"; 

var button = document.querySelector("#submit")

button.addEventListener("click", function(){
  var typevalue= select1.value
  localStorage.setItem("typevalue", typevalue)
  var pricevalue= select2.value
  localStorage.setItem("pricevalue", pricevalue)
  var participantsvalue = select3.value
  localStorage.setItem("participantsvalue", participantsvalue)
  var accessvalue = select4.value
  localStorage.setItem("accessvalue",accessvalue)
});

$("#select1").val(localStorage.getItem("typevalue"));
$("#select2").val(localStorage.getItem("pricevalue"));
$("#select3").val(localStorage.getItem("participantsvalue"));
$("#select4").val(localStorage.getItem("accessvalue"));

var typeurl = (localStorage.getItem("typevalue"))
var priceurl = (localStorage.getItem("pricevalue"))
var parturl = (localStorage.getItem("participantsvalue"))
var accessurl = (localStorage.getItem("accessvalue"))

var apiurl = 'https://cors-everywhere.herokuapp.com/http://www.boredapi.com/api/activity?type='+ typeurl +'&price='+ priceurl +'&participants=' + parturl +'&accessibility='+ accessurl+'';

fetch(apiurl)
.then((response)=> response.json())
.then((data)=> {
    var activity = data;
    console.log(activity)
    act.textContent = activity.activity;
    accessibility.textContent = activity.accessibility;
    type.textContent = activity.type;
    participants.textContent = activity.participants;
    price.textContent = activity.price
    
    if (activity.type==="social"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "block";
    diy.style.display = "none";

    } else if (activity.type==="diy"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "block";

    } else if (activity.type==="busywork"){
    busywork.style.display = "block";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="charity"){
    busywork.style.display = "none";
    charity.style.display = "block";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="cooking"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "block";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="education"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "block";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="music"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "block";
    recreational.style.display = "none";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="recreational"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "block";
    relaxation.style.display = "none";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity.type==="relaxation"){
    busywork.style.display = "none";
    charity.style.display = "none";
    cooking.style.display = "none";
    education.style.display = "none";
    music.style.display = "none";
    recreational.style.display = "none";
    relaxation.style.display = "block";
    social.style.display = "none";
    diy.style.display = "none";

    } else if (activity){
      noact.style.display = "block";
      main.style.display = "none";
    }
  
    }
  );

//weather fetching 
const apiKey = "fd4520c83ce363d53b2477e844a3ab5f";

var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getApi);

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
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("weather-display").style.display = "block";
      });
    }).catch(function(){
      alert('City entered incorrectly');
    }); 
    
}

