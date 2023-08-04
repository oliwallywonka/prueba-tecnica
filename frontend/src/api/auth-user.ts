import { BACKEND_URL } from "../constants/url";

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

//export const getUserDetails;
