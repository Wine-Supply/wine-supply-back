import User from "../models/User"

const postUser = async (name: string, lastName: string, userName: string, email: string, hashedPass: string) => {

    const image = ["https://res.cloudinary.com/dq3sboxbn/image/upload/v1669934892/Users/Not_image.png_wd8tei.png", "v1669934892"]
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
            hashedPass,
            image
        })
    const createdUser = await newUser.save()

    return createdUser
};


export default postUser;