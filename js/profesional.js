"use strict";

$(document).ready(function(){

    var Profesional = /** @class */ (function () {
        function Profesional(nombre, edad, nacionalidad, oscar, profesion, foto) {
            this.name = nombre;
            this.age = edad;
            this.nationality = nacionalidad;
            this.oscarsNumber = oscar;
            this.profession = profesion;
            this.photo = foto;
        }
        Profesional.prototype.toString = function () {
            return "Nombre: " + this.name + ", \n age: " + this.age + ", \n welght: " + this.welght + ",\n height: " + this.height + ",\n retirado: " + this.isRetired + ",\n nationality: " + this.nationality + ", \n oscar Number: " + this.oscarsNumber + ",\n profesion: " + this.profession;
        };
        return Profesional;
    }());

    let profesional1 = new Profesional("David Fincher",60,"Colorado",3,"Director","https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcThOKabXeeKQobJywteU55FQR7oFnxmrz7vVZiRceHjA21pIRlWx7x0fbUv-uR7lzdH");

    let profesional2 = new Profesional("Keanu Reeves",58,"Libano",0,"Actor","https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQiwkRwBZZilFY6LsATxJCbqIvQ2LddvedkG7mrYur5hU7Uhcbgjr0PCeztfW4YdMkq");

    let profesional3 = new Profesional("José Luis Acosta",62,"España",3,"Guionista","https://m.media-amazon.com/images/M/MV5BNWIwYTI2YTYtZDJjMC00ODllLWFhMWUtNjA0ODU5ZWJhNDZmXkEyXkFqcGdeQXVyNjQyMDMyMDM@._V1_QL75_UY207_CR34,0,140,207_.jpg");

    let profesional4 = new Profesional("Jennifer Aniston",54,"los Angeles",1,"Actriz","https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTyLqLQBAt_AQWl2SAOCGnO9H2KdCOpMama6C6J3cP5-KKsqeOygSQ9scOwtSIDao9g");

    let profesionalTotal = [profesional1, profesional2, profesional3, profesional4];

    addProfesionalBBDD(profesionalTotal);

    function addProfesionalBBDD(profesionalTotal){

        for(let i = 0; i < profesionalTotal.length; i++){
            let card = newCard(profesionalTotal[i]);
            addProfesional(card);
        }

    }

    function newCard(profesional){

        let cardHtml = `
            <div class="card" style="width: 18rem;">
            <img src="${profesional.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${profesional.name}</h5>
              <p class="card-text">Edad: ${profesional.age}</p>
              <p class="card-text">Nacionalidad: ${profesional.nationality}</p>
              <p class="card-text">Oscars: ${profesional.oscarsNumber}</p>
              <p class="card-text">Profesion: ${profesional.profession}</p>
            </div>
            </div>`;

        return cardHtml;
        
    }

    function addProfesional(profesional){

        $("main").append(profesional);
    }

})
