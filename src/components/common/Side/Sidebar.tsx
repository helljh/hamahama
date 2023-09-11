import React, { useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import * as S from "./Sidebar.styled";

type MenuItem = Required<MenuProps>["items"][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// 카테고리와 번호 매핑
const categoryNumbers: Record<string, number> = {
  식당: 1,
  카페: 2,
  여행: 3,
  취미: 4,
  옷: 5,
  신발: 6,
  화장품: 7,
  정보수정: 8,
  마이페이지: 9,
  쿠폰등록: 10,
};

const items: MenuItem[] = [
  getItem("카테고리", "sub1", null, [
    getItem("음식", "sub3", null, [
      getItem("식당", "1"), 
      getItem("카페", "2")
    ]),
    getItem("문화생활", "sub5", null, [
      getItem("여행", "3"),
      getItem("취미", "4"),
    ]),
    getItem("쇼핑", "sub4", null, [
      getItem("옷", "5"),
      getItem("신발", "6"),
      getItem("화장품", "7"),
    ]),
  ]),
  getItem("내 정보", "sub2", null, [
    getItem("정보수정", "8"),
    getItem("마이페이지", "9"),
    getItem("쿠폰등록", "10"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2"];

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const navigate = useNavigate();

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const getCategoryNameByNumber = (
    categoryNumber: number
  ): string | undefined => {
    for (const [categoryName, number] of Object.entries(categoryNumbers)) {
      if (number === categoryNumber) {
        return categoryName;
      }
    }
    return undefined;
  };

  const menuItem = (key: React.Key) => {
    const categoryNumber = parseInt(key as string, 10); // 키 값을 정수로 변환
    const categoryName = getCategoryNameByNumber(categoryNumber);
    if (categoryName) {
      //alert(categoryName);
      //<Link to={"/coupon/" + categoryName} />;
      if(categoryName === "마이페이지"){
        navigate("/user/me");
      }
      else if(categoryName === "정보수정"){
        navigate("/user/help/profile");
      }else if(categoryName === "쿠폰등록"){
        navigate("/coupon/registration/save");
      }else{
        navigate(`/${categoryName}/brands`);
        console.log("Clicked item category:", categoryName);
      }
      
      // 다른 원하는 작업 수행
    } else {
      console.log("카테고리명을 찾을 수 없습니다.");
    }
  };

  return (
    <S.SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        onClick={({ key }) => menuItem(key)}
        items={items}
      />
    </S.SideBarWrap>
  );
}

export default Sidebar;
