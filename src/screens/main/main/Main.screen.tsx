import styled from "styled-components";
import { Header } from "../../../components/common";
import {useLocation, useSearchParams} from "react-router-dom";
import { Screen } from "../../../components";
import { HomeScreen, CenterScreen } from "../../main";
export function MainScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  console.log(window.location.search);
  console.log("email = " + email);
  
  if(window.location.search.length != 0){
    const auth = {
      accessToken: searchParams.get("accessToken"),
      refreshToken: searchParams.get("refreshToken"),
      isAuthenticated: true,
      userEmail: email,
    };
    localStorage.setItem("authToken", JSON.stringify(auth));
  }
 

  const isAuthenticated = true; // 예시 값

  const logout = () => {
    // 로그아웃 로직을 구현해야 함
  };
  return (
    <Screen header={false} nav={false} side={false} footer={true}>
      <Container>
        <Header isAuthenticated={isAuthenticated} logout={logout} />
        <HomeScreen />
        <CenterScreen />
      </Container>
    </Screen>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/img/home/home.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
`;
