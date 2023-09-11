import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { PostCouponDataReq } from "../../services";

//쿠폰 등록
export function usePostCreateCoupon() {
  const navigate = useNavigate();
  const postCreateCoupon = async (data: PostCouponDataReq) => {
    try {
      const res = await axiosInstance.post("/coupon/create", data, {
        headers: { "Content-type": "application/json" }
      });
      if(res){
        alert("쿠폰 등록이 완료되었습니다.");
        console.log(res);
        navigate(`/coupon/details?couponId=${res.data}`);
        return res;
      }
      
      
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
      const res = await axiosInstance.put(`/coupon/${couponId}/update`, data, {
        headers: { "Content-type": "application/json" }
      });
      alert("쿠폰 수정이 완료되었습니다.");
      navigate(`/coupon/details?couponId=${couponId}`);
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
  const authToken = localStorage.getItem("authToken");
  const initialData = JSON.parse(authToken as string);
  const email = initialData.userEmail;
  const postLikeCoupon = async (couponId: string) => {
    try {
      const res = await axiosInstance.post(`/coupon/${email}/${couponId}/like`);
      if(res){
        console.log(res);
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return postLikeCoupon;
}
