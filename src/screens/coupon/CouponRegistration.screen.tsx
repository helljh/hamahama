import { useState, useEffect, useRef } from "react";
import {useParams} from "react-router-dom";
import { usePostCreateCoupon, usePutUpdateCoupon, useGetCoupon} from "../../hooks";
import { PostCouponDataReq , GetCouponDataRes} from "../../services";
import { Layout } from "../../components/common/Layout";
import { Nav } from "../../components/common/Nav";
import {Search} from "../../components/common/Search";
import * as S from "./CouponRegistration.styled";
import LeftSide from "../../components/common/Side/LeftSide";
import { BrandName } from "./UseCoupon.styled";

export function CouponRegistration() {
  const {couponId} = useParams();
  const [coupon, setCoupon] = useState<GetCouponDataRes | undefined>(undefined)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  const [inputValues, setInputValues] = useState<PostCouponDataReq>({
    brandName: "",
    couponName: "",
    couponCode: "",
    couponUrl: "",
    startDate: "",
    endDate: "",
    description: "",
    email: JSON.parse(localStorage.getItem("authToken") as string).userEmail,
  });

  const createCoupon = usePostCreateCoupon();
  const updateCoupon = usePutUpdateCoupon();
  const getCouponInfo = useGetCoupon();

  useEffect(()=>{
    if(couponId !== "save"){
      getCouponInfo(couponId as string).then((res)=>{
        console.log(res);
        setCoupon(res as GetCouponDataRes);
        handleChange(res as GetCouponDataRes);
        setKeyword((res as GetCouponDataRes).brandName);
      })
    }
  }, [couponId]);
  

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    
  }

  const handleBrandNameChange = (keyword : string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      brandName: keyword,
    }));
  };

  const handleChange = (coupon : GetCouponDataRes) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      brandName: coupon.brandName,
      couponName: coupon.couponName,
      couponCode: coupon.couponCode,
      couponUrl: coupon.couponUrl,
      startDate: coupon.startDate,
      endDate: coupon.endDate,
      description: coupon.description,
    }));
  };


  
  // 예시: "새로운 브랜드"로 brandName을 업데이트하려면
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePutButtonClick = () => {
    
    // 사용자가 입력한 값 출력 테스트
    console.log("Input values:", inputValues);
    if(couponId === "save"){
      createCoupon(inputValues).then((res)=>{
        console.log(res);
      });
    }else{
      updateCoupon(couponId as string, inputValues).then((res)=>{
        console.log(res);
    });
  };
}

  const setInputValue = (letter: string, status: boolean) => {
    setKeyword(letter);
    handleBrandNameChange(letter);
    setIsSearchOpen(status);
  }


  return (
    <Layout>
      <Nav />
      <S.Container>
        <LeftSide />
        <S.Wrapper >
          <S.Text>쿠폰 등록</S.Text>
          <S.InputWrapper >
            <S.Input
              placeholder="브랜드"
              name="brandName"
              value={keyword}
              onChange={onChangeData}
            />
            <S.SearchIcon
              role="button"
              src={`${process.env.PUBLIC_URL}/icon/auth/searchIcon.svg`}
              onClick={toggleSearch}
            />
          </S.InputWrapper>
          {isSearchOpen && (
        <S.SearchList >
          <Search screen={"registration"} inputValue={setInputValue} keyword={keyword}/>
        </S.SearchList>
        )}
          <S.Name
            placeholder="상품 이름"
            name="couponName"
            value={inputValues.couponName}
            onChange={handleInputChange}
            onClick={()=>setIsSearchOpen(false)}
          />
          <S.Date
            placeholder="시작 날짜를 입력해주세요.(YYYY-MM-DD)"
            name="startDate"
            value={inputValues.startDate}
            onChange={handleInputChange}
          />
          <S.Date
            placeholder="종료 날짜를 입력해주세요.(YYYY-MM-DD)"
            name="endDate"
            value={inputValues.endDate}
            onChange={handleInputChange}
          />
          <S.Link
            placeholder="링크"
            name="couponUrl"
            value={inputValues.couponUrl}
            onChange={handleInputChange}
          />
          <S.Code
            placeholder="쿠폰번호"
            name="couponCode"
            value={inputValues.couponCode}
            onChange={handleInputChange}
          />
          <S.Bottom>
            <S.ReviewBox>
              <S.User
                name="description"
                value={inputValues.description}
                onChange={handleInputChange}
                placeholder="이 쿠폰에 대한 소개글을 작성해주세요 (200자)"
                maxLength={200}
              ></S.User>
            </S.ReviewBox>
            <S.Put
              role="button"
              src={`${process.env.PUBLIC_URL}/img/auth/registration.svg`}
              onClick={handlePutButtonClick}
            />
          </S.Bottom>
        </S.Wrapper>
      </S.Container>
    </Layout>
  );
}
