import { Router } from "express";
import UserModel from "../../../models/User";

const router = Router()

//* /admin/users


router.get("/", async (req, res) => {

  const {filter, range, sort} = req.query
  let sortMethod = sort.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")

  try {
    const users = await UserModel.find().select("-hashedPass");
    const parsedUsers = users.map((e) => {
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
  let total = parsedUsers.length
  if (typeof parsedUsers[0][sortMethod[0]] === "string" && (sortMethod[0] === "name" || sortMethod[0] === "email")) {
    if (sortMethod[1] === "DESC") {
      const sortedparsedUsers = parsedUsers.sort((a, b) => {
        if ( a[sortMethod[0]].toLowerCase() < b[sortMethod[0]].toLowerCase() ){
          return -1;
        }
        if ( a[sortMethod[0]].toLowerCase() > b[sortMethod[0]].toLowerCase() ){
          return 1;
        }
        return 0;
      })
      let index = range.replace("[", "").replace("]", "").split(",")
      let page = sortedparsedUsers.slice(Number(index[0]), Number(index[1]) + 1 )
      res.header({'content-Range':  `parsedUsers 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
      
      return res.status(200).send(page);
    }
    if (sortMethod[1] === "ASC") {
      const sortedparsedUsers = parsedUsers.sort((a, b) => {
        if ( a[sortMethod[0]].toLowerCase() < b[sortMethod[0]].toLowerCase() ){
          return -1;
        }
        if ( a[sortMethod[0]].toLowerCase() > b[sortMethod[0]].toLowerCase() ){
          return 1;
        }
        return 0;
      }).reverse()
      let index = range.replace("[", "").replace("]", "").split(",")
      let page = sortedparsedUsers.slice(Number(index[0]), Number(index[1]) + 1 )
      res.header({'content-Range':  `parsedUsers 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
      return res.status(200).send(page);
    }

  }
  res.header({'content-Range':  `parsedUsers 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
  return res.status(200).send(parsedUsers);
  } 
  catch (error) {
    console.log(error)
    return res.status(404).send('Cant get users!')
  }

});



export default router;