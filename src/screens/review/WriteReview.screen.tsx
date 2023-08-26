import React, { useState } from "react";
import * as S from "./WriteReview.styled";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";

export function WriteReview() {
  // //가상정보
  const couponData = {
    couponName: "스타벅스 50% 할인",
    startDate: "2022.08.14",
    endDate: "2023.08.14",
    brandImgUrl: `${process.env.PUBLIC_URL}/img/coupon/logo.svg`,
    brandName: "스타벅스",
  };

  //보내는 정보
  // const postData = {
  //   userEmail: "happyyj01@naver.com",
  //   couponId: "2",
  //   comment: "이런 쿠폰을 모르고 살았다니~",
  //   satisfied: true,
  //   unsatisfied: false,
  // }

  const [isSatisfied, setIsSatisfied] = useState<
    "satisfied" | "unsatisfied" | null
  >(null);

  const handleSatisfactionClick = (
    satisfaction: "satisfied" | "unsatisfied"
  ) => {
    setIsSatisfied((prevSatisfaction) =>
      prevSatisfaction === satisfaction ? null : satisfaction
    );
  };

  return (
    <Layout>
      <Nav />
      <S.Layout>
        <LeftSide />
        <S.Container>
          <S.Text style={{ fontSize: 20, fontWeight: 500, marginTop: 50 }}>
            후기 등록
          </S.Text>
          <S.Line />
          <S.Wrapper>
            <S.LContainer>
              <S.CouponWrapper>
                <S.TextWrapper>
                  <S.Name>{couponData.couponName}</S.Name>
                  <S.Name>
                    {" "}
                    {`${couponData.startDate} - ${couponData.endDate}`}
                  </S.Name>
                </S.TextWrapper>
                <S.Logo src={couponData.brandImgUrl} />
              </S.CouponWrapper>
            </S.LContainer>
            <S.RContainer>
              <S.TextWrapper2>
                <S.Text style={{ fontSize: 25 }}>{couponData.brandName}</S.Text>
                <S.Text style={{ fontSize: 15 }}>
                  {couponData.couponName}
                </S.Text>
                <S.Text style={{ fontSize: 15 }}>
                  제품이 마음에 드셨나요?
                </S.Text>
              </S.TextWrapper2>
              <S.Satisfaction>
                <S.SatisfactionButton
                  isActive={isSatisfied === "satisfied"} // isActive를 isSelected로 수정
                  onClick={() => handleSatisfactionClick("satisfied")}
                >
                  <img
                    src={
                      isSatisfied === "satisfied"
                        ? `${process.env.PUBLIC_URL}/icon/auth/writegood2.svg`
                        : `${process.env.PUBLIC_URL}/icon/auth/writegood.svg`
                    }
                    alt="Good"
                  />
                </S.SatisfactionButton>
                <S.SatisfactionButton
                  isActive={isSatisfied === "unsatisfied"} // isActive를 isSelected로 수정
                  onClick={() => handleSatisfactionClick("unsatisfied")}
                >
                  <img
                    src={
                      isSatisfied === "unsatisfied"
                        ? `${process.env.PUBLIC_URL}/icon/auth/writebad2.svg`
                        : `${process.env.PUBLIC_URL}/icon/auth/writebad.svg`
                    }
                    alt="Bad"
                  />
                </S.SatisfactionButton>
              </S.Satisfaction>
              <S.ReviewBox>
                <S.User
                  placeholder="이 제품에 대한 총평을 작성해주세요.(150자)"
                  maxLength={150}
                ></S.User>
              </S.ReviewBox>
              <S.Put
                role="button"
                src={`${process.env.PUBLIC_URL}/icon/auth/put.svg`}
              />
            </S.RContainer>
          </S.Wrapper>
        </S.Container>
      </S.Layout>
    </Layout>
  );
}
