import { BACKEND_URL } from "../constants/url";

const authRoute = "api/auth";
export const authUser = async (user: string, password: string) => {
  return await fetch(`${BACKEND_URL}${authRoute}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => await res.json())
    .then((res) => res.token);
};
