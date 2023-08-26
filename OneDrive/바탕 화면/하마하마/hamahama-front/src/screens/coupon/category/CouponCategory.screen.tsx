import { useParams, useNavigate } from "react-router-dom";
import { Screen, Brand } from "../../../components";

import * as S from "./Category.styled";

export function CouponCategoryScreen() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  if (!categoryName) {
    alert("잘못된 경로입니다.");
    navigate("/home");
    return null;
  }

  return (
    <Screen header={true} nav={true} side={false} footer={true}>
      <S.Container>
        <S.MyCoupon>
          <S.Text>{categoryName}</S.Text>
          <S.Line />
          <Brand category={categoryName || null} />
        </S.MyCoupon>
      </S.Container>
    </Screen>
  );
}
