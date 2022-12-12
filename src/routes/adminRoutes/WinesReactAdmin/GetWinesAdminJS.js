import { Router } from "express";
import getAllWinesAdmin from "../../../controllers/ReactAdminControllers/GeatAllWinesAdmin";

const router = Router()

//* /admin/wines


router.get("/", async (req, res) => {
  try {
    const {filter, range, sort} = req.query
    const wines = await getAllWinesAdmin();
    let total = wines.length


    let sortMethod = sort.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")

    if (typeof wines[0][sortMethod[0]] === "string") {
      if (sortMethod[1] === "DESC") {
        const sortedwines = wines.sort((a, b) => {
          if ( a[sortMethod[0]].toLowerCase() < b[sortMethod[0]].toLowerCase() ){
            return -1;
          }
          if ( a[sortMethod[0]].toLowerCase() > b[sortMethod[0]].toLowerCase() ){
            return 1;
          }
          return 0;
        })
        let index = range.replace("[", "").replace("]", "").split(",")
        let page = sortedwines.slice(Number(index[0]), Number(index[1]) + 1 )
        res.header({'content-Range':  `wines 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
        
        return res.status(200).send(page);
      }
      if (sortMethod[1] === "ASC") {
        const sortedwines = wines.sort((a, b) => {
          if ( a[sortMethod[0]].toLowerCase() < b[sortMethod[0]].toLowerCase() ){
            return -1;
          }
          if ( a[sortMethod[0]].toLowerCase() > b[sortMethod[0]].toLowerCase() ){
            return 1;
          }
          return 0;
        }).reverse()
        let index = range.replace("[", "").replace("]", "").split(",")
        let page = sortedwines.slice(Number(index[0]), Number(index[1]) + 1 )
        res.header({'content-Range':  `wines 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
        
        return res.status(200).send(page);
      }

    }

    if (typeof wines[0][sortMethod[0]] === "number") {
      if (sortMethod[1] === "DESC") {
        const sortedwines = wines.sort((a, b) => {
          if ( a[sortMethod[0]] < b[sortMethod[0]] ){
            return -1;
          }
          if ( a[sortMethod[0]] > b[sortMethod[0]] ){
            return 1;
          }
          return 0;
        })
        let index = range.replace("[", "").replace("]", "").split(",")
        let page = sortedwines.slice(Number(index[0]), Number(index[1]) + 1 )
        res.header({'content-Range':  `wines 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
        
        return res.status(200).send(page);
      }
      if (sortMethod[1] === "ASC") {
        const sortedwines = wines.sort((a, b) => {
          if ( a[sortMethod[0]] < b[sortMethod[0]] ){
            return -1;
          }
          if ( a[sortMethod[0]] > b[sortMethod[0]] ){
            return 1;
          }
          return 0;
        }).reverse()
        let index = range.replace("[", "").replace("]", "").split(",")
        let page = sortedwines.slice(Number(index[0]), Number(index[1]) + 1 )
        res.header({'content-Range':  `wines 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
        
        return res.status(200).send(page);
      }


  }} catch (error) {
    console.log(error)
    return res.status(404).send('Cant get wines!')
  }

});

// { filter: '{}', range: '[0,4]', sort: '["name","DESC"]' } 

export default router;