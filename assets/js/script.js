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

var apiurl = 'http://www.boredapi.com/api/activity/';

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

    }
    });


console.log(accessibility)