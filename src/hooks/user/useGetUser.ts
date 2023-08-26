import { axiosInstance } from "../../apis";
import { GetCouponDataRes, GetBrandDataRes } from "../../services";

//즐겨찾기한 쿠폰
export function useGetLikeCoupon() {
  const getLikeCoupon = async () => {
    try {
      const res: GetCouponDataRes = await axiosInstance.get(
        "mypage/likeCoupon"
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getLikeCoupon;
}

//즐겨찾기한 브랜드
export function useGetLikeBrand() {
  const getLikeBrand = async () => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        "mypage/likeBrand"
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getLikeBrand;
}
