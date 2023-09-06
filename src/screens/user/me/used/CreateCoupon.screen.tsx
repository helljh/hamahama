import { MyPageCouponDetail, LeftSide, Screen } from "../../../../components";
import * as S from "../main";

export function CreateCouponScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>등록한 쿠폰</S.Text>
          </S.TextGroup>
          <S.Line />
          <MyPageCouponDetail active={false} order={"createCoupon"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}