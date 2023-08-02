
const jwt = require('jsonwebtoken')

exports.authUser = async (req, res) => {
    const { user, password } = req.body;
    try {
        jwt.sign({ id: '12345' }, process.env.SECRET || 'SECRET_TOKEN', {
            expiresIn: 3600,
        }, async (error, token) => {
            if (error) throw new Error('TOKEN_ERROR')

            newToken = { token }
            return res.json({ token });
        })
    } catch (e) {

    }
}