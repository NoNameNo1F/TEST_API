import express from 'express';

import productController from '../app/controllers/ProductController.js';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.addAnProduct);
router.get('/:id', productController.getAnProduct);
router.patch('/:id', productController.updateAnProduct);
router.delete('/:id', productController.deleteAnProduct);
export default router;