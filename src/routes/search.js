import express from 'express';

import searchController from '../app/controllers/SearchController.js';

const router = express.Router();

router.get('/',searchController.index);
//router.get('/',searchController.return);
export default router;