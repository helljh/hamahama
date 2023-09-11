import { useState } from "react";
import {useNavigate} from "react-router-dom";
import * as S from "./IdInquiry.styled";
import { usePostResetPassword } from "../../../hooks";
import { PostResetPasswordReq } from "../../../services";

export function IdInquiryScreen() {
  const [email, setEmail] = useState("");
  const resetPassword = usePostResetPassword();
  const navigate = useNavigate();

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  //Request Data
  const postReq: PostResetPasswordReq = {
    email: email,
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/Logo.png`}
      />
      <S.Text>비밀번호를 찾기 위해 아이디를 입력해주세요.</S.Text>
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon
              alt="person_Icon.png"
              src={`${process.env.PUBLIC_URL}/icon/auth/person_Icon.svg`}
            />
            <S.Input placeholder="아이디" onChange={onEmail} value={email} />
          </S.InputForm>
        </S.Form>
      </S.Ticket>
      {email.length != 0 && !isEmailValid(email) && <p>이메일 형식으로 입력해주세요.</p>}
      <S.Button
        onClick={() => {
          resetPassword(postReq).then((res)=>{
            alert("입력하신 이메일로 비밀번호 변경 메일을 발송해드렸습니다. 해당 메일로 이동하여 비밀번호 변경을 해주시기 바랍니다.")
          });
        }}
        disabled={!isEmailValid(email)}
      >
        다음
      </S.Button>
    </S.Container>
  );
}
