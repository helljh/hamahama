import { useState, useEffect } from "react";
import { GetCommentDataRes } from "../../services";
import { useGetComment } from "../../hooks";
import { commentData_3 } from "./tempCommentData";

import * as S from "./MainComment.styled";

export function MainComment() {
  const groupSize = 3;
  const [commentData, setCommentData] = useState<GetCommentDataRes[]>([]);
  const [groups, setGroups] = useState<GetCommentDataRes[][]>([]);

  const getComment = useGetComment();
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
    getComment().then((res) => {
      if (res) {
        setCommentData(res);
        const groups = mapDataInGroups(groupSize, commentData.flat());
        setGroups(groups);
      } else {
        setCommentData(commentData_3);
        const groups = mapDataInGroups(groupSize, commentData.flat());
        setGroups(groups);
      }
    });
  }, [commentData.length]);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.CommentGroup key={groupIndex}>
          {group.map((comment: GetCommentDataRes, idx: number) => (
            <S.BlueContainer key={idx}>
              <S.Img
                src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}
              />
              <S.CommentInfo>
                <S.Brand>{comment.brandName}</S.Brand>
                <S.Coupon>{comment.couponName}</S.Coupon>
                <S.Comment>{comment.comment}</S.Comment>
              </S.CommentInfo>
            </S.BlueContainer>
          ))}
        </S.CommentGroup>
      ))}
    </S.Container>
  );
}
