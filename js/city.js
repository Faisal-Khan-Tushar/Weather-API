const api_key=`8839f2368acd54c83f42dffba0ccc5ad
`;
const searchButton=document.getElementById('search-button');
const searchedCity = document.getElementById('search-input');
const spinner=document.getElementById('spinner');
searchButton.addEventListener('click',()=>{
  const searchedText = searchedCity.value ;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchedText}&appid=${api_key}&units=metric`;
  // console.log(url);
  spinner.style.display='block';
  fetch(url)
  .then(res=>res.json())
  .then(data=>showDetails(data))

})
const setInnerText=(id,text)=>{
  document.getElementById(id).innerText=text;
}
const showDetails=city=>{
  
  setInnerText('city',city.name)
  setInnerText('temperautre',city.main.temp)
  setInnerText('condition',city.weather[0].main)
  //setting dynamic image url
  const url=` http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  document.getElementById('image').setAttribute('src',url);
  console.log(city);
  searchedCity.value="";
  spinner.style.display='none';

}