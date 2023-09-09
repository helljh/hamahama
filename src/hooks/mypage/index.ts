import { axiosInstance } from "../../apis";
import { GetCommentDataRes, GetCouponDataRes, GetBrandDataRes } from "../../services";

//마이페이지 댓글
export function useGetMyPageInfo() {
  const email = JSON.parse(localStorage.getItem("authToken") as string).userEmail;
  const getMyPageComment = async (order: string) => {
    try {
      const res = await axiosInstance.get<GetCommentDataRes[]>(
        `mypage/${order}?email=${email}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res.data;
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

//브랜드 즐겨찾기 하기
export function useSetBrandLike(){
  const authToken = localStorage.getItem("authToken");
  const initialData = JSON.parse(authToken as string);
  const setBrandLike = async(brandId: number) => {
    try{
      const res = await axiosInstance.get(
        `/mypage/${initialData.userEmail}/${brandId}/edit`
      );
      return res.data;
    }catch(err) {
      console.log(err);
    }
  };
  return setBrandLike;
}


