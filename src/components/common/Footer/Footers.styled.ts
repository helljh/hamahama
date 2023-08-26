import styled from "styled-components";

export const Container = styled.div`
  margin-top: auto;
  height: 150px;
`;

export const Start = styled.div`
  border: 1px solid #000000;
`;

export const End = styled.div`
  border: 15px solid #358cc1;
`;

export const Logo = styled.img`
  width: 184px;
  height: 35px;
  margin: 50px 100px 50px 20px;
`;

export const Page = styled.div``;

export const Email = styled.div``;

export const Sns = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Insta = styled.img`
  width: 20px;
  height: 21px;
`;

export const Line = styled.div`
  border-left: 1px solid #000000;
  height: 149px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  & ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
  }
  & li {
    font-size: 13px;
    padding: 2px 0 0 0;
    font-weight: 100;
  }

  & a {
    text-decoration: none;
    color: #231815;
  }

  & p {
    font-size: 16px;
  }
`;
