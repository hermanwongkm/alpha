const getLocations = `
  query { 
    foodMapLocations {
        id,
        lat,
        long,
        entry{
          title,
          description,
          address,
          rating
        }
    }
  }
`;

export default getLocations;
