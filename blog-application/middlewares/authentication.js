const { tokenValidation } = require('../services/authentication.js')

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName]

        if (!tokenCookieValue) return next();

        try {
            const userPayload = tokenValidation(tokenCookieValue)
            req.user = userPayload
        }
        catch(error){}
        next()
    }
}

module.exports = {
    checkForAuthenticationCookie
}