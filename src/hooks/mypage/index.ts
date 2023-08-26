import { axiosInstance } from "../../apis";
import { GetCommentDataRes, GetCouponDataRes } from "../../services";

//마이페이지 댓글
export function useGetMyPageInfo() {
  const getMyPageComment = async (order: string) => {
    try {
      const res: GetCommentDataRes = await axiosInstance.get(
        `mypage/${order}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getMyPageComment;
}

//마이페이지 쿠폰
export function useGetMyPageCoupon() {
  const getMyPageCoupon = async (order: string) => {
    try {
      const res: GetCouponDataRes[] = await axiosInstance.get(
        `mypage/${order}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getMyPageCoupon;
}
