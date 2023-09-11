import { useState, useEffect } from "react";
import { useGetCoupon } from "../../hooks";
import { GetCouponDataRes } from "../../services";
import * as S from "./SubCoupon.Styled";

export function Coupon({ active }: { active: boolean }) {
  const groupSize = 4; //분할 개수
  const list = JSON.parse(localStorage.getItem("recentCoupons") as string);

  const [currentPage, setCurrentPage] = useState(0); //페이지 번호
  const [couponData, setCouponData] = useState<GetCouponDataRes[]>([]);
  const [groups, setGroups] = useState<GetCouponDataRes[][]>([]);
  const getCouponList = useGetCoupon();

  const mapDataInGroups = (
    groupSize: number,
    couponData: GetCouponDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < couponData.length; i += groupSize) {
      groups.push(couponData.slice(i, i + groupSize));
    }
    console.log(groups);
    return groups;
  };

  useEffect(() => {
    //리스트가 존재하는지, 배열 형식인지 확인
    if (list && Array.isArray(list)) {
      list.forEach(async(item) => {
        //객체 amount 속성 활용
        await getCouponList(item).then((res)=>{
          couponData.push(res as GetCouponDataRes);
        })
      });
    }
    setCouponData(couponData);
  }, [couponData.length]);

  console.log(couponData);


  // useEffect(()=>{
  //   let recentCoupons = JSON.parse(localStorage.getItem('recentCoupons') as string);
  //   setCouponData(recentCoupons);
  //   const groups = mapDataInGroups(groupSize, couponData);
  //       setGroups(groups);
  // });

  const currentGroup = groups[currentPage];

  return (
    <S.Container>
      {currentGroup?.map((coupon: GetCouponDataRes, idx: number) => (
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
      <S.Button
        //currentPage는 boolean(고정), true일 경우 이전 버튼으로 바뀌어야 함
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={active} //버튼 존재 여부(고정)
        onClick={() => {
          if(currentPage == 0){
            setCurrentPage(1);
          }else{
            setCurrentPage(0);
          }
          
          console.log(active);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
    </S.Container>
  );
}
