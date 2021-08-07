

export const Location = {
    apartments: (parent, args, { apartmentDB }) => {
        return apartmentDB.find({LocationId:parent.id})
    }
}