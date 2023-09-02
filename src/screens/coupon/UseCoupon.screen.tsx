// import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import * as S from "./UseCoupon.styled";
// import { useGetCoupon, useGetMyPageCoupon } from "../../hooks";
// import { GetCouponDataRes } from "../../services";
// import { Layout } from "../../components/common/Layout";
// import { Nav } from "../../components/common/Nav";
// import LeftSide from "../../components/common/Side/LeftSide";

// export function UseCoupon() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const couponId  = searchParams.get('couponId');
//   console.log(couponId);
//   const navigate = useNavigate();
//   const [isStarClicked, setIsStarClicked] = useState(false);
//   const [coupon, setCoupon] = useState<GetCouponDataRes | undefined>(undefined);
//   const canEditCoupon = 1;
//   const handleStarClick = () => {
//     setIsStarClicked(!isStarClicked);
//   };

//   const getCoupon = useGetCoupon();
//   const getMyPageCoupon = useGetMyPageCoupon();

//   useEffect(() => {
//     getCoupon(Number(couponId))
//       .then((res) => {
//         console.log(res);
//         if (res) setCoupon(res);
//       })
//       .catch(() => {
//         alert("유효하지 않은 쿠폰입니다.");
//         navigate("../");
//       });
//   }, []);

//   useEffect(() => {
//     getMyPageCoupon("");
//   });
//   const handleEdit = () => {
//     console.log("수정하기 버튼이 클릭되었습니다.");
//     // 여기에 실제 수정하는 로직을 추가할 수 있습니다.
//   };

//   const handleRegister = () => {
//     console.log("등록하기 버튼이 클릭되었습니다.");
//     // 여기에 실제 등록하는 로직을 추가할 수 있습니다.
//   };

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./UseCoupon.styled";
import { useGetCoupon, useGetMyPageCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";

export function UseCoupon() {
  const [searchParams] = useSearchParams();
  const couponId = searchParams.get("couponId");
  const navigate = useNavigate();
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [coupon, setCoupon] = useState<GetCouponDataRes | undefined>(undefined);
  const canEditCoupon = 1;

  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  const getCoupon = useGetCoupon();
  const getMyPageCoupon = useGetMyPageCoupon();

  useEffect(() => {
    const fetchCoupon = async () => {
      if (!couponId) {
        alert("유효하지 않은 쿠폰입니다.");
        navigate("../");
        return;
      }

      try {
        const res = await getCoupon(Number(couponId));
        console.log(res);
        if (res) setCoupon(res as GetCouponDataRes);
      } catch (error) {
        alert("쿠폰을 가져오는 중에 오류가 발생했습니다.");
        navigate("../");
      }
    };

    fetchCoupon();
  }, [couponId, navigate, getCoupon]);

  useEffect(() => {
    getMyPageCoupon(""); // 이 부분은 의도치 않은 호출로 보입니다. 의존성 배열이 필요합니다.
  }, []); // 빈 의존성 배열을 사용하여 한 번만 실행되도록 변경

  const handleEdit = () => {
    console.log("수정하기 버튼이 클릭되었습니다.");
    // 여기에 실제 수정하는 로직을 추가할 수 있습니다.
  };

  const handleRegister = () => {
    console.log("등록하기 버튼이 클릭되었습니다.");
    // 여기에 실제 등록하는 로직을 추가할 수 있습니다.
  };

  if (!coupon) {
    // 쿠폰 데이터가 아직 로드되지 않은 경우 로딩 스피너 또는 메시지를 표시할 수 있습니다.
    return <div>Loading...</div>;
  }



  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.LContainer>
          <S.CouponWrapper>
            <S.TextWrapper>
              <S.BrandName>{coupon.brandName}</S.BrandName> 
              <S.Name>{coupon.couponName}</S.Name>
              <S.Text>
                <p style={{ fontSize: "3px", margin: "0 0 -10px 0" }}>
                  {coupon.startDate}~
                </p>
                <p style={{ fontSize: "3px" }}>{coupon.endDate}</p>
              </S.Text>
            </S.TextWrapper>
            <S.Logo src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} />
          </S.CouponWrapper>
          <S.LinkWrapper>
            <S.LinkImg src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} />
            <S.Link>link</S.Link>
          </S.LinkWrapper>
          <S.InfoBox>{coupon.description}</S.InfoBox>
        </S.LContainer>
        <S.Line />
        <S.RContainer>
          <S.Review role="button">후기작성</S.Review>
          <S.StarContainer>
            <S.TextWrapper2>
              <S.Text style={{ fontSize: 25 }}>{coupon.brandName}</S.Text>
              <S.Text style={{ fontSize: 15 }}>{coupon.couponName}</S.Text>
              
            </S.TextWrapper2>
            <S.Star role="button" onClick={handleStarClick}>
              {/* 조건부 렌더링을 사용하여 이미지를 변경 */}
              {isStarClicked ? (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/AStar.svg`}
                  alt="AStar"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/BStar.svg`}
                  alt="BStar"
                />
              )}
            </S.Star>
          </S.StarContainer>
          <S.Satisfaction>
            <S.SatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/good.svg`}
            />
            <S.SatisfactionText>00% 만족</S.SatisfactionText>
            <S.SatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/bad.svg`}
            />
            <S.SatisfactionText>00% 불만족</S.SatisfactionText>
          </S.Satisfaction>
          <S.Number>쿠폰 번호</S.Number>
          <S.ReviewPage>제품 후기</S.ReviewPage>
          {canEditCoupon && (
            <S.User>
              <S.Edit
                src={`${process.env.PUBLIC_URL}/icon/auth/edit.svg`}
                role="button"
                onClick={handleEdit}
              />
              <S.Save
                src={`${process.env.PUBLIC_URL}/icon/auth/save.svg`}
                role="button"
                onClick={handleRegister}
              />
            </S.User>
          )}
        </S.RContainer>
      </S.Container>
    </Layout>
  );
}
