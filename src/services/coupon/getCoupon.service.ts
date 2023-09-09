//쿠폰 조회
export interface GetCouponDataRes {
  couponId: number;
  couponName: string;
  couponCode: string;
  couponUrl: string;
  brandName: string;
  brandImgUrl: string;
  description: string;
  popularity: number;
  startDate: string;
  endDate: string;
  email: string;
  likeCount: number;
  dislikeCount: number;
  likeStatus: boolean;
}
