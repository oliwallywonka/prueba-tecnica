const jwt = require("jsonwebtoken");
const { findOne, findDetails } = require("../repositories/user.repository");
const { userNotFoundError, validationAuthError } = require("../errors/auth.error");

exports.authService = async (usuario, password) => {
  try {
    const userFound = await findOne(usuario);
    if (!userFound) throw new userNotFoundError();
    if (password === userFound.password) throw new validationAuthError();
    const token = jwt.sign(
      { id: userFound.id },
      process.env.SECRET || "SECRET_TOKEN",
      {
        expiresIn: 3600,
      }
    );
    const user = {
      id: userFound.id,
      nombres: userFound.nombres,
      primerApellido: userFound.primerApellido,
      segundoApellido: userFound.segundoApellido,
      usuario: userFound.usuario,
      favorites: userFound.favorites,
    }
    return { user , token };
  } catch (e) {
    console.log(e)
    throw e;
  }
};

exports.getUserDetails = async (userId) => {
  try {
    const userFound = await findDetails(userId);
    if (!userFound) throw new userNotFoundError();
    return userFound;
  } catch (e) {
    throw e;
  }
}

