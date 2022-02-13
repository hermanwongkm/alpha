const getLocations = `
  query { 
    foodMapLocations {
        id,
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
