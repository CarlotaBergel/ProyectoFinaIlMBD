"use strict";

$(document).ready(function(){

    var Movie = /** @class */ (function () {
        function Movie(titulo, añoPublicacion, nacionalidad, genero, foto) {
            this.title = titulo;
            this.releaseYear = añoPublicacion;
            this.nacionality = nacionalidad;
            this.language = "Español";
            this.genre = genero;
            this.photo = foto;
        }
        Movie.prototype.toString = function () {
            return "Título: " + this.title + ",\n Año de publicación: " + this.releaseYear + ",\n Actores: " + this.actors + ",\n Nacionalidad " + this.nacionality + ",\n Director " + this.director + ",\n Escritor: " + this.writer + ",\n Lenguaje: " + this.language + ",\n Plataforma: " + this.plataforma + ",\n Universo Marvel: " + this.isMCU + ",\n Protagonista principal: " + this.mainCharacterName + ",\n Productor: " + this.producer + ",\n Distribuidor: " + this.distributor + ",\n Género: " + this.genre;
        };
        return Movie;
    }());


    let movie1 = new Movie("Barbie",2023,"Americana","Comedia","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcdUv-_3wCXtGjAnRzuJpBIHGflR7R6TKGPFM8MvXy_qMmwZF");

    let movie2 = new Movie("EL hombre del norte",2022,"americana","Accion","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4ymB9HVHjgucEAxHG3RY40oNcuwgpvkyq_SE1MGqKR76aHpwx");

    let movie3 = new Movie("Super Mario Bros",2023,"Estados unidos","Aventura","https://dx35vtwkllhj9.cloudfront.net/universalstudios/super-mario-bros/images/regions/us/onesheet.jpg");

    let movie4 = new Movie("Minions",2015,"China","Infantil","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN5h6NzRUvBsqF34Mi3BXaIFqYxgk6pEJk5bS-DO8_LFel3YpS");

    let moviesTotal = [movie1, movie2, movie3, movie4];

    addPeliculasBBDD(moviesTotal);

    function addPeliculasBBDD(moviesTotal){

        for(let i = 0; i < moviesTotal.length; i++){
            let card = newCard(moviesTotal[i]);
            addPelicula(card);
        }

    }

    function newCard(movie){

        let cardHtml = `
            <div class="card" style="width: 18rem;">
            <img src="${movie.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Titulo: ${movie.title}</h5>
              <p class="card-text">Año lanzamiento: ${movie.releaseYear}</p>
              <p class="card-text">Nacionalidad: ${movie.nacionality}</p>
              <p class="card-text">Genero: ${movie.genre}</p>
            </div>
            </div>`;

        return cardHtml;
        
    }

    function addPelicula(pelicula){

        $("#peliculas").append(pelicula);

    }

    $("#cardForm").on("submit", function(e){
        e.preventDefault();

        let imagenPelicula = $("#imagenPelicula").val();
        let nombrePelicula = $("#nombrePelicula").val();
        let añoLanzamiento = $("#añoLanzamiento").val();
        let nacionalidad = $("#nacionalidad").val();
        let genero = $("#Genero").val();

        let pelicula = new Movie(nombrePelicula,añoLanzamiento,nacionalidad,genero,imagenPelicula);


        let card = newCard(pelicula);
        addPelicula(card);
    });
})
