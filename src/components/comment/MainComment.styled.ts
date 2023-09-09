import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 275px;
  border-radius: 10px;
  background-color: #eff9ff;
  padding: 10px 20px 10px 20px;
  margin: 0 30px 0 30px;
`;
export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 20px 0 0;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0 0 0;
`;

export const Brand = styled.div`
  font-family: SUIT-Bold;
  margin-bottom: 10px;
`;

export const Coupon = styled.div`
  font-family: SUIT-Light;
  font-size: 13px;
`;

export const Comment = styled.p`
  font-family: SUIT-Light;
  font-size: 13px;
  line-height: 16px;
  height:auto;
  word-break: break-all;
  overflow: hidden;
  width: 200px;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 125px;
`;
export const Button = styled.img<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
