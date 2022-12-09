import User from "../models/User"

const postUserFirebase = async (given_name: string, family_name: string, email: string) => {

    let existingUser;

    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        console.log( error )
    }

    try {
        if (existingUser) throw new Error( "User already exist" )
        let usern = email.split("@")
        let userName = usern[0]
        
        const newUser = new User(
            {
                name: given_name,
                lastName: family_name,
                userName,
                email,
                hashedPass: "firebase"
            })
        const createdUser = await newUser.save()
        return createdUser
    } catch(error: any) {
        console.log(error)
        throw new Error(error)
    }
};


export default postUserFirebase;