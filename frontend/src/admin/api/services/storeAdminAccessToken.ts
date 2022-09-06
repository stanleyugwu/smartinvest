/**
 * Stores user jwt token
 */
const storeAdminAccessToken = (token: string) => {
  try {
    localStorage.setItem("$__a_t_admin", token);
  } catch (error) {
    console.log(error);
  }
};

export default storeAdminAccessToken;
