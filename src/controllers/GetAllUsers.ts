import User from "../models/User"


const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users
    } catch (error) {
        console.log( error )
    }
}

export default getAllUsers;