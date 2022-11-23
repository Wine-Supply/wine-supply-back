import { Router, Response, Request } from "express";
import postWine from "../../controllers/PostWine"

const router = Router()

//* /admin/post


router.post("/", async (req: Request, res: Response) => {

  let { name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, stock, price } =
  req.body;

const validate =
  name && brand && description && type && body && cropYear && origin && zone && volume && alcoholVolume && rating && images && strain && stock && price
    ? true
    : false;

if (!validate) return res.status(400).send(`Missing data!`);

  try {
      const newWine = postWine(name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, stock, price)

      res.status(200).json(newWine)

  } catch (error: any) {
      throw new Error( error );
  }
})



export default router