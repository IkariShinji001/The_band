var slider = document.querySelector('.slider');
var sliderLocation = document.querySelector('.slider-location');
var sliderSpeech = document.querySelector('.slider-speech');
var search = document.querySelector('.search');
var header = document.querySelector('.header');
var navbar = document.querySelector('.nav-bar');
var headerHeight = header.clientHeight;

var sliders = [];

sliders[0] = "url('https://www.w3schools.com/w3images/Chicago.jpg')";
sliders[1] = "url('https://www.w3schools.com/w3images/la.jpg')";
sliders[2] = "url('https://www.w3schools.com/w3images/ny.jpg')";

var sliderLocations =[];

sliderLocations[0] = "Chicago";
sliderLocations[1] = "Los Angeles";
sliderLocations[2] = "New York";

var sliderSpeechs = [];
 sliderSpeechs[0] = "Thank you, Chicago - A night we won't forget.";
 sliderSpeechs[1] = "We had the best time playing at Venice Beach!";
 sliderSpeechs[2] = "The atmosphere in New York is lorem ipsum";

var i = 0;

console.log(sliders.length);
function changeImg(){
    slider.style.backgroundImage = sliders[i];
    sliderLocation.innerHTML = sliderLocations[i];
    sliderSpeech.innerHTML = sliderSpeechs[i]

    if(i < sliders.length - 1)
    {
        i++;
    }else{
        i = 0;
    }

}

setInterval(changeImg, 3000);


    search.onclick = function(){
        var isClose = header.clientHeight === headerHeight;
        if(isClose){
            header.style.height = 'auto';
        }else{
            header.style.height = null;
        }
    }