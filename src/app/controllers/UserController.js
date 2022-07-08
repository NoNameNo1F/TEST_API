import {User} from '../../models/model.js';

class UserController {
    // ADD USER
    async addAnUser (req, res) {
        try{
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        }catch(err){
            res.status(500).json(err);
        }
    };
    // GET ALL USERS
    async getAllUsers(req,res) {
        try{
            const users = await User.find();
            res.status(200).json(users);
        }catch(err) {
            res.status(500).json(err);
        }
    };

    //GET AN USER
    async getAnUser(req,res) {
        try{
            const user = await User.findById(req.params.id).populate("user_name");
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    };

    // UPDATE AN USER
    async updateAnUser(req,res) {
        try{
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: req.body});
            res.status(200).json("Updated User Successful!");
        }catch(err){
            res.status(500).json(err);
        }
    };
    // DELETE AN USER
    async deleteUser(req, res) {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted User Successful!");
        }catch(err){
            res.status(500).json(err);
        }
    };
};

export default UserController = new UserController;
