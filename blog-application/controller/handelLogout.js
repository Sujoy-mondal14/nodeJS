function handelLogout(req, res) {
    res.clearCookie('token').redirect('/')
}

module.exports = {
    handelLogout,
}