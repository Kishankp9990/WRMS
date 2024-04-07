const user = require('../models/user');

module.exports.home = function (req, res) {
    user.find({}).populate('complaint').exec(function (err, user) {

        return res.render('homepage', {
            title: "Home",
            users: user
        })
    }
    )
   
    
}