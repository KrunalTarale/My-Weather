
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4dd944bfb5mshc8d589363474b75p1d5704jsn2fb4002f7527',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function city_inpt(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
    
            document.querySelector(".city_head").innerHTML = city;
            document.querySelector(".temp").innerHTML = response.temp + "&#8451;";
            document.querySelector("#max_temp").innerHTML = response.max_temp + "&#8451;";
            document.querySelector("#min_temp").innerHTML = response.min_temp + "&#8451;";
            document.querySelector("#humidity").innerHTML = response.humidity + "&#8451;";
            document.querySelector("#wind_speed").innerHTML = response.wind_speed + "Km/sec";
            document.querySelector("#wind_degree").innerHTML = response.wind_degrees + "&#8451;";
            document.querySelector("#feels_like").innerHTML = response.feels_like + "&#8451;";
            document.querySelector("#Sunrise").innerHTML = response.sunrise + "mins";
            document.querySelector("#Sunset").innerHTML = response.sunset + "mins";

            var a = response.temp;

            if (0 < (response.temp) && response.temp <= 10) {
                document.querySelector(".container1").classList.add("img1");
            }
            else if (10 < (response.temp) && response.temp <= 20) {
                document.querySelector(".container1").classList.add("img3");
            }
            else if (20 < (response.temp) && response.temp <= 30) {
                document.querySelector(".container1").classList.add("img3");
            }
            else if (30 < (response.temp) && response.temp <= 40) {
                document.querySelector(".container1").classList.add("img4");
            }
            else if (40 < (response.temp) && response.temp <= 50) {
                document.querySelector(".container1").classList.add("img5");
            }
        })
        .catch(err => console.error(err));
}

Submit.addEventListener("click", (e) => {
    e.preventDefault();
    city_inpt(city.value)
})

var head_length = $("h3").length;

     // This program is use to add corusel_heads into the <h3> element...
$("h3").addClass("corusel_heads");

$(".carousel-item").click(function () {
    $(".corusel_heads").click(function () {
        var corusel_heads = this.innerHTML;
        city_inpt(corusel_heads);
    })
})

var country_names = []
for (let i = 0; i < head_length; i++) {
    var items = document.querySelectorAll(".corusel_heads")[i].innerHTML;
    country_names.push(items)
}

city_inpt("Delhi");

    for(let i = 0; i < head_length; i++){
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+country_names[i], options)
        .then(response => response.json())
        .then(response => {
            document.querySelectorAll(".corusel_temp")[i].innerHTML =  response.temp+ "&#8451;";
            if(response.temp <= 0){
                document.querySelectorAll(".material-symbols-outlined")[i].innerHTML = "ac_unit"
            }
            else if (response.temp > 0 && response.temp <= 10){
                document.querySelectorAll(".material-symbols-outlined")[i].innerHTML = "severe_cold"
            }
            else if(response.temp > 10 && response.temp <= 20){
                document.querySelectorAll(".material-symbols-outlined")[i].innerHTML = "thermostat";
            }
            else if(response.temp > 20 && response.temp <= 30){
                document.querySelectorAll(".material-symbols-outlined")[i].innerHTML = "sunny_snowing"
            }
            else if(response.temp > 30 && response.temp <= 40){
                document.querySelectorAll(".material-symbols-outlined")[i].innerHTML = "sunny"
            }
        })
        .catch(err => console.error(err));
    }




