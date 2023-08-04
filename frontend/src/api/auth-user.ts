import { BACKEND_URL } from "../constants/url";
import { Favorites } from "../interfaces/User";

const authRoute = "api/auth";
export const authUser = async (user: string, password: string) => {
  return await fetch(`${BACKEND_URL}${authRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario: user, password }),
  })
    .then(async (res) => await res.json())
    .then(({ user, token }) => ({
      user: {
        id: user.id,
        nombres: user.nombres,
        primerApellido: user.primerApellido,
        segundoApellido: user.segundoApellido,
        usuario: user.usuario,
      },
      token,
    }));
};

type GetDetailsProps = {
  userId: string;
  token: string;
};

export const getDetails = async ({ userId, token }: GetDetailsProps) => {
  return await fetch(`${BACKEND_URL}${authRoute}/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  })
    .then(async (res) => await res.json())
    .then((user) => ({
      user: {
        id: user.id,
        nombres: user.nombres,
        primerApellido: user.primerApellido,
        segundoApellido: user.segundoApellido,
        usuario: user.usuario,
        favorites: [...user.favorites.map((f: Favorites) => f.movie)],
      },
    }));
};
