import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import {
  //Request
  PostJoinReq,
  PostEmailVerifyReq,
  PostResetPasswordReq,
  PostSavePasswordReq,
  //Response
  PostEmailVerifyRes,
} from "../../services";

//회원가입
export function usePostJoin() {
  const navigate = useNavigate();
  const join = async (data: PostJoinReq) => {
    try {
      await axiosInstance.post("/register", data, {
        headers: { "Content-type": "application/json" },
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  return join;
}

//이메일 인증코드

export function usePostEmailConfirm() {
  const emailConfirm = async (email: PostEmailVerifyReq) => {
    try {
      //res => 인증코드, 가입가능여부(true)
      const response = await axiosInstance.post<PostEmailVerifyRes>(
        "/user/register/mailConfirm",
        email,
        {
          headers: { "Content-type": "application/json" },
        }
      )
      if (response) return response;
    }catch (error) {
      alert(error);
    }
  };
  return emailConfirm;
}

//닉네임 중복 확인
export function useGetRegisterNickname() {
  const registerNickname = async (nickname: string) => {
    try {
      //res => 중복여부(true)
      const res = await axiosInstance.get(`/user/register/${nickname}`
      );
      if (res.status) {
        alert("사용 가능한 닉네임입니다.");
        return res;
      } else {
        alert("이미 사용중인 닉네임입니다.");
        return res;
      }
    } catch (error) {
      alert(error);
      return;
    }
  };
  return registerNickname;
}

//비밀번호 변경 URL
export function usePostResetPassword() {
  const resetPassword = async (data: PostResetPasswordReq) => {
    try {
      await axiosInstance.post("/user/resetPassword", data, {
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      alert(error);
    }
  };
  return resetPassword;
}

//새 비밀번호 전송
export function usePostSavePassword() {
  const navigate = useNavigate();
  const savePassword = async (data: PostSavePasswordReq) => {
    try {
      await axiosInstance.post("/user/savePassword", data, {
        headers: { "Content-type": "application/json" },
      });
      alert("비밀번호가 변경되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  return savePassword;
}
