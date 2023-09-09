import { styled } from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainText = styled.h1`
  font-family: SUIT-Bold;
  padding-top: 20px;
  margin-bottom: 90px;
`;
export const Text = styled.p`
  font-family: SUIT-Bold;
  font-size: large;
`;
export const ViewText = styled.p`
  font-family: SUIT-Light;
  font-size: 12px;
  padding-top: 15px;
  cursor: pointer;
  margin-right: 1em;
  
`;

export const LikeText = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const Link = styled.a`
  text-decoration: none;
  color:black;
`;
export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px -5px 60px;
`;

export const MyCoupon = styled.div`
  position:relative;
  width: 100%;
`;

export const Line = styled.div`
  width: 95%;
  border: 1px solid #3c87bd;
  margin: 0 0 70px 50px;
`;


export const SearchList = styled.div`
  position: absolute;
  top: 8em;
  left: 85%;
  margin-left: 1.5em;
  z-index: 2;
`
