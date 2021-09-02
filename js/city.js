const cityInput = document.getElementById('city-input');
const api_key=`8839f2368acd54c83f42dffba0ccc5ad
`;

const searchTemperature=()=>{
const searchText=cityInput.value ;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${api_key}`;
// console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>showTemperature(data))


}
const showTemperature = temperature=>{
  console.log(temperature);
}