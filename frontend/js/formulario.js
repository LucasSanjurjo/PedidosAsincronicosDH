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
      rating.value = parseFloat(data.rating);
      awards.value = parseInt(data.awards);
      release_date.value = date.toISOString().slice(0, 10);
      length.value = data.length || 0;
    });

  let botonEditar = document.getElementById("editar");
  botonEditar.addEventListener("click", function (e) {
    let body = {
      title: document.querySelector("#title").value,
      rating: document.querySelector("#rating").value,
      awards: document.querySelector("#awards").value,
      release_date: document.querySelector("#release_date").value,
      length: document.querySelector("#length").value,
    };

    let configuracion = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: headers,
    };

    fetch("http://localhost:3031/api/movies/update/8", configuracion)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (res) {
        "success:", res;
      })
      .catch(function (error) {
        "error:", error;
      });
  });

  let botonCrear = document.getElementById("editar");

  botonCrear.addEventListener("click", function (e) {
    let body = {
      title: document.querySelector("#title").value,
      rating: document.querySelector("#rating").value,
      awards: document.querySelector("#awards").value,
      release_date: document.querySelector("#release_date").value,
      length: document.querySelector("#length").value,
    };

    let configuracion = {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    };

    fetch("http://localhost:3031/api/movies/create", configuracion)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (res) {
        "success:", res;
      })
      .catch(function (error) {
        "error:", error;
      });
  });
};
