import { LeftSide, MyPageBrand, Screen } from "../../../components";
import * as S from "../../user/me/main";
import * as C from "./SearchBrand.styled";

export function SearchBrandScreen() {
  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>브랜드 찾기</S.Text>
            <C.SearchContainer>
              <C.InputContainer>
                <C.Input />
              </C.InputContainer>
              <C.SearchButton
                alt="Search_Icon"
                src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
              />
            </C.SearchContainer>
          </S.TextGroup>
          <S.Line />
          <MyPageBrand order={"random"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
