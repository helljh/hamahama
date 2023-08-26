//댓글 상태 변경
export interface PostCommentReq {
  userEmail: string;
  couponName: string;
  comment: string;
}

//댓글 조회
export interface PostCommentDataReq {
  userEmail: string;
  couponName: string;
}
export interface PostCommentDataRes {
  brandName: string;
  couponName: string;
  comment: string;
}
