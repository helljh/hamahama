import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useGetMyPageCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import * as S from "./MyPageCouponDetail.Styled";

export function MyPageCouponDetail({
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
    console.log(groups);
    return groups;
  };

  // getCouponData -> flat: 내부 배열을 풀어줌
  useEffect(() => {
    getCouponList(order).then((res) => {
      if (res) {
        console.log(res);
        setCoupon(res);
        const groups = mapDataInGroups(groupSize, coupon);
        setGroups(groups);
      }
    });
  }, [coupon.length]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
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
          ))}
        </S.CouponGroup>
      ))}
    </S.Container>
  );
}
