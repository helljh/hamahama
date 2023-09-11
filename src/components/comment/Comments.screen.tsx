import {useState, useEffect} from "react";
import * as S from "./Comments.styled";
import { GetCommentDataRes } from "../../services";
import { useGetMyPageInfo, useGetCommentList } from "../../hooks";

export function Comments() {
  const groupSize = 3;
  const [groups, setGroups] = useState<GetCommentDataRes[][]>([]);
  const [currentPage, setCurrentPage] = useState(0); //페이지 번호
  const [commentData, setCommentData] = useState<GetCommentDataRes[]>([]);
  const getCommentList = useGetCommentList();

  useEffect(() => {
    getCommentList().then((res)=>{
        console.log(res);
        setCommentData(res as GetCommentDataRes[]);
    })
  }, []);


//   const getMyPageComments = useGetMyPageInfo();

//   const mapDataInGroups = (
//     groupSize: number,
//     commentData: GetCommentDataRes[]
//   ) => {
//     const groups = [];
//     for (let i = 0; i < commentData.length; i += groupSize) {
//       groups.push(commentData.slice(i, i + groupSize));
//     }
//     return groups;
//   };

 

//   useEffect(() => {
//     getMyPageComments(order).then((res) => {
//       if (res) {
//         console.log(res);
//         setCommentData(res as GetCommentDataRes[]);
//         const groups = mapDataInGroups(groupSize, commentData);
//         setGroups(groups);
//       } else {
//         const groups = mapDataInGroups(groupSize, commentData.flat());
//         setGroups(groups);
//       }
//     });
//   }, [commentData?.length]);

//   const currentGroup = groups[currentPage];

  return (
    <S.Container>
        {commentData?.map((comment: GetCommentDataRes, index : number) => (
            <S.ReviewBox>
                <S.ImgBox>
                    <S.Img src={`${process.env.PUBLIC_URL}/icon/auth/profile_Icon.svg`}/>
                </S.ImgBox>
                <S.NameBox>
                    <S.Brand>{comment.brandName}</S.Brand>
                    <S.Coupon>{comment.couponName}</S.Coupon>
                </S.NameBox>
                <S.CommentBox>
                    <S.Comment>"{comment.comment}"</S.Comment>
                </S.CommentBox> 
            </S.ReviewBox>
        ))}
    </S.Container>
  );
}

