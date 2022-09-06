/**
 * Extracts and returns logged in user's access token
 */
const getUserAccessToken = (): string | null => {
  try {
    let token = localStorage.getItem("$__a_t_admin");
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUserAccessToken;
