import { useState, useEffect, useRef} from "react";
import { LeftSide, MyPageBrand, Screen, Search} from "../../../components";
import * as S from "../../user/me/main";
import * as C from "./SearchBrand.styled";

export function SearchBrandScreen() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>("");


  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  }

 
  const setInputValue = (letter: string, status: boolean) => {
    setKeyword(letter);
    setIsSearchOpen(status);
  }

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
                <C.Input
                value={keyword}
                onChange={onChangeData}
                 />
              </C.InputContainer>
              <C.SearchButton
                alt="Search_Icon"
                src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
                role="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </C.SearchContainer>
            {isSearchOpen && (
            <S.SearchList >
              <Search  screen={"registration"} inputValue={setInputValue} keyword={keyword}/>
            </S.SearchList>
            )}
          </S.TextGroup>
          <S.Line />
          <MyPageBrand btnStatus={false} order={"random"} />
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
