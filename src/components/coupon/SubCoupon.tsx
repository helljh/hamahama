import { useState, useEffect } from "react";
import { useGetCouponList } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import * as S from "./SubCoupon.Styled";
import { couponData_4 } from "./tempCouponData";

export function SubCoupon({
  active,
  brandName,
}: {
  active: boolean;
  brandName: string;
}) {
  const groupSize = 4; //분할 개수
  //const [currentPage, setCurrentPage] = useState(false); //페이지 번호
  const [couponData, setCouponData] = useState<GetCouponDataRes[]>([]);
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);
  const getCouponList = useGetCouponList();

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
      getCouponList(brandName).then((res) => {
        if (res) {
          setCouponData(res);
          const groups = mapDataInGroups(groupSize, couponData);
          setGroups(groups);
        } else {
          const groups = mapDataInGroups(groupSize, couponData_4.flat());
          setGroups(groups);
          alert("쿠폰 정보가 없습니다.");
        }
      });
  }, [couponData.length]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.BrandText>
                  {brandName}
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
