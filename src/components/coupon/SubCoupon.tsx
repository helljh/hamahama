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
  const [currentPage, setCurrentPage] = useState(false); //페이지 번호
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
    if (brandName) {
      getCouponList(brandName).then((res) => {
        if (res) {
          setCouponData(res);
          const groups = mapDataInGroups(groupSize, couponData.flat());
          setGroups(groups);
        } else {
          const groups = mapDataInGroups(groupSize, couponData_4.flat());
          setGroups(groups);
          alert("쿠폰 정보가 없습니다.");
        }
      });
    }
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CouponGroup key={groupIndex}>
          {group.map((coupon: GetCouponDataRes, idx: number) => (
            <S.Coupon key={idx}>
              <S.CouponInfo>
                <S.Text style={{ fontFamily: "bold", fontSize: "13px" }}>
                  {coupon.brandName}
                </S.Text>
                <S.Text>{coupon.couponName}</S.Text>
                <S.Text>
                  <p style={{ fontSize: "3px", margin: "0 0 -10px 0" }}>
                    {coupon.startDate}~
                  </p>
                  <p style={{ fontSize: "3px" }}>{coupon.endDate}</p>
                </S.Text>
              </S.CouponInfo>
              <S.BrandImg />
            </S.Coupon>
          ))}
        </S.CouponGroup>
      ))}
      <S.Button
        src={`${process.env.PUBLIC_URL}/img/coupon/${
          currentPage ? "next" : "before"
        }_Button.png`}
        active={active}
        onClick={() => {
          setCurrentPage(!currentPage);
        }}
      />
    </S.Container>
  );
}
