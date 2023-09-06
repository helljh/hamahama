import { axiosInstance } from "../../apis";
import { GetCommentDataRes, GetCouponDataRes, GetBrandDataRes } from "../../services";

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
  const authToken = localStorage.getItem("authToken");
  const initialData = JSON.parse(authToken as string);
  const getMyPageCoupon = async (order: string) => {
    try {
      const res = await axiosInstance.get<GetCouponDataRes[]>(
        `/mypage/${order}?email=${initialData.userEmail}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getMyPageCoupon;
}

