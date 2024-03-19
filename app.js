const apikey="b79618a28a67354c15c7d212463f24e1";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
async function checkwheather(city){
    
        const response= await fetch(url+city+`&appid=${apikey}`) ;
        const data= await response.json ();
        console.log(data) ;
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
        
}
searchBtn.addEventListener('click', ()=>{
          
checkwheather(searchBox.value)
})