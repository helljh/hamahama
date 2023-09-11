import React, { useState, useEffect } from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
import * as S from "./WriteReview.styled";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";
import { GetCouponDataRes } from "../../services";
import { useGetCoupon} from "../../hooks";

export function WriteReview() {
  const [searchParams] = useSearchParams();
  const couponId = searchParams.get("couponId");
  const [coupon, setCoupon] = useState<GetCouponDataRes | undefined>(undefined);
  
  const getCoupon = useGetCoupon();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupon = async () => {
      if (!couponId) {
        alert("유효하지 않은 쿠폰입니다.");
        navigate("../");
        return;
      }

      try {
        const res = await getCoupon(couponId);
        if (res) setCoupon(res as GetCouponDataRes);
      } catch (error) {
        alert("쿠폰을 가져오는 중에 오류가 발생했습니다.");
        navigate("../");
      }
    };

    fetchCoupon();
  }, [couponId, navigate]);


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

  
  if (!coupon) {
    // 쿠폰 데이터가 아직 로드되지 않은 경우 로딩 스피너 또는 메시지를 표시할 수 있습니다.
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Nav />
      <S.Layout>
        <LeftSide />
        <S.Container>
          <S.Text style={{ fontSize: 20, fontWeight: 500, marginTop: 50, fontFamily: "SUIT-Bold" }}>
            후기 등록
          </S.Text>
          <S.Line />
          <S.Wrapper>
            <S.LContainer>
              <S.CouponWrapper>
                <S.TextWrapper>
                  <S.BrandName>{coupon.brandName}</S.BrandName>
                  <S.CouponName>{coupon.couponName}</S.CouponName>
                  <S.DateText>
                    <p>${coupon.startDate}~</p>
                    <p>${coupon.endDate}</p>
                  </S.DateText>
                </S.TextWrapper>
                <S.Logo src={coupon.brandImgUrl} />
              </S.CouponWrapper>
            </S.LContainer>
            <S.RContainer>
              <S.TextWrapper2>
                <S.Text style={{ fontSize: 20 }}>
                  {coupon.couponName}
                </S.Text>
                <S.Text style={{ fontSize: 20, fontFamily: "SUIT-Bold", marginTop: 80 }}>
                  쿠폰이 마음에 드셨나요?
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
