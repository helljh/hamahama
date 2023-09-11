import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { useGetOrderByCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
//import { couponData_3 } from "./";
import * as S from "./MainCoupon.Styled";

export function MainCoupon({ orderBy }: { orderBy: string }) {
  const groupSize = 3; //분할 개수
  const [couponData, setCouponData] = useState<GetCouponDataRes[]>([]);
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);
  const orderByCoupon = useGetOrderByCoupon();

  const navigate = useNavigate();
  const mapDataInGroups = (
    groupSize: number,
    couponData: GetCouponDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    // 키워드 검색
    orderByCoupon(orderBy).then((res) => {
      console.log(res);
      if (res) {
        setCouponData(res);
        const groups = mapDataInGroups(groupSize, couponData);
        setGroups(groups);
      } else {
        alert("쿠폰 정보가 없습니다.");
        console.log(groups);
      }
    });
  }, [couponData.length]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
            <S.Coupon key={idx}  onClick={()=>{
              navigate(`/coupon/details?couponId=${coupon.couponId}`);
            }}>
              <S.CouponInfo>
                <S.BrandText>{coupon.brandName}</S.BrandText>
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
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
