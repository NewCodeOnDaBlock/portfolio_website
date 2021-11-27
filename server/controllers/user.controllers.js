const User = require("../models/user.models");

module.exports.createNewUser = (request, response) => {
    User.create(request.body)
        .then(newlyCreatedUser => response.json({ user: newlyCreatedUser }))
        .catch(error => response.status(400).json(error));
};

module.exports.updateExistingUser= (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedUser=> response.json({ user: updatedUser }))
        .catch(error => response.status(400).json(error));
};

module.exports.deleteAnExistingUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deletedUser => response.json({ result: deletedUser }))
        .catch(error => response.json({ message: "Something went wrong", error: error })); // this is a validator for the postman message (backend)
};

module.exports.deleteAllExistingUsers = (request, response) => {
    User.deleteMany()
        .then(deletedUsers => response.json({ result: deletedUsers }))
        .catch(error => response.json({ message: "Something went wrong", error: error }));

};


module.exports.findAllUsers = (request, response) => {
    User.find()
        .then(allUsers => response.json({ users: allUsers }))
        .catch(error => response.json({ message: "Something went wrong", error: error }));

};

module.exports.findOneSingleUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(oneSingleUser=> response.json({ user: oneSingleUser }))
        .catch(error => response.json({ message: "Something went wrong", error: error }));

};