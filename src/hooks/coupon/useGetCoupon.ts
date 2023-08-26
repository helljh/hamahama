import { axiosInstance } from "../../apis";
import { GetCouponDataRes } from "../../services";
// import { couponData_3, couponData_4 } from "../../components";

//쿠폰 상세 페이지 - 단일 쿠폰 조회
export function useGetCoupon() {
  const getCoupon = async (couponId: number) => {
    try {
      const response = await axiosInstance.get<GetCouponDataRes>(
        `/coupon/${couponId}`
      );
      if (response) {
        console.log(response.data);
        return response.data;
      } else console.log("no data");
    } catch (error) {
      console.log("쿠폰조회" + error);
      return error;
    }
  };
  return getCoupon;
}

//브랜드 해당 쿠폰 리스트
export function useGetCouponList() {
  const getCouponList = async (brandName: string) => {
    try {
      const response = await axiosInstance.get(`/coupon/${brandName}/list`, {
        headers: { "Content-type": "application/json" },
      });
      if (response) console.log(response);
      else console.log("no data");
      return response.data;
    } catch (error) {
      console.log("요청 실패: " + error);
      //return couponData_4;
    }
  };
  return getCouponList;
}

//키워드 검색 쿠폰 리스트
export function useGetSearchCoupon() {
  const getSearchCoupon = async (searchKeyword: string) => {
    try {
      const response = await axiosInstance.get<GetCouponDataRes[]>(
        `/coupon/search/list?searchKeyword=${searchKeyword}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      if (response) {
        console.log(response);
        return response.data;
      } else {
        console.log("no data");
        alert("해당하는 쿠폰이 없습니다.");
        return;
      }
    } catch (error) {
      console.log("요청 실패: " + error);
      alert("해당하는 쿠폰이 없습니다.");
      return;
    }
  };
  return getSearchCoupon;
}

//메인 페이지 속 쿠폰 정렬
//인기순 -> likeCount, 최신순 -> createDate
export function useGetOrderByCoupon() {
  const orderByCoupon = async (
    orderBy: string
  ) => {
    try {
      const response = await axiosInstance.get<GetCouponDataRes[]>(
        `/coupon/main?orderby=${orderBy}`
      );
      if (response) console.log("메인페이지 쿠폰" + response.data);
      else console.log("no data");
      return response.data;
    } catch (error) {
      console.log("댓글 요청 오류" + error);
      //return couponData_3;
    }
  };
  return orderByCoupon;
}
