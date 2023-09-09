import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
`;
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
  width: 275px;
  border-radius: 10px;
  background-color: #eff9ff;
  padding: 20px;
  margin-right: 5em;
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
  font-family: SUIT-Bold;
  margin-bottom: 10px;
`;

export const Coupon = styled.div`
  font-family: SUIT-Light;
  font-size: 12px;
  `;

export const Comment = styled.p`
  font-size: 12px;
  line-height: 16px;
  max-width: 200px;
`;

export const CommentGroup = styled.div`
  display:flex;
  flex-direction: row;
  margin-left: 8em;
  margin-bottom: 5em;
`;

export const ButtonBox = styled.div`
    position: absolute;
    left: 90%;
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
