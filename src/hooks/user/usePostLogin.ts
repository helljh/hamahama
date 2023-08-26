import { useNavigate } from "react-router-dom";
import { PostLoginReq, PostLoginRes } from "../../services";
import { axiosInstance } from "../../apis";

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  userEmail: string;
}

export function usePostLogin() {
  const navigate = useNavigate();
  const login = async (postReq: PostLoginReq) => {
    try {
      await axiosInstance
        .post<PostLoginRes>("/login", postReq, {
          headers: { "Content-type": "application/json" },
        })
        .then((res) => {
          const auth = {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
            isAuthenticated: true,
            userEmail: postReq.email,
          };
          localStorage.setItem("authToken", JSON.stringify(auth));
        });

      //constext 설정 변수 -> setAuth에 전달

      navigate("/main");
    } catch (error) {
      alert("로그인에 실패하였습니다.");
      console.log(error);
    }
  };
  return login;
}
