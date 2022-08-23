/**
 * Extracts and returns logged in user's access token
 */
const getUserAccessToken = (): string => {
  try {
    let token = localStorage.getItem("$__a_t");
    if (!token) return "";
    return token;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export default getUserAccessToken;
