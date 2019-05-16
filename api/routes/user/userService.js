'use strict';

const User = require('./userModel').model;

exports.createUser = async (email, password) => {
    console.log("CREATE USER");
    console.log("Email: ", email);
    console.log("Password: ", password);

    const user = new User({
        email,
        password
    })
    try {
        // save it
        const doc = await user.save()
        return doc;
    } catch (e) {}
}

exports.findUser = async (email, password) => {
    console.log("FIND USER");
    console.log("Email: ", email);
    console.log("Password: ", password);

    const user = await User.findOne({
        email
    })

    const match = await user.comparePassword(password)

    try {
        if (match) {
            // send back the user
            return user;
        } else {
            // no match, send back a 401
            return 'unauthorized';
        }
    } catch (err) {
        console.error(err);
    }
}