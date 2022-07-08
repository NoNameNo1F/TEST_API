import mongoose from 'mongoose';
import validator from 'validator';


//type: mongoose.Schema.Types.ObjectID, = another object schema
//ref:"nameObj"

//books: [{ type: mongoose.Schema.Types.ObjectID, ref:"Book"}]
const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_username: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: false,
        unique: true,
        lowercase: true,
        validate: (value) =>{
            return validator.isEmail(value);
        }
    },
    user_phone: {
        type: String,
        required: false,
        unique: false,
        number: true,
        validate: (value) =>{
            return validator.isMobilePhone(value);
        }
    },
    user_address: {
        type: String,
        required: false
    },
    user_password: {
        type: String,
        required: true,
        unique: false,
        lowercase: true
    },
    user_avatar: {
        type: String,
        required: false,
        validate: (value) =>{
            return validator.isURL(value,{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: true });
        }
    },
    user_gender: {
        type: Boolean,
        required: false
    }
});

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_describe: {
        type: String
    },
    product_img: {
        type: String,
        validate: (value) =>{
            return validator.isURL(value,{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: true });
        }
    },
    product_price: {
        type: Number,
        required: true
    },
    product_sales: {
        type: Number,
    },
    product_stock: {
        type: Number,
        required: true
    }
});

export let Product = mongoose.model('Product', ProductSchema);
export let User = mongoose.model('User',UserSchema); 