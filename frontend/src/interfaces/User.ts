import { Movie } from "./Movie";

export interface User {
    id: Number,
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    usuario: string;
    favorites?: Movie[]
}

export interface Favorites {
    movie: Movie;
}