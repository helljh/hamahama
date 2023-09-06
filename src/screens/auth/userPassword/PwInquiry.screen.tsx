import { useState } from "react";
import { usePostSavePassword } from "../../../hooks";
import { PostSavePasswordReq } from "../../../services";

import * as S from "./PwInquiry.styled";
export function PwInquiryScreen() {
  const [newPW, setNewPW] = useState("");
  const [confPW, setConfPW] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const savePassword = usePostSavePassword();

  const onNewPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPW(event.target.value);
    validatePassword(event.target.value, confPW);
  };
  const onConfPW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfPW(event.target.value);
    validatePassword(newPW, event.target.value);
  };

  const validatePassword = (newPassword: string, confirmPassword: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    //최소 8자리, 영문자, 숫자, 특수기호(@$!%*#?&)를 모두 포함해야함

    const isValid =
      passwordRegex.test(newPassword) && newPassword === confirmPassword;
    setIsPasswordValid(isValid);
  };

  const postReq: PostSavePasswordReq = {
    password: confPW,
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      <S.Text style={{ fontWeight: 700 }}>새로운 비밀번호로 변경</S.Text>
      <S.Ticket>
        <S.Form>
          <S.InputForm>
            <S.Icon
              alt="lockCheck_Icon"
              src={`${process.env.PUBLIC_URL}/icon/auth/lock_Icon.svg`}
            />
            <S.Input placeholder="비밀번호" onChange={onNewPW} value={newPW} />
          </S.InputForm>
          <S.InputForm>
            <S.Icon
              alt="lock_Icon"
              src={`${process.env.PUBLIC_URL}/icon/auth/lockCheck_Icon.svg`}
            />
            <S.Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={onConfPW}
              value={confPW}
            />
          </S.InputForm>
          {!isPasswordValid && <S.Text>비밀번호가 유효하지 않습니다.</S.Text>}
        </S.Form>
      </S.Ticket>
      <S.Button
        onClick={() => {
          savePassword(postReq);
        }}
      >
        다음
      </S.Button>
    </S.Container>
  );
}
