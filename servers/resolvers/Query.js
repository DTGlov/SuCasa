

export const Query = {
    apartments: async (parent, args, { apartmentDB }) =>{
        return await apartmentDB.find();
    },
    apartment: async (parent, args, { apartmentDB }) => {
        // return await apartmentDB.findById(args.slug)
        return await apartmentDB.findById(args.id)
    },
    locations: async(parent, args, { locationDB }) => {
       return await  locationDB.find();
    },
    location: async (parent, args, { locationDB }) => {
        return await locationDB.findById(args.id)
    }
}