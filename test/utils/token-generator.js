import routes from '../data/routes';
const axios = require("axios");

const tokenExchange = async () => {
  try {
    // fetch data from the auth endpoint
    const response = await axios.post(
      `${routes.baseURL}${routes.api.auth}`,
      {
        userId: "admin@dotcms.com",
        password: "admin",
        rememberMe: false,
        language: "en",
        country: "US",
        backEndLogin: true,
      }
    );
    return response.headers["set-cookie"][1].split("=")[1].split(";")[0];
  } catch (error) {
    console.log("error", error);
  }
};

export default tokenExchange;