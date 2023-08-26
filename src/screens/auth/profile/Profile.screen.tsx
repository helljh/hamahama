import { useState } from "react";
// import { PostProfileReq, PostNicknameConfirmReq } from "../../../services";
// import { usePostNicknameAccess, usePostProfile } from "../../../hooks";

import * as S from "./Profile.styled";
import { useNavigate } from "react-router-dom";

export function ProfileScreen() {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();
  // const accessNickname = usePostNicknameAccess;
  // const updateProfile = usePostProfile;
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };

  // const postReq: PostProfileReq = {
  //   nickname: form.nickname,
  //   password: form.password,
  // };

  return (
    <S.Container>
      <S.Header>
        <img
          style={{ width: "270px", height: "40px" }}
          alt="Logo_IMG"
          src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
        />{" "}
      </S.Header>
      <S.BlueContainer>
        <S.Profile>
          <S.MainText>프로필 수정</S.MainText>
          <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`} />
        </S.Profile>
        <S.ProfileInfo>
          <S.Text>닉네임 변경</S.Text>
          <S.InputForm>
            <S.InputForm>
              <S.Input
                onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                value={form.nickname}
              />
              <S.Button
                onClick={() => {
                  // const data: PostNicknameConfirmReq = {
                  //   nickname: form.nickname,
                  // };
                  // accessNickname(data);
                }}
              >
                중복 확인
              </S.Button>
            </S.InputForm>
          </S.InputForm>
          <S.Text>비밀번호 변경</S.Text>
          <S.InputForm>
            <S.Input value={form.password} onChange={onPassword} />
          </S.InputForm>
          <S.Text>비밀번호 확인</S.Text>
          <S.InputForm>
            <S.Input
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </S.InputForm>
        </S.ProfileInfo>
        <S.ButtonContainer>
          <S.Button
            onClick={() => {
              alert("테스트 버튼입니다.");
              navigate("/user/me");
              // updateProfile(postReq);
            }}
          >
            변경하기
          </S.Button>
        </S.ButtonContainer>
      </S.BlueContainer>
    </S.Container>
  );
}
