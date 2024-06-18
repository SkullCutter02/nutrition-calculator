import axios from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";

import HOST from "../constants/host";

const instance = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});

// const refreshAuthLogic = async (failedRequest) => {
//   if (failedRequest.response.data.message === "Unauthorized") {
//     await instance.get("auth/refresh", {
//       headers: { Cookie: failedRequest?.response?.config?.headers?.Cookie },
//     });
//     return Promise.resolve();
//   } else {
//     return Promise.resolve();
//   }
// };
//
// createAuthRefreshInterceptor(instance, refreshAuthLogic, {
//   pauseInstanceWhileRefreshing: true,
// });

export { instance as axios };
