import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams} from "react-router-dom";
import * as S from "./UseCoupon.styled";
import { useGetCoupon, useGetMyPageCoupon, usePostLikeCoupon, usedGetLikeCoupon} from "../../hooks";
import { GetCouponDataRes } from "../../services";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import LeftSide from "../../components/common/Side/LeftSide";
import { constants } from "buffer";

export function UseCoupon() {
  const [searchParams] = useSearchParams();
  const couponId = searchParams.get("couponId");
  const navigate = useNavigate();
  const [isStarClicked, setIsStarClicked] = useState(JSON.parse(localStorage.getItem("starClicked") as string));
  const [coupon, setCoupon] = useState<GetCouponDataRes | undefined>(undefined);
  const canEditCoupon = false;
  const postLikeCoupon = usePostLikeCoupon();

  
  //const getLikeCoupon = usedGetLikeCoupon();

  // useEffect(() => {
  //   getLikeCoupon(couponId as string).then((res) => {
  //     localStorage.setItem('starClicked', JSON.stringify(!isStarClicked));
  //   });
  // },[couponId, isStarClicked]);
 
  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
    postLikeCoupon(couponId as string);
  };

  const email = JSON.parse(localStorage.getItem('authToken') as string).userEmail;
  

  // const getLikeStatus = JSON.parse(localStorage.getItem("likeStatus") as string);
  // const starClicked = getLikeStatus?.starClicked;
  // const id = getLikeStatus?.couponId;


  
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
        const res = await getCoupon(couponId);
        if (res) {
          setCoupon(res as GetCouponDataRes);
          console.log(res);
          
        }
      } catch (error) {
        console.log(error);
        navigate("../");
      }
    };

    fetchCoupon();
  }, [couponId, navigate]);

  // useEffect(() => {
    
  //   recentCoupons.push(coupon);
  //   recentCoupons = new Set(recentCoupons);
  //   recentCoupons = [...recentCoupons];
  //   localStorage.setItem("recentCoupons", JSON.stringify(recentCoupons));
  // }, []); // 빈 의존성 배열을 사용하여 한 번만 실행되도록 변경

  const handleEdit = ({couponId} : {couponId : number}) => {
   
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
        <S.ContainerBox>
        <S.LContainer>
          <S.CouponWrapper>
            <S.TextWrapper>
              <S.BrandName>{coupon.brandName}</S.BrandName> 
              <S.Name>{coupon.couponName}</S.Name>
              <S.DateText>
                <p>
                  {coupon.startDate}~
                </p>
                <p>{coupon.endDate}</p>
              </S.DateText>
            </S.TextWrapper>
            <S.BrandImgBox>
              <S.Logo src={`${process.env.PUBLIC_URL}${coupon.brandImgUrl}`}/>
            </S.BrandImgBox>
          </S.CouponWrapper>
          <S.LinkWrapper>
            <a href={`${coupon.couponUrl}`}><S.LinkImg src={`${process.env.PUBLIC_URL}/img/coupon/logo.svg`} /></a>
            <S.LinkText > 👈 쿠폰 페이지 바로가기
            </S.LinkText>
          </S.LinkWrapper>
          {coupon.description && <S.InfoBox>{coupon.description}</S.InfoBox>}
        </S.LContainer>
        <S.Line />
        <S.RContainer>
          <S.Review role="button" onClick={()=>{
            navigate(`/write/review?couponId=${couponId}`)
          }}>후기작성</S.Review>
          <S.StarContainer>
            <S.TextWrapper2>
              <S.BrandText >{coupon.brandName}</S.BrandText>
              <S.CouponText >{coupon.couponName}</S.CouponText>
              
            </S.TextWrapper2>
            <S.Star role="button" onClick={handleStarClick}>
              {/* 조건부 렌더링을 사용하여 이미지를 변경 */}
              {!isStarClicked || !coupon.likeStatus ? (
                <img
                src={`${process.env.PUBLIC_URL}/icon/auth/BStar.svg`}
                alt="BStar"
              />
              ) : (
                
                <img
                  src={`${process.env.PUBLIC_URL}/icon/auth/AStar.svg`}
                  alt="AStar"
                />
              )}
            </S.Star>
          </S.StarContainer>
          <S.SatisfactionBox>
          <S.Satisfaction>
            <S.SatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/good.svg`}
            />
            <S.SatisfactionText>{coupon.likeCount}명 만족</S.SatisfactionText>
          </S.Satisfaction>
          <S.unSatisfaction>
            <S.unSatisfactionButton
              src={`${process.env.PUBLIC_URL}/icon/auth/bad.svg`}
            />
            <S.unSatisfactionText>{coupon.dislikeCount}명 불만족</S.unSatisfactionText>     
          </S.unSatisfaction>
          </S.SatisfactionBox>
          <S.Number>{coupon.couponCode}</S.Number>
          <S.ReviewPage>제품 후기</S.ReviewPage>
          {email === coupon.email && (
            <S.User>
              <S.Edit
                src={`${process.env.PUBLIC_URL}/icon/auth/edit.svg`}
                role="button"
                onClick={() => {
                  navigate(`../coupon/registration/${coupon.couponId}`)
                }}
              />
            </S.User>
          )}
        </S.RContainer>
        </S.ContainerBox>
      </S.Container>
    </Layout>
  );
}
