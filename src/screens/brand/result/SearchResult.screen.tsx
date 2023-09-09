import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { LeftSide, Screen } from "../../../components";
import {useGetBrand, useSetBrandLike} from "../../../hooks";
import { GetBrandDataRes } from "../../../services";
import * as S from "../../user/me/main";
import * as C from "./SearchResult.styled";


export function SearchResultScreen() {
  const { keyword } = useParams();
  const [brand, setBrand] = useState<GetBrandDataRes | undefined>(undefined);
  const [favor, setFavor] = useState<boolean>(false); //즐겨찾기 여부

  const getBrandByName = useGetBrand();
  const setBrandLikeById = useSetBrandLike();

  useEffect(() => {
    getBrandByName(keyword as string).then((res)=>{
      console.log(res);
      setBrand(res as GetBrandDataRes);
      setFavor(res?.likeStatus as boolean);
    })
  }, [keyword]);

  if (!brand) {
    // 쿠폰 데이터가 아직 로드되지 않은 경우 로딩 스피너 또는 메시지를 표시할 수 있습니다.
    return <div>Loading...</div>;
  }

  const setBrandLike = () => {
    setBrandLikeById(brand.brandId).then((res)=>{
      if(res.responseCode === 200){
        setFavor(true);
      }else{
        setFavor(false);
      }
    })
  }

  return (
    <Screen header={true} nav={true} footer={true}>
      <S.Layout>
        <LeftSide />
        <S.MyCoupon>
          <div style={{ height: "100px" }}></div>
          <S.TextGroup>
            <S.Text>브랜드 찾기</S.Text>
            <C.SearchContainer>
              <C.InputContainer>
                <C.Input />
              </C.InputContainer>
              <C.SearchButton
                alt="Search_Icon"
                src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
              />
            </C.SearchContainer>
          </S.TextGroup>
          <S.Line />
          <C.BrandContainer>
            <C.BrandInfo>
              <C.BrandImg src={`${process.env.PUBLIC_URL}${brand.brandImgUrl}`}/>
              <S.Text>{brand.brandName}</S.Text>
            </C.BrandInfo>
            <C.Button favor={favor} onClick={setBrandLike}>{favor ? "해제하기" : "추가하기"}</C.Button>
          </C.BrandContainer>
        </S.MyCoupon>
      </S.Layout>
    </Screen>
  );
}
