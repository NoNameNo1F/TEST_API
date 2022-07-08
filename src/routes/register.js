import express from 'express';

import registerController from '../app/controllers/RegisterController.js';

const router = express.Router();

router.get('/',registerController.index);

export default router;