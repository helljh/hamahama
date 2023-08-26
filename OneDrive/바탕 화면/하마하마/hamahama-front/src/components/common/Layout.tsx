// import styled from "styled-components"
import { Footer } from "./Footer";
import { Header } from "./Header";

//컴포넌트를 넣을 수 있도록 property로 컴포넌트를 받도록
export const Layout = (props: { children: React.ReactNode }) => {
  const isAuthenticated = true; // 예시 값

  const logout = () => {
    // 로그아웃 로직을 구현해야 함
  };
  return (
    <div
      style={
        {
          // paddingTop: "120px"
        }
      }
    >
      <Header isAuthenticated={isAuthenticated} logout={logout} />
      <main
        style={{
          minHeight: "calc(100vh - 150px)",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
