import { Router, Response, Request } from "express";
import postWine from "../../controllers/PostWine"

const router = Router()

//* /admin/post

/*
router.get("/", (req, res) => {
  try {
      console.log("soy la ruta /admin/post")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})
dejo la ruta de prueba momentaneamente
*/ 

// interface WineRequest<T> extends Request {
//         name: string,
//         brand: string,
//         description: string,
//         type: string,
//         body: string,
//         cropYear: number,
//         origin: string,
//         zone: string,
//         volume: number,
//         alcoholVolume: number,
//         rating: number,
//         images: Array<string>,
//         strain: string,
//         review_id: mongoose.Types.ObjectId
//       }

router.post("/", async (req: Request, res: Response) => {

  let { name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, quantity, price } =
  req.body;

const validate =
  name && brand && description && type && body && cropYear && origin && zone && volume && alcoholVolume && rating && images && strain && quantity && price
    ? true
    : false;

if (!validate) return res.status(400).send(`Missing data!`);

  try {
      const newWine = postWine(name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, quantity, price)

      res.status(200).json(newWine)

  } catch (error: any) {
      throw new Error( error );
  }
})



export default router