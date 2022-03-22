function fetchWeather(){
    var city=document.getElementById("temp").value
    console.log(city)
    var request=  new XMLHttpRequest()
    var apikey="2bfd3d605ce497299b21166fbd405a85"
    
request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=2bfd3d605ce497299b21166fbd405a85`,true)

request.onload=function(){
    var result= JSON.parse(this.response)
    console.log(result)

}
request.send()
console.log("Fetching...")
}