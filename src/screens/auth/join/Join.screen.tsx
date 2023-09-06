import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { PostJoinReq, PostEmailVerifyReq } from "../../../services";
import {
  usePostJoin,
  usePostEmailConfirm,
  useGetRegisterNickname,
} from "../../../hooks";
import * as S from "./Join.styled";
import { Code } from "../../coupon/CouponRegistration.styled";
export const JoinScreen: React.FC = () => {
  const [form, setForm] = useState<PostJoinReq>({
    email: "",
    password: "",
    nickname: "",
  });
  const [code, setCode] = useState("");
  const [verify, setVerify] = useState("");
  const [isEmailRequestCompleted, setIsEmailRequestCompleted] = useState(false); // 이메일 인증 요청 완료 여부 상태 추가
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false); //비밀번호 일치
  const [passwordIsValid, setPasswordIsValid] = useState(false); //유효성검사
  const [isCodeValid, setIsCodeValid] = useState(false); //인증번호 일치 여부
  const [isVerificationCompleted, setIsVerificationCompleted] = useState(false); // 인증 완료 여부 상태 추가
  const [confirmNickname, setConfirmNickname] = useState<boolean>(false); //닉네임 중복 여부
  const emailConfirm = usePostEmailConfirm();
  const join = usePostJoin();
  const registerNickname = useGetRegisterNickname();

  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  
  const onVerifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerify(event.target.value);
    if(event.target.value == code){
      setIsCodeValid(true);
    }
  };
  
  const handleEmailVerifyClick = () => {
    if (isEmailValid(form.email)) {
      const postReq: PostEmailVerifyReq = { email: form.email };
      emailConfirm(postReq).then((res)=>{
        if(res?.data.status){
          alert("사용 가능한 이메일입니다")
          setCode(res.data.code);
        }else{
         alert("이미 가입된 이메일입니다");
        }
      });
      setIsEmailRequestCompleted(true); // 이메일 인증 요청 완료 상태 업데이트
    }else if(form.email.length == 0){
      alert("이메일을 입력해주세요");
    }
  };

  // const handleEmailVerifyClick = () => {
  //   if (isEmailValid(form.email)) {
  //       const postReq: PostEmailVerifyReq = { email: form.email };
  //       console.log(emailConfirm(postReq));
  //       setIsEmailRequestCompleted(true); // 이메일 인증 요청 완료 상태 업데이트
  //   }
  //   else{
  //     alert("이메일 형식으로 입력해주세요.");
  //   }
  // };

  const handleVerifyClick = () => {
    if (isCodeValid) {
      setIsVerificationCompleted(true);
      alert("인증이 완료되었습니다");
    } else {
      alert("인증번호가 일치하지 않습니다.");
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
      <Link to={"/main"}>
      <img
        style={{ width: "280px", height: "50px", marginTop: "90px" }}
        alt="Logo_IMG"
        src={`${process.env.PUBLIC_URL}/img/header/logo.svg`}
      />
      </Link>
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
              onChange={onEmail}
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
        {form.email.length != 0 && !isEmailValid(form.email) && <p style={{marginTop:-30}}>이메일 형식으로 입력해주세요.</p>}
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
              //disabled={isCodeValid}
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
        {form.password.length!=0 && !passwordIsValid && (
          <p style={{marginTop: -30}}>
            비밀번호는 영문자, 숫자, 특수문자를 포함하여 8자리 이상이어야
            합니다.
          </p>
        )}
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
        {confirmedPassword.length!=0 && !passwordsMatch && <p style={{marginTop:-30}}>비밀번호가 일치하지 않습니다.</p>}
       
        <S.InputForm>
          <S.Icon
            alt="nickname_Icon"
            src={`${process.env.PUBLIC_URL}/icon/auth/nickname_Icon.svg`}
          />
          <S.InputStyle>
          <S.Input
            placeholder="닉네임"
            value={form.nickname}
            onChange={onNickname}
          />
           <S.Button
          onClick={() => {
            registerNickname(form.nickname).then(() => {
              setConfirmNickname(true);
            });
          }}
          style={{ opacity: confirmNickname ? 0.5 : 1 }}
        >
          중복확인
        </S.Button>
          </S.InputStyle>
        </S.InputForm>
       
        <S.SubmitButton
          onClick={() => {
            if (isEmailRequestCompleted && passwordsMatch && confirmNickname) {
              join(postJoinReq);
            }else{
              alert("가입정보를 모두 입력해주세요");
            }
          }}
        >
          하마하마 시작하기
        </S.SubmitButton>
      </S.JoinForm>
    </S.Container>
  );
};
