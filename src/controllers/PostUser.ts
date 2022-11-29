import User from "../models/User"

const postUser = async (name: string, lastName: string, userName:string, email: string, hashedPass: string) => {

    let existingUser;

    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        console.log( error )
    }

    if (existingUser) throw new Error( "User already exist" )

    const newUser = new User(
        {
            name,
            lastName,
            userName,
            email,
            hashedPass
        })
    const createdUser = await newUser.save()

    return createdUser
};


export default postUser;