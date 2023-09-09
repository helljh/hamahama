import { LeftSide, MyPageBrand, Screen } from "../../../../components";
import {Link} from "react-router-dom";
import * as S from "../main";

export function FavorBrandScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>즐겨찾기</S.Text>
            <S.LikeText>
            <S.Link href="/brand/search"><S.ViewText>추가</S.ViewText></S.Link>
            <S.ViewText>|</S.ViewText>
            <S.Link><S.ViewText>삭제</S.ViewText></S.Link>
            </S.LikeText>
          </S.TextGroup>
          <S.Line />
          <MyPageBrand btnStatus={false} order={"likeBrand"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
