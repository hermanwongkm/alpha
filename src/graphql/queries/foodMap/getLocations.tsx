const getLocations = `
  query { 
    foodMapLocations {
        id,
        title,
        description,
        address,
        rating
    }
  }
`;

export default getLocations;
