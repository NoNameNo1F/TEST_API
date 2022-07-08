import express from 'express';

import userController from '../app/controllers/UserController.js';

const router = express.Router();


// all routes in here are starting with /users
router.get('/', userController.getAllUsers);
router.post('/',userController.addAnUser);
router.get('/:id', userController.getAnUser);
router.patch(':id',userController.updateAnUser);
router.delete('/:id',userController.deleteUser);
// router.post('/',createUser);

// /users/2 => req.params { id: 2}
//=================================== GET / POST / PATCH DATA ============
// router.get('/:id',getUser);

// router.delete('/:id',deleteUser);

// router.patch('/:id', updateUser);
//====================================================================

export default router;
