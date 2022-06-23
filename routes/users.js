import express from 'express';

const router = express.Router();

const users = [
    {
        firstname: "Vu",
        lastname: "Nguyen",
        age: 20
    },
    {
        firstname: "Khang",
        lastname: "Huynh",
        age: 20
    }
]
// all routes in here are starting with /users
router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});

export default router;