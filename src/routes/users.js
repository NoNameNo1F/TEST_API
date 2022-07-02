import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../app/controllers/users.js';
// const express = require('express');
// const { createUser, getUsers, getUser, deleteUser, updateUser } = require('../app/controllers/users.js');
const router = express.Router();


// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/',createUser);

// /users/2 => req.params { id: 2}
//=================================== GET / POST / PATCH DATA ============
router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id', updateUser);
//====================================================================

export default router;
//module.exports = router;