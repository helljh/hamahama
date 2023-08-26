import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  width: 300px;
  border-radius: 10px;
  background-color: #eff9ff;
  padding: 10px 20px 10px 20px;
  margin: 0 30px 0 30px;
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 20px 0 0;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0 0 5px;
`;

export const Brand = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Coupon = styled.div`
  font-size: 14px;
`;

export const Comment = styled.p`
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
`;
