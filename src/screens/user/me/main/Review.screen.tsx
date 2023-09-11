import React, { useState, useEffect } from "react";
import { Layout, Nav, Comments } from "../../../../components";
import LeftSide from "../../../../components/common/Side/LeftSide";
import { useGetCommentList } from "../../../../hooks";
import { GetCommentDataRes } from "../../../../services";
import * as S from "./Review.styled";

export function ReviewScreen() {
  

  return (
    <Layout>
      <Nav />
      <S.Layout>
        <LeftSide />
        <S.Container>
          <S.Text>댓글 목록</S.Text>
          <S.Line />
          <Comments/>
        </S.Container>
      </S.Layout>
    </Layout>
  );
}