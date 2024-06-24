const { getDbUser } = require('../model/user');

exports.getUser = (req, res) => {
    const user = getDbUser();
    res.render('user', {user})
}