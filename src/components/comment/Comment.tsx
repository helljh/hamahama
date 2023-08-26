import * as S from "./Comment.styled";

export function Comment() {
  return (
    <S.BlueContainer>
      <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`} />
      <S.CommentInfo>
        <S.Brand>나이키</S.Brand>
        <S.Coupon>나이키 포워드 재켓</S.Coupon>
        <S.Comment>
          "학생이라 조금 부담됐었는데, 덕분에 싸게 살 수 있었어요 다음에도 또
          이용할게요!"
        </S.Comment>
      </S.CommentInfo>
    </S.BlueContainer>
  );
}
