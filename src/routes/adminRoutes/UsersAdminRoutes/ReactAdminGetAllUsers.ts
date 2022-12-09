import { Router } from "express";
import UserModel from "../../../models/User";

const router = Router()

//* /admin/users


router.get("/", async (req, res) => {

  try {
    const users:any = await UserModel.find().select("-hashedPass");
    const parsedUsers = users.map((e:any) => {
        return {
            id: e._id,
            name: e.name,
            lastName: e.lastName,
            userName: e.userName,
            email: e.email,
            date_of_birth: e.date_of_birth,
            phone: e.phone,
            avatar: e.avatar,
            isAdmin: e.isAdmin,
            isActive: e.isActive,
            address: e.address,
            shopping_cart: e.shopping_cart,
            order: e.order,
            whishList: e.whishList,
            membership_id: e.membership_id,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          }
    })

  //  console.log("parsedUsers", parsedUsers);

    let total = users.length
    res.header({'content-Range':  `users 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
    return res.status(200).send(parsedUsers);
  } 
  catch (error: any) {
    return res.status(404).send('Cant get users!')
  }

});



export default router;