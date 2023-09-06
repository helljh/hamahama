import { LeftSide, MyPageCouponDetail, Screen } from "../../../../components";
import * as S from "../../me/main";

export function WishCouponScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>찜한 쿠폰</S.Text>
          </S.TextGroup>
          <S.Line />
          <MyPageCouponDetail active={false} order={"likeCoupon"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
