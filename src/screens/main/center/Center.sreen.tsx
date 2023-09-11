import {Link} from "react-router-dom";
import { MainCoupon, MainComment } from "../../../components";
import * as S from "./Center.styled";
export function CenterScreen() {
  return (
    <S.Container>
      <S.Category>
        <S.Text>카테고리</S.Text>
        <S.IconGroup>
          <S.Icon
            alt="food_Icon.png"
            src="./img/main/before/food_Icon.png"
          ></S.Icon>
          <S.Icon
            alt="movie_Icon.png"
            src="./img/main/before/movie_Icon.png"
          ></S.Icon>
          <S.Icon
            alt="shopping_Icon.png"
            src="./img/main/before/shopping_Icon.png"
          ></S.Icon>
        </S.IconGroup>
      </S.Category>
      <S.Category>
        <S.Text>인기 쿠폰</S.Text>
        <S.CouponContainer>
          <MainCoupon orderBy={"popularity"} />
        </S.CouponContainer>
      </S.Category>
      <S.Category>
        <S.Text>신규 쿠폰</S.Text>
        <S.BlueContainer>
          <S.CouponContainer>
            <MainCoupon orderBy={"createdDate"} />
          </S.CouponContainer>
        </S.BlueContainer>
      </S.Category>
      <S.Category>
        <S.TextGroup>
          <S.Text>최신 댓글</S.Text>
          <Link style={{color:"black", textDecoration: "none"}} to={"/allComments"}><S.ViewText >전체보기</S.ViewText></Link>
        </S.TextGroup>
        <MainComment/>
      </S.Category>
    </S.Container>
  );
}
