import { useState } from "react";
import { PostJoinReq, PostEmailVerifyReq } from "../../../services";
import {
  usePostJoin,
  usePostEmailConfirm,
  useGetRegisterNickname,
} from "../../../hooks";
import * as S from "./Join.styled";
export const JoinScreen: React.FC = () => {
  const [form, setForm] = useState<PostJoinReq>({
    email: "",
    password: "",
    nickname: "",
  });
  const [verify, setVerify] = useState("");
  const [isEmailRequestCompleted, setIsEmailRequestCompleted] = useState(false); // 이메일 인증 요청 완료 여부 상태 추가
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); //비밀번호 일치
  const [passwordIsValid, setPasswordIsValid] = useState(true); //유효성검사
  const [isCodeValid, setIsCodeValid] = useState(false); //인증번호 일치 여부
  const [isVerificationCompleted, setIsVerificationCompleted] = useState(false); // 인증 완료 여부 상태 추가
  const [confirmNickname, setConfirmNickname] = useState<boolean>(false); //닉네임 중복 여부
  const join = usePostJoin();
  const emailConfirm = usePostEmailConfirm();
  const registerNickname = useGetRegisterNickname();

  const onId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setForm({ ...form, password: newPassword });
    setPasswordsMatch(newPassword === confirmedPassword);
    setPasswordIsValid(validatePassword(newPassword));
  };

  const onConfirmedPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = event.target.value;
    setConfirmedPassword(confirmPassword);
    setPasswordsMatch(form.password === confirmPassword);
    setIsVerificationCompleted(false); // 비밀번호 입력이 변경되면 인증 완료 여부 초기화
  };

  const onNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, nickname: event.target.value });
  };

  const isEmailValid = (id: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(id);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  //임시 인증번호
  const testCode = "user123";

  const onVerifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerify(event.target.value);
    setIsCodeValid(event.target.value === testCode);
  };

  const handleEmailVerifyClick = () => {
    if (isEmailValid(form.email)) {
      const postReq: PostEmailVerifyReq = { email: form.email };
      emailConfirm(postReq);
      setIsEmailRequestCompleted(true); // 이메일 인증 요청 완료 상태 업데이트
    }
    if (!isEmailValid(form.email)) {
      alert("이메일 형식으로 입력해주세요.");
    }
  };

  const handleVerifyClick = () => {
    if (!isCodeValid) {
      alert("인증번호가 일치하지 않습니다.");
    } else {
      // 인증이 완료되었음을 표시
    }
  };

  //Join Request
  const postJoinReq: PostJoinReq = {
    email: form.email,
    password: form.password,
    nickname: form.nickname,
  };

  return (
    <S.Container>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      <S.JoinForm>
        <S.Text>회원정보를 입력해주세요</S.Text>
        <S.InputForm>
          <S.Icon
            alt="mail_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/mail_Icon.svg`}
          />
          <S.InputStyle>
            <S.Input
              placeholder="아이디(이메일)"
              onChange={onId}
              value={form.email}
            />
            <S.Button
              onClick={handleEmailVerifyClick}
              disabled={isEmailRequestCompleted} // 이메일 형식이 아니거나 이미 인증 요청을 완료한 경우 버튼 비활성화
              style={{ opacity: isEmailRequestCompleted ? 0.5 : 1 }}
            >
              인증요청
            </S.Button>
          </S.InputStyle>
        </S.InputForm>
        {/* {!isEmailValid(form.id) && <p>이메일 형식으로 입력해주세요.</p>} */}
        <S.InputForm>
          <S.Icon
            alt="code_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/code_Icon.svg`}
          />
          <S.InputStyle>
            <S.Input
              placeholder="인증번호 입력"
              onChange={onVerifyChange}
              value={verify}
            />
            <S.Button
              onClick={handleVerifyClick}
              // disabled={!isCodeValid}
              style={{ opacity: isVerificationCompleted ? 0.5 : 1 }}
            >
              인증확인
            </S.Button>
          </S.InputStyle>
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="password_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/password_Icon.svg`}
          />
          <S.Input
            placeholder="비밀번호"
            value={form.password}
            onChange={onPassword}
          />
        </S.InputForm>
        <S.InputForm>
          <S.Icon
            alt="passwordCheck_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/passwordCheck_Icon.svg`}
          />
          <S.Input
            placeholder="비밀번호 확인"
            value={confirmedPassword}
            onChange={onConfirmedPassword}
          />
        </S.InputForm>
        {!passwordsMatch && <p>비밀번호가 일치하지 않습니다.</p>}
        {!passwordIsValid && (
          <p>
            비밀번호는 영문자, 숫자, 특수문자를 포함하여 8자리 이상이어야
            합니다.
          </p>
        )}
        <S.InputForm>
          <S.Icon
            alt="nickname_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/nickname_Icon.svg`}
          />
          <S.Input
            placeholder="닉네임"
            value={form.nickname}
            onChange={onNickname}
          />
        </S.InputForm>
        <S.Button
          onClick={() => {
            registerNickname(form.nickname).then(() => {
              setConfirmNickname(true);
            });
          }}
        >
          중복확인
        </S.Button>
        <S.SubmitButton
          onClick={() => {
            if (isEmailRequestCompleted && passwordsMatch && confirmNickname) {
              join(postJoinReq);
            }
          }}
        >
          하마하마 시작하기
        </S.SubmitButton>
      </S.JoinForm>
    </S.Container>
  );
};
