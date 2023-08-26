import { Coupon, LeftSide, Screen } from "../../../../components";
import * as S from "../main";

export function RecentCouponScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>최근 본 쿠폰</S.Text>
          </S.TextGroup>
          <S.Line />
          <Coupon active={false} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
