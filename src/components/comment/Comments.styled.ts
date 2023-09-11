import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  height: 100%;
  width: 100%;
  margin-left: 50px;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
`;

export const ImgBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Brand = styled.div`
  font-family: SUIT-Bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Coupon = styled.div`
  font-family: SUIT-Light;
  font-size: 15px;
  `;

export const Comment = styled.p`
  font-size: 15px;
  line-height: 16px;
`;

export const CommentBox = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    margin-left: 3em;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 0 0 15px;
`;


export const Line = styled.div`
  margin: 20px 0 60px 0;
  border: 1px solid #3c87bd;
  width: 1095px;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: 30px;
  font-size: 20px;
  
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  background-color: #eff9ff;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 28px;
  margin-bottom: 1em;
  width: 85%;
  padding: 2em;
`;

export const NameBox = styled.div`
    margin-left: 2em;
    width: 30%;
`;



