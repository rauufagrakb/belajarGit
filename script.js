async function logMovies() {
  try {
    const response = await fetch("data/siswa.json");
    const movies = await response.json();
    //console.log(movies);
    return movies;
  } catch (error) {
    return new Error("Salaha goblok");
  }
  
}
const data = document.getElementsByTagName("a");
logMovies().then((response)=>{
  console.log(response[0].nama)
}).catch((error)=>{
  console.log('datane ora bener mas')
})
console.log("macan")
// percobaan ya gesya


