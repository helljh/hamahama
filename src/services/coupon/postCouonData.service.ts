//쿠폰 등록
export interface PostCouponDataReq {
  brandName: string;
  couponName: string;
  couponCode: string;
  couponUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  email: string;
}
