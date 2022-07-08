import {Product} from '../../models/model.js';

class ProductController {
    // ADD PRODUCT
    async addAnProduct(req,res){
        try {
            const newProduct = new Product(req.body);
            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct);
        }catch(err) {
            res.status(500).json(err);
        }
    };
    // GET ALL PRODUCTS
    async getAllProducts(req,res){
        try{
            const products = await Product.find();
            res.status(200).json(products);
        } catch(err) {
            res.status(500).json(err);
        }
    };
    // GET AN PRODUCT
    async getAnProduct(req,res){
        try{
            const product = await Product.findById(req.params.id).populate("product_name");
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err);
        }
    };
    // UPDATE AN PRODUCT
    async updateAnProduct(req,res){
        try{
            const product = await Product.findById(req.params.id);
            await product.updateOne({$set: req.body});
            res.status(200).json("Update Product Successful");
        }catch(err){
            res.status(500).json(err);
        }
    };
    // DELETE AN PRODUCT
    async deleteAnProduct(req, res){
        try{
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Product Successful");
        }catch(err) {
            res.status(500).json(err);
        }
    };
};

export default ProductController = new ProductController;

// if(req.body.user) {
//     const user = User.find({user_id: req.body.user})
// await user.updateOne({$push: products: saveProduct._product_id});
//}
//  // OR
 
// if(req.body.user) {
//     const user = User.findById(req.body.user);
// }

