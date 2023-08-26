import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { PostCommentDataRes, PostCommentDataReq } from "../../services";

//댓글 등록
export function usePostCreateComment() {
  const navigate = useNavigate();
  const postCreateComment = async (data: PostCommentDataReq) => {
    try {
      await axiosInstance.post("/comment/create", data, {});
      alert("댓글 등록이 완료되었습니다.");
      navigate(`/main`);
    } catch (error) {
      console.log(error);
    }
  };
  return postCreateComment;
}

//댓글 조회
export function usePostComment() {
  const postComment = async (data: PostCommentDataReq) => {
    try {
      const res: PostCommentDataRes = await axiosInstance.post(
        "/comment",
        data
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return postComment;
}

//댓글 수정
export function usePostUpdateComment() {
  const navigate = useNavigate();
  const postUpdateComment = async (data: PostCommentDataReq) => {
    try {
      await axiosInstance.post(`/coupon/update`, data, {});
      alert("댓글 수정이 완료되었습니다.");
      navigate(`/main`);
    } catch (error) {
      console.log(error);
    }
  };
  return postUpdateComment;
}

//댓글 삭제
export function useDeleteComment() {
  const navigate = useNavigate();
  const deleteComment = async (data: PostCommentDataReq) => {
    try {
      await axiosInstance.post(`/coupon/delete`, data, {});
      alert("쿠폰이 삭제되었습니다.");
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  return deleteComment;
}
