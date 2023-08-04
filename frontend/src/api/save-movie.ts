import { BACKEND_URL } from "../constants/url";
import { Movie } from "../interfaces/Movie";

type SaveMovieProps = {
  userId: string;
  movie: Movie;
  token: string;
};

const movieRoute = "api/movie";
export const saveMovie = async ({ userId, movie, token }: SaveMovieProps) => {
    console.log(userId, token, movie.id)
  return await fetch(`${BACKEND_URL}${movieRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ userId, movie }),
  })
    .then(async (res) => await res.json())
    .then(({ message }) => ({ message }));
};
