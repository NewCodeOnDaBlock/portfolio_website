const UserController = require('../controllers/user.controllers');

module.exports = app => {
    
    app.post('/api/users', UserController.createNewUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.delete('/api/uers/:id', UserController.deleteAnExistingUser);
    app.delete('/api/users', UserController.deleteAllExistingUsers);
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);

}