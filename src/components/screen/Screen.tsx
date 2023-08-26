import { Header, Footer, Nav, LeftSide } from "../common";

interface ScreenProps {
  children: React.ReactNode;
  header?: true | React.ReactNode;
  nav?: true | React.ReactNode;
  side?: true | React.ReactNode;
  footer?: true | React.ReactNode;
  fullSize?: boolean;
}

export function Screen({ children, header, nav, side, footer }: ScreenProps) {
  const isAuthenticated = true; // 예시 값

  const logout = () => {
    // 로그아웃 로직을 구현해야 함
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {header && typeof header === "boolean" ? (
        <Header isAuthenticated={isAuthenticated} logout={logout} />
      ) : (
        header
      )}
      {nav && typeof header === "boolean" ? <Nav /> : nav}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {side && typeof side === "boolean" ? <LeftSide /> : side}
        {children}
      </div>
      {footer && typeof footer === "boolean" ? <Footer /> : footer}
    </div>
  );
}
