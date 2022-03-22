function movi(){
fetch(`https://imdb-api.com/en/API/Top250Movies/k_yu21uj9g`)
.then((response)=>{
      return response.json()
})
.then((data)=>{
         console.log(data)
})
.catch((error)=>{
      console.log(error)
});
}