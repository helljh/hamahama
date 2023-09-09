import * as S from "./Search.styled";
import {useGetSearchBrandList} from "../../../hooks";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { GetBrandDataRes } from "../../../services";


export function Search({keyword, setInputValue, like} : { like:boolean, keyword:string, setInputValue: Function}) {

  const getSearchBrandList = useGetSearchBrandList();
  const [data, setData] = useState<GetBrandDataRes[] | undefined>([]);

  const navigate = useNavigate();
  useEffect(() => {
    SearchBrandList();
  },[keyword])

  const SearchBrandList = async() => {
    await getSearchBrandList(keyword).then((res) => {
      console.log(res);
      setData(res);
    })

  }
  console.log(like);

  return (
    <S.Container style={like ? { width: "115px"} : {width:"500px"}}>
      <S.List>
        {/* 여기에 실제 목록 아이템을 추가하세요 */}
        {data?.map((item, index) => (
          <S.ListItem onClick={() => {
            if(like){
              navigate(`/brand/search/${item.brandName}`)
            }else{
              navigate(`/coupons/${item.brandName}`)
            }
            
          }} key={index}>{item.brandName}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}

// 임시 데이터
const data = [
  "아이템 1",
  "아이템 2",
  "아이템 3",
  "아이템 4",
  "아이템 5",
  "아이템 6",
  "아이템 7",
  "아이템 8",
  "아이템 9",
  "아이템 10",
  "아이템 11",
  "아이템 12",
  // ... 추가 아이템
];
