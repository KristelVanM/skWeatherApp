//get user location -- not necessary

var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45f97520bd39e147cf6fa52afd05b530";
/*
(function (){ 
    document.getElementById("askLocation").addEventListener("input", function (event){
        console.log(event.target.value);
        fetch(url)
        .then(response => console.log(response.body));

        
    })

}

)()*/

(function (){ 
    document.getElementById("askLocation").addEventListener("input", async function (event){
        console.log(event.target.value);
        var data = await fetch(url);
        var newData = await data.json();
        console.log(newData);
        

        
    })

}

)()
//load initial page




//ask to type in city



//request weather data for the coordinates using an online weather API

/*
function getWeatherInfo (){
    const long = App.city.longitude;
    const lat = App.city.latitude;
    const url = "api.openweathermap.org/data/2.5/weather?q=" + lat + "," + long + "?callback=?";

}
*/