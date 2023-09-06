import { LeftSide, MyPageCouponDetail, Screen } from "../../../../components";
import * as S from "../../me/main";

export function UsedCouponScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>사용한 쿠폰</S.Text>
          </S.TextGroup>
          <S.Line />
          <MyPageCouponDetail active={false} order={"usedCoupons"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
