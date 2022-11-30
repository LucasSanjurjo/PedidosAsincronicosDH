window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  fetch("http://localhost:3031/api/movies/")
    .then(function (res) {
      // este then toma la respuesta a travez de un callback y lo convierte en json.
      return res.json();
    })
    .then(function (peliculas) {
      // toma el resultado del anterior then, y procesa le recibido. en este caso son datos concretos(peliculas)
      let listadoDePeliculas = peliculas.data;

      listadoDePeliculas.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
      });
    });
};
