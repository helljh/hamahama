import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { PostCouponDataReq } from "../../services";

//쿠폰 등록
export function usePostCreateCoupon() {
  const navigate = useNavigate();
  const postCreateCoupon = async (data: PostCouponDataReq) => {
    try {
      await axiosInstance.post("/coupon/create", data, {});
      alert("쿠폰 등록이 완료되었습니다.");
      navigate(`/main`);
    } catch (error) {
      console.log("쿠폰등록:" + error);
    }
  };
  return postCreateCoupon;
}

//쿠폰 수정
export function usePutUpdateCoupon() {
  const navigate = useNavigate();
  const putUpdateCoupon = async (couponId: string, data: PostCouponDataReq) => {
    try {
      await axiosInstance.put(`/coupon/${couponId}/update`, data, {});
      alert("쿠폰 수정이 완료되었습니다.");
      navigate(`/usecoupon/${couponId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return putUpdateCoupon;
}

//쿠폰 삭제
export function useDeleteCoupon() {
  const navigate = useNavigate();
  const deleteCoupon = async (couponId: string) => {
    try {
      await axiosInstance.delete(`/coupon/${couponId}/delete`, {});
      alert("쿠폰이 삭제되었습니다.");
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  return deleteCoupon;
}

//쿠폰 즐겨찾기
export function usePostLikeCoupon() {
  const postLikeCoupon = async (couponId: string) => {
    try {
      await axiosInstance.delete(`/coupon/${couponId}/delete`, {});
      alert("쿠폰 즐겨찾기가 등록되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };
  return postLikeCoupon;
}
