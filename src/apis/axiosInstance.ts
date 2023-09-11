import Axios from "axios";
// import { AxiosError } from "axios";
import { BASE_URL } from "./axios.constant";

// //Temp Auth
// const authTokenString = localStorage.getItem("authToken");
// const authToken = authTokenString ? JSON.parse(authTokenString) : null;
// const refreshToken = authToken.refreshToken;
// const isAuthenticated = authToken.isAuthenticated;
// const userEmail = authToken.userEmail;
export const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

// const reissueAccessToken = async (refreshToken: string) => {
//   try {
//     const newAccessTokenRes = await axiosInstance.post(
//       "/user/reissue",
//       {},
//       {
//         headers: { Authorization: `Bearer ${refreshToken}` },
//       }
//     );
//     return newAccessTokenRes.data.accessToken;
//   } catch (error) {
//     localStorage.removeItem("authToken");
//     return;
//   }
// };

// axiosInstance.interceptors.request.use(
//   async (error) => {
//     const err = error as AxiosError;

//     // 401 오류 처리
//     if (err.response?.status === 401) {
//       try {
//         const newAccessToken = await reissueAccessToken(refreshToken);
//         const authToken: any = {
//           accessToken: newAccessToken,
//           refreshToken: refreshToken,
//           isAuthenticated: isAuthenticated,
//           userEmail: userEmail,
//         };
//         localStorage.removeItem("authToken");
//         localStorage.setItem("authToken", authToken);
//       } catch (error) {
//         localStorage.removeItem("authToken");
//       }
//     }
//     return err;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
