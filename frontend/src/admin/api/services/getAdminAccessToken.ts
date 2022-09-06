/**
 * Extracts and returns logged in user's access token
 */
const getAdminAccessToken = (): string | null => {
  try {
    let token = localStorage.getItem("$__a_t_admin");
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAdminAccessToken;
