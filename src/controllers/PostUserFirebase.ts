import User from "../models/User"

const postUserFirebase = async (given_name: string, family_name: string, email: string) => {

    let existingUser;

    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        console.log( error )
    }

    if (existingUser) throw new Error( "User already exist" )
    let usern = email.slice(0,13)

    const newUser = new User(
        {
            name: given_name,
            lastName: family_name,
            userName: usern,
            email,
            hashedPass: "firebase"
        })
    const createdUser = await newUser.save()

    return createdUser
};


export default postUserFirebase;