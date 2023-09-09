import {useState, useEffect} from "react";
import * as S from "./Comment.styled";
import { GetCommentDataRes } from "../../services";
import { useGetMyPageInfo } from "../../hooks";

export function Comment({order, btnStatus}: {order:string, btnStatus:boolean}) {
  const groupSize = 3;
  const [commentData, setCommentData] = useState<GetCommentDataRes[]>([]);
  const [groups, setGroups] = useState<GetCommentDataRes[][]>([]);
  const [currentPage, setCurrentPage] = useState(0); //페이지 번호

  const getMyPageComments = useGetMyPageInfo();

  const mapDataInGroups = (
    groupSize: number,
    commentData: GetCommentDataRes[]
  ) => {
    const groups = [];
    for (let i = 0; i < commentData.length; i += groupSize) {
      groups.push(commentData.slice(i, i + groupSize));
    }
    return groups;
  };

 

  useEffect(() => {
    getMyPageComments(order).then((res) => {
      if (res) {
        console.log(res);
        setCommentData(res as GetCommentDataRes[]);
        const groups = mapDataInGroups(groupSize, commentData);
        setGroups(groups);
      } else {
        const groups = mapDataInGroups(groupSize, commentData.flat());
        setGroups(groups);
      }
    });
  }, [commentData?.length]);

  const currentGroup = groups[currentPage];

  return (
    <S.Container>
      {!btnStatus ? groups.map((group, groupIndex) => (
        <S.CommentGroup key={groupIndex}>
          {group.map((comment: GetCommentDataRes, idx: number) => (
            <S.BlueContainer key={idx}>
            <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}/>
            <S.CommentInfo>
              <S.Brand>{comment.brandName}</S.Brand>
              <S.Coupon>{comment.couponName}</S.Coupon>
              <S.Comment>{comment.comment}</S.Comment>
            </S.CommentInfo>
            </S.BlueContainer>)
          )}
        </S.CommentGroup>
      )):
        <S.CommentGroup>
          {currentGroup?.map((comment: GetCommentDataRes, idx: number) => (
            <S.BlueContainer key={idx}>
            <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}/>
            <S.CommentInfo>
              <S.Brand>{comment.brandName}</S.Brand>
              <S.Coupon>{comment.couponName}</S.Coupon>
              <S.Comment>{comment.comment}</S.Comment>
            </S.CommentInfo>
            </S.BlueContainer>))}
        </S.CommentGroup>
      }
      {btnStatus == true && commentData.length != 0 && <S.ButtonBox>
        <S.Button
        //currentPage는 boolean(고정), true일 경우 이전 버튼으로 바뀌어야 함
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={true} //버튼 존재 여부(고정)
        onClick={() => {
          if(currentPage === 0)
            setCurrentPage(1);
          else setCurrentPage(0);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
      </S.ButtonBox>}
    </S.Container>
  );
}

