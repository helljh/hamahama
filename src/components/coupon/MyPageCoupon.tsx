import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useGetMyPageCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import * as S from "./MypageCoupon.Styled";

export function MyPageCoupon({
  active,
  order,
}: {
  active: boolean;
  order: string;
}) {

  const groupSize = 4; //분할 개수
  const [currentPage, setCurrentPage] = useState(0); //페이지 번호
  const [coupon, setCoupon] = useState<GetCouponDataRes[]>([]);
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);
  const getCouponList = useGetMyPageCoupon();

  const navigate = useNavigate();
  
  const mapDataInGroups = (
    groupSize: number,
    coupon: GetCouponDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < coupon.length; i += groupSize) {
      groups.push(coupon.slice(i, i + groupSize));
    }
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    getCouponList(order).then((res) => {
      if (res) {
        setCoupon(res);
        const groups = mapDataInGroups(groupSize, coupon);
        setGroups(groups);
      }
    });
  }, [coupon.length]);

  const currentGroup = groups[currentPage];

  return (
    <S.Container>
      <S.CouponGroup>
      {currentGroup ? 
          (currentGroup.map((coupon: GetCouponDataRes, idx: number) => (
            
            <S.Coupon onClick={()=>navigate(`/coupon/details?couponId=${coupon.couponId}`)}key={idx}>
              <S.CouponInfo>
                <S.BrandText>
                  {coupon.brandName}
                </S.BrandText>
                <S.Text>{coupon.couponName}</S.Text>
                <S.DateText>
                  <p>
                    {coupon.startDate}~
                  </p>
                  <p>{coupon.endDate}</p>
                </S.DateText>
              </S.CouponInfo>
              <S.BrandImgBox>
                <S.BrandImg
                  src={`${process.env.PUBLIC_URL}${coupon.brandImgUrl}`}
                />
              </S.BrandImgBox>
            </S.Coupon>
            
      ))) : <p>쿠폰 정보가 없습니다.</p>}
      </S.CouponGroup>
      {coupon.length != 0 && <S.ButtonBox>
        <S.Button
        //currentPage는 boolean(고정), true일 경우 이전 버튼으로 바뀌어야 함
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={active} //버튼 존재 여부(고정)
        onClick={() => {
          if(currentPage === 0)
            setCurrentPage(1);
          else setCurrentPage(0);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
      </S.ButtonBox>}
    </S.Container>
  );
}
