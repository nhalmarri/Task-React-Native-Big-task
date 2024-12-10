import instance from ".";

const getAllCategories = async () => {
  const { data } = await instance.get("/category");
  return data;
};

//WHere did we get noted ID ? to be able to change

const getAllRestaurants  = async () => {
  const { data } = await instance.get(`/resturant`);
  return data;
};

const getRestaurantById = async (id) => {
    const { data } = await instance.get(`/resturant/{id}`);
    return data;
  };

  const getRestaurantItems = async (id) => {
    const { data } = await instance.get(`/resturant/{id}/items`);
    return data;
  };

  const getItemsDetails = async (id) => {
    const { data } = await instance.get(`/item/{id}`);
    return data;
  };



export { getAllCategories, getAllRestaurants, getRestaurantById, getRestaurantItems, getItemsDetails };