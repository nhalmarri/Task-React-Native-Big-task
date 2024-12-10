import instance from ".";

const login = async (username,password) => {
  const { data } = await instance.post("/auth/login", username,password);
  return data;
};

const register = async (username,password) => {
  const { data } = await instance.post("/auth/register", username,password);
  return data;
};

const profile = async () => {
  const { data } = await instance.get("/auth/profile");
  return data;
};

export { login, register, profile};