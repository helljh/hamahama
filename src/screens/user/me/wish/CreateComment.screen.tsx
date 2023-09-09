import { Comment, LeftSide, Screen } from "../../../../components";
import * as S from "../main";

export function CreateCommentScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>내 댓글</S.Text>
          </S.TextGroup>
          <S.Line />
          <Comment btnStatus={false} order={"createComment"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}