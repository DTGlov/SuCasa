

export const Apartment = {
  location: (parent, args, { locationDB }) => {
    return locationDB.find({ _id: parent.LocationId });
  },
};