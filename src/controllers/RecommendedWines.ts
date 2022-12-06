import Wine from '../models/Wine'

const getRecommendedWines = async()=> {
    const wineRating  = await Wine.find({isActive: true})

    let sortOrderRating = wineRating.sort( (a : any , b : any)=>{
        if( a.rating > b.rating) return -1;
        if( a.rating < b.rating) return 1;
        return 0;
      })
    
    let wineRecomend = [];

    for(let i = 0 ; i < 10 ; i++){
        wineRecomend.push(sortOrderRating[i])
    }
    return wineRecomend;
}



export default getRecommendedWines;