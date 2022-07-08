import express from 'express';

import siteController from '../app/controllers/SiteController.js';
//import searchController from '../app/controllers/SearchController.js';
const router = express.Router();

// router.get('/search',searchController.index);
router.get('/',siteController.home);
export default router;