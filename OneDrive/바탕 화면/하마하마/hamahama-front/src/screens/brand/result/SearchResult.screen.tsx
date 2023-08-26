import { LeftSide, Screen } from "../../../components";
import * as S from "../../user/me/main";
import * as C from "./SearchResult.styled";

export function SearchResultScreen() {
  const favor = false; //즐겨찾기 여부

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
          <C.BrandContainer>
            <C.BrandInfo>
              <C.BrandImg />
              <S.Text>맥도날드</S.Text>
            </C.BrandInfo>
            <C.Button favor={favor}>추가하기</C.Button>
          </C.BrandContainer>
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
