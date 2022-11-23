
const filterAllWines = (wines: any) => {
    const filterWines = wines.map((e: any) => {
        return {
        id: e._id,
        name: e.name,
        brand: e.brand,
        description: e.description,
        images: e.images,
        alcoholVolume: e.alcoholVolume,
        rating: e.rating,
        price: e.price
        }
    });
    return filterWines;
}

export default filterAllWines;