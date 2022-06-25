import { v4 as uuidv4 } from 'uuid';

let users = [
    // {
    //     firstname: "Vu",
    //     lastname: "Nguyen",
    //     age: 20
    // },
    // {
    //     firstname: "Khang",
    //     lastname: "Huynh",
    //     age: 20
    // }
]

export const getUsers = (req,res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    //const userId = uuidv4();
    
    //const userWithId = { ...user, id: uuidv4() };

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstname} added to the database!`);

};


export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);


    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    

    // ViKhang 234
    // ham filter tra ve false thi tuc la user can phai xoa
    users= users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    const {id} =  req.params;
    const {firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);
    
    if(firstname)
        user.firstname = firstname;
    if(lastname)
        user.lastname = lastname;
    if(age)
        user.age = age;

    res.send(`User with the id ${id} has been updated.`);

}