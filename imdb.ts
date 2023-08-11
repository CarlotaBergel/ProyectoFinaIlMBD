import { Movie } from "./movie";

export class Imdb{
    public peliculas: Movie[];
    
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero:string):void{
        let fs = require ("fs");
        fs.writeFileSync(nombreFichero, JSON.stringify(this));

    }
    
    ObtenerInstanciaIMDB(nombreFichero:string):Imdb{
        
        let fs = require ("fs");
        let JSONObject = fs.readFileSync(nombreFichero);
        let objeto = JSON.parse(JSONObject);

        return objeto;
    }


}