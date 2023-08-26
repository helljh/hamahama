import { useParams, useNavigate } from "react-router-dom";
import { Screen, SubCoupon } from "../../../components";
import * as S from "../category";

export function CouponBrandScreen() {
  const { brandName } = useParams();
  const navigate = useNavigate();

  if (!brandName) {
    alert("잘못된 경로입니다.");
    navigate("/home");
    return null;
  }

  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>{brandName}</S.Text>
          <S.Line />
          <SubCoupon active={false} brandName={brandName || ""} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
