import styled from "styled-components";

export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 110px;
  width: 274px;
  border-radius: 10px;
  background-color: #eff9ff;
  padding: 20px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0 0 15px;
`;

export const Brand = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Coupon = styled.div``;

export const Comment = styled.p`
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
`;
