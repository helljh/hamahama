import { useState, useEffect, useRef } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
import { Search } from "../Search";

import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export const Header = ({
  isAuthenticated,
  logout,
}: {
  isAuthenticated: boolean;
  logout: () => void;
}) => {              
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const initialData = JSON.parse(authToken as string);
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  const [inputKeyword, setInputKeyword] = useState<string>("");

  const outside = useRef<any>(null);

  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    if(e.currentTarget.value.length != 0) {
      setIsSearchOpen(true);
    }else{
      setIsSearchOpen(false);
    }
  }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handlerOutsie);
  //   return () => {
  //     document.removeEventListener("mousedown", handlerOutsie);
  //   };
  // });

  // const handlerOutsie = (e: any) => {
  //   if (outside.current && !outside.current.contains(e.target as Node)) {
  //     setIsSearchOpen(false);
  //   }
  // };

  
  const toggleSide = () => {
    setIsOpen(true); 
  };
  

  const toggleBell = () => {
    setIsBellOpen(false);

    if (!isBellOpen) {
      alert("알림이 도착했습니다.");
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if(inputKeyword.length !=0){
      navigate(`/coupons/${inputKeyword}`)
    }else{
      navigate(`/coupons/${keyword}`)
    }
   
  };

  const setInputValue = (x: string) => {
    setInputKeyword(x);
  }

  return (
    <S.Container>
      <Link to={"/main"}><S.Logo src={`${process.env.PUBLIC_URL}/img/header/logo.svg`} /></Link>
      <S.SearchBox>
      <S.InputWrapper>
        <S.Input 
        value={inputKeyword.length > 0 ? inputKeyword : keyword}
        onChange={onChangeData}
        />
        <S.Button onClick={toggleSearch}>
          <S.SearchBtn
            src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
          />
        </S.Button>
        
      </S.InputWrapper>
      {isSearchOpen && (
        <S.SearchList>
          <Search setInputValue={setInputValue} keyword={keyword}/>
        </S.SearchList>
        )}
      </S.SearchBox>
      <S.SubWrapper>
        {!initialData.isAuthenticated ? (
          <S.Auth>
            <S.Text
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </S.Text>
            <S.Text
              onClick={() => {
                navigate("/join");
              }}
            >
              회원가입
            </S.Text>
          </S.Auth>
        ) : (
          // 로그인 상태에 따라 렌더링
          <S.Auth>
            <S.Text
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              로그아웃
            </S.Text>
          </S.Auth>
        )}
        <S.IconSet>
          {isBellOpen ? null : (
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/bell.svg`}
              onClick={toggleBell}
            />
          )}
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/fav.svg`}
          />
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/profile.svg`}
          />
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/menu.svg`}
            onClick={toggleSide}
          />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </S.IconSet>
      </S.SubWrapper>
    </S.Container>
  );
};

export default Header;
