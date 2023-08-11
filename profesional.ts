export class Profesional{
    public name: string;
    public age: number;
    public welght: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    public photo: string;

    constructor (nombre:string, edad:number, wel: number, hei: number, retirado: boolean, nacionalidad: string, oscar: number, profesion: string, foto: string){
        this.name = nombre;
        this.age = edad;
        this.welght = wel;
        this.height = hei;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = oscar;
        this.profession = profesion;
        this.photo = foto;
    }

    toString(): string{
        return "Nombre: "+ this.name+ ", \n age: "+ this.age+ ", \n welght: "+ this. welght + ",\n height: "+ this.height + ",\n retirado: "+ this.isRetired + ",\n nationality: "+ this.nationality + ", \n oscar Number: "+ this.oscarsNumber + ",\n profesion: "+ this.profession;
    }
}

