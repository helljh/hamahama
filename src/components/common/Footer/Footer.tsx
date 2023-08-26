import { useNavigate } from "react-router-dom";
import * as S from "./Footers.styled";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Start />
      <S.Wrapper>
        <S.Logo src={`${process.env.PUBLIC_URL}/img/footer/logo.svg`} />
        <p>
          <strong>페이지</strong>
        </p>
        <S.Page>
          <ul>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인/회원가입
            </li>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              관심상품
            </li>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              마이페이지
            </li>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              사용한 쿠폰
            </li>
          </ul>
        </S.Page>
        <S.Line />
        <p>
          <strong>이메일</strong>
        </p>
        <S.Email>
          <ul>
            <li>happyyj01@naver.com</li>
          </ul>
        </S.Email>
        <S.Line />
        <S.Sns>
          <p>
            <strong>공식 SNS</strong>
          </p>
          <S.Insta src={`${process.env.PUBLIC_URL}/img/footer/instagram.svg`} />
        </S.Sns>
        <ul>
          <li>@min_nnn.nnn</li>
          <li>@yu_deng29</li>
          <li>@boyoung_0l</li>
          <li>@yejikoo</li>
          <li>@softabc12</li>
          <li>@he_lljh</li>
        </ul>
      </S.Wrapper>
      <S.End />
    </S.Container>
  );
};
