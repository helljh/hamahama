import { useState, useRef } from "react";
import * as S from "./Header.styled";
import Sidebar from "../Side/Sidebar";
import { Search } from "../Search";
import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';
import axios from 'axios';
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
  
  const [authenticated, setAuthenticated] = useState(initialData.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  const [exist, setExist] = useState<boolean>(false);

  const outside = useRef<HTMLDivElement | null>(null);

  // const getBrandNameExists = useGetBrandNameExists();

  const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  }

  // useEffect(() => {
  //   const handlerOutside = (e: {target:any}) => {
  //     if (isSearchOpen && (!outside.current?.contains(e.target))) {
  //       setIsSearchOpen(true);
  //       setKeyword("");
  //     }
  //   };

  //   document.addEventListener("mousedown", handlerOutside, true);
  //   return () => {
  //     document.removeEventListener("mousedown", handlerOutside, true);
  //   };
  // }, [outside, isSearchOpen]);

  

  
  const toggleSide = () => {
    setIsOpen(true); 
  };
  

  const toggleBell = () => {
    setIsBellOpen(false);

    if (!isBellOpen) {
      alert("알림이 도착했습니다.");
    }
  };

  // useEffect(() => {
  //   getBrandNameExists(keyword).then((res)=>{
  //     setExist(res?.data);
  //   });
  // });

  const toggleSearch = () => {
    console.log("clicked");
    
    setIsSearchOpen(!isSearchOpen);
    // if(exist){
    //   navigate(`/coupons/${keyword}`);
    // }else{
    //   alert("해당 브랜드는 존재하지 않습니다")
    // }
  };

  const setInputValue = (letter: string, status: boolean) => {
    setKeyword(letter);
    setIsSearchOpen(status);
  }
  const baseUrl = "http://localhost:8088";

  const firebaseConfig = {
    apiKey: "AIzaSyC8gwrfFBYzj1VgFj4BbKqkpg8-eO_DncU",
    authDomain: "hamahama-sku20230818.firebaseapp.com",
    projectId: "hamahama-sku20230818",
    storageBucket: "hamahama-sku20230818.appspot.com",
    messagingSenderId: "97022055548",
    appId: "1:97022055548:web:8ad8c37b2af5c26a1f65f9",
    measurementId: "G-014B3WDR3L"
  };

function requestPermission(e: any){
  e.currentTarget.disabled = true;
  console.log("Requesting permission...");
  if(!("Notification" in window)){
      console.log("데스크톱 알림을 지원하지 않는 브라우저입니다.");
  }
  Notification.requestPermission().then((permission) => {
      if(permission === 'granted'){
          console.log("Notification permission granted.");

          const app = initializeApp(firebaseConfig);
          const messaging = getMessaging();

          console.log(messaging);

          getToken(messaging, {
              vapidKey: "BOfIF-8CVjIqkjkxh_hMij9KBMEbMVjoua-Ras7kKRvSutwP7GlFlC6__bMGdIyrQf-t1mQfxLXbQydpI7_eLfc",
          })
          .then(async(currentToken) => {
              if(currentToken){
                  console.log("current Token: " + currentToken);
                  
                  let sendData = JSON.stringify({
                      "email" : JSON.parse(localStorage.getItem("authToken") as string).userEmail,
                      "fcmToken" : currentToken,
                      "fcmStatus" : true,
                    });
                
                  await axios({
                      method:"POST",
                      url: baseUrl + "/api/user/saveFcmToken",
                      data: sendData,
                      headers: {"Content-type": "application/json"}
                    })
                    .then((res)=>{
                      console.log(res.data);
                    })
                    .catch((err)=>{
                      console.log(err);
                      console.log(err);
                    })
              }
              else{
                  console.log("No registration token available. Request permission to generate one.");

              }
          })
          .catch((err)=>{
              console.log("An error occurred while retrieving token" + err)
          })

      

      }else{
          console.log("Don't have permission");
      }
  })
}

  return (
    <S.Container>
      <Link to={"/main"}><S.Logo src={`${process.env.PUBLIC_URL}/img/header/logo.svg`} /></Link>
      <S.SearchBox >
      <S.InputWrapper>
        <S.Input 
        value={keyword}
        onChange={onChangeData}
        />
        <S.Button onClick={toggleSearch}>
          <S.SearchBtn
            src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
          />
        </S.Button>
        
      </S.InputWrapper>
      {isSearchOpen && (
        <S.SearchList >
          <Search screen={"header"} inputValue={setInputValue} keyword={keyword}/>
        </S.SearchList>
        )}
      </S.SearchBox>
      <S.SubWrapper>
        {!authenticated ? (
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
                setAuthenticated(!authenticated);
                const authToken = {
                  authToken: initialData.authToken,
                  refreshToken: initialData.refreshToken,
                  isAuthenticated : false,
                  email: initialData.email,
                }
                localStorage.setItem('authToken', JSON.stringify(authToken));
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
              onClick={requestPermission}
            />
          )}
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/fav.svg`}
            onClick={() => {
              navigate("/user/me/wish");
            }}
          />
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/profile.svg`}
            onClick={() => {
              navigate("/user/me");
            }}
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
