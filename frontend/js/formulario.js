window.onload = () => {
  fetch("http://localhost:3031/api/movies/8")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (pelicula) {

      let data = pelicula.data;
      
      let title = document.getElementById("title");
      let rating = document.getElementById("rating");
      let awards = document.getElementById("awards");
      let release_date = document.getElementById("release_date");
      let length = document.getElementById("length");
      
      
      title.value = data.title;
      rating.value = data.rating;
      awards.value = data.awards;
      release_date.value = date.release_date;
      length.value = data.length || 0 ;
      
      
      let date = new Date(data.release_date);
      
    });
};
