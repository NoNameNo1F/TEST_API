import express from 'express';

import newsController from '../app/controllers/NewsController.js';

const router = express.Router();


router.get('/',newsController.index);
router.get('/:slug',newsController.show);

export default router;