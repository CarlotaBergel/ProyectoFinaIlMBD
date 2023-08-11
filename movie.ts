import { Profesional } from "./profesional";

export class Movie{
    public title: string;
    public releaseYear: number;
    public actors: string[];
    public nacionality: string;
    public director: string[];
    public writer: string[];
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;
    public photo: string;

    constructor (titulo:string, añoPublicacion: number, nacionalidad: string, genero: string, foto:string){
        this.title = titulo;
        this.releaseYear = añoPublicacion;
        this.nacionality = nacionalidad;
        this.language = "Español";
        this.genre = genero;
        this.photo = foto;

    }

    toString(): string{
        return "Título: " + this.title + ",\n Año de publicación: " + this.releaseYear + ",\n Actores: " + this.actors + ",\n Nacionalidad " + this.nacionality + ",\n Director " + this.director + ",\n Escritor: " + this.writer + ",\n Lenguaje: " + this.language + ",\n Plataforma: " + this.plataforma + ",\n Universo Marvel: " + this.isMCU + ",\n Protagonista principal: " + this.mainCharacterName + ",\n Productor: " + this.producer + ",\n Distribuidor: " + this.distributor + ",\n Género: " + this.genre;
    }
}

