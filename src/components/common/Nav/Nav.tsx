import React, { useState } from "react";
import * as S from "./Nav.styled";
import useDetectClose from "./useDetectClose";
import { Link } from "react-router-dom";

//카테고리와 번호 매핑
export const Nav: React.FC = () => {
  // const categoryNumbers: Record<string, number> = {
  //   식당: 1,
  //   카페: 2,
  //   여행: 3,
  //   취미: 4,
  //   옷: 5,
  //   신발: 6,
  //   화장품: 7,
  // };

  //카테고리명을 번호로 변환
  //선택한 카테고리의 번호를 받아 해당 카테고리명을 반환
  //categoryNumbers를 이용하여 번호에 해당하는 카테고리명을 찾음
  // function getCategoryNameByNumber(categoryNumber: number): string | undefined {
  //   for (const [categoryName, number] of Object.entries(categoryNumbers)) {
  //     if (number === categoryNumber) {
  //       return categoryName;
  //     }
  //   }
  //   return undefined; // 일치하는 번호를 찾지 못한 경우
  // }

  // useDetectClose -> 열림, 닫힘 커스텀 훅
  const [FoodIsOpen, FoodRef, FoodHandler] = useDetectClose(false);
  const [CultureIsOpen, CultureRef, CultureHandler] = useDetectClose(false);
  const [ShopIsOpen, ShopRef, ShopHandler] = useDetectClose(false);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleMenuItemClick = (categoryName: string) => {
    setSelectedItem(categoryName);
  };

  return (
    <>
      <S.Container>
        <S.DropdownContainer>
          <S.DropdownButton onClick={FoodHandler} ref={FoodRef}>
            음식
          </S.DropdownButton>
          <S.Menu isDropped={FoodIsOpen}>
            <S.Ul>
              <S.Li isSelected={selectedItem === "식당"}>
                <S.Link 
                  href="/식당/brands"
                  onClick={() => handleMenuItemClick("식당")} 
                  >
                  식당
                </S.Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "카페"}>
                <S.Link
                  href="/카페/brands"
                  onClick={() => handleMenuItemClick("카페")}
                >
                  카페
                </S.Link>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>

        <S.DropdownContainer>
          <S.DropdownButton onClick={CultureHandler} ref={CultureRef}>
            문화생활
          </S.DropdownButton>
          <S.Menu isDropped={CultureIsOpen}>
            <S.Ul>
              <S.Li isSelected={selectedItem === "여행"}>
                <S.Link
                  href="/여행/brands"
                  onClick={() => handleMenuItemClick("여행")}
                >
                  여행
                </S.Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "취미"}>
                <S.Link
                  href="/취미/brands"
                  onClick={() => handleMenuItemClick("취미")}
                >
                  취미
                </S.Link>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>

        <S.DropdownContainer>
          <S.DropdownButton onClick={ShopHandler} ref={ShopRef}>
            쇼핑
          </S.DropdownButton>
          <S.Menu isDropped={ShopIsOpen}>
            <S.Ul>
              <S.Li isSelected={selectedItem === "옷"}>
                <S.Link
                  href="/옷/brands"
                  onClick={() => handleMenuItemClick("옷")}
                >
                  옷
                </S.Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "신발"}>
                <S.Link
                  href="/신발/brands"
                  onClick={() => handleMenuItemClick("신발")}
                >
                  신발
                </S.Link>
              </S.Li>
              <S.Li isSelected={selectedItem === "화장품"}>
                <S.Link
                  href="/화장품/brands"
                  onClick={() => handleMenuItemClick("화장품")}
                >
                  화장품
                </S.Link>
              </S.Li>
            </S.Ul>
          </S.Menu>
        </S.DropdownContainer>
      </S.Container>
      <S.Line />
    </>
  );
};
