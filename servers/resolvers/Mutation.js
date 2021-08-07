

export const Mutation = {
    createLocation: async (parent, args, { locationDB }) => {
        const { image, capital, slug } = args.location;
        const location = await new locationDB({ image, capital, slug }).save();
        return location;
    },
    deleteLocation: async (parent, args, { locationDB }) => {
        const { id } = args;
        await locationDB.findByIdAndDelete(id)
        return "Location Deleted"
    },
    createApartment: async (parent, args, { apartmentDB }) => {
        const { image, title, price, description, beds, baths, dimension, areacode, LocationId, slug } = args.apartment;
        const apartment = await new apartmentDB({
            image,
            title,
            price,
            description,
            beds,
            baths,
            dimension,
            areacode,
            LocationId,
            slug,
        }).save();
        return apartment;
    },
    deleteApartment: async (parent, args, { apartmentDB }) => {
        const { id } = args
         await apartmentDB.findByIdAndDelete(id);
        return "Apartment Deleted"
    }
}