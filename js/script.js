//get user location -- not necessary

var url = "http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=45f97520bd39e147cf6fa52afd05b530";

/*
//met Thijs:
(function (){ 
    document.getElementById("askLocation").addEventListener("input", function (event){
        console.log(event.target.value);
        fetch(url)
        .then(response => console.log(response.json()));

        
    })

}

)()

//met claas:
(function (){ 
    document.getElementById("askLocation").addEventListener("input", async function (event){
        console.log(event.target.value);
        var data = await fetch(url);
        var newData = await data.json();
        console.log(newData);
    })

}

)()
*/


(function (){ 
    document.getElementById("askLocation").addEventListener("input", async function (event){
        console.log(event.target.value);
        let inputValue = event.target.value;
        let dynamicUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&APPID=45f97520bd39e147cf6fa52afd05b530`;

        var data = await fetch(dynamicUrl);
        var newData = await data.json();
        var list=newData.list;
        console.log(newData.list);
        list.forEach(el => {
            console.log(el.main.temp);
        });

        if(newData.cod === 200){ // If http respons status code = 200, then the request was successfull
            let message = `It's ${newData.main.temp} degrees Celsius in ${newData.name}`;
            console.log(message);
            document.getElementById("result").value = message;
        
           
        /*
            //werktniet:
        let maintemp = `${newData.[""0""].main.temp}`;
        console.log(maintemp);
        //document.getElementById("mainTemp").value = list;
        document.querySelector([""0""].main.temp).value = maintemp;
*/

        
        }
        else{
            let errorMessage = newData.message;
            console.log(`An error occured : ${errorMessage}`);
            document.getElementById("result").value = "City not found";
        }
    });
}

)()


//load initial page




//ask to type in city



//request weather data for the coordinates using an online weather API

