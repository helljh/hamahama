import { useNavigate } from "react-router-dom";
import {
  Coupon,
  MyPageCoupon,
  Screen,
  Brand,
  LeftSide,
} from "../../../../components";
import * as S from "./MyPage.styled";

export function MyPageScreen() {
  const navigate = useNavigate();
  const active = true;

  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.Container>
          <S.MainText>마이페이지</S.MainText>
          <S.MyCoupon>
            <S.TextGroup>
              <S.Text>최근 본 쿠폰</S.Text>
              <S.ViewText
                onClick={() => {
                  navigate("./recent");
                }}
              >
                전체 보기
              </S.ViewText>
            </S.TextGroup>
            <S.Line />
            <Coupon active={active} />
          </S.MyCoupon>
          <S.MyCoupon>
            <S.TextGroup>
              <S.Text>사용한 쿠폰</S.Text>
              <S.ViewText
                onClick={() => {
                  navigate("./used");
                }}
              >
                전체 보기
              </S.ViewText>
            </S.TextGroup>
            <S.Line />
            <MyPageCoupon active={active} order={"usedCoupons"} />
          </S.MyCoupon>
          <S.MyCoupon>
            <S.TextGroup>
              <S.Text>찜한 쿠폰</S.Text>
              <S.ViewText
                onClick={() => {
                  navigate("./wish");
                }}
              >
                전체 보기
              </S.ViewText>
            </S.TextGroup>
            <S.Line />
            <MyPageCoupon active={active} order={"likeCoupon"} />
          </S.MyCoupon>
          <S.MyCoupon>
            <S.TextGroup>
              <S.Text>등록한 쿠폰</S.Text>
              <S.ViewText
                onClick={() => {
                  navigate("./");
                }}
              >
                전체 보기
              </S.ViewText>
            </S.TextGroup>
            <S.Line />
            <MyPageCoupon active={active} order={"createCoupon"} />
          </S.MyCoupon>
          <S.MyCoupon>
            <S.TextGroup>
              <S.Text>즐겨찾기</S.Text>
              <S.ViewText
                onClick={() => {
                  navigate("./favor");
                }}
              >
                전체 보기
              </S.ViewText>
            </S.TextGroup>
            <S.Line />
            <Brand category={"likeBrand"} />
          </S.MyCoupon>
        </S.Container>
      </S.Layout>
    </Screen>
  );
}
