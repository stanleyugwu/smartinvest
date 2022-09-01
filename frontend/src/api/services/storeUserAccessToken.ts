/**
 * Stores user jwt token
 */
const storeUserAccessToken = (token: string) => {
  try {
    localStorage.setItem("$__a_t", token);
  } catch (error) {
    console.log(error);
  }
};

export default storeUserAccessToken;
