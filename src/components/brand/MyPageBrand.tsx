import { useState, useEffect } from "react";
import { useGetCategoryBrandList , useGetLikeBrand} from "../../hooks";
import { GetBrandDataRes } from "../../services";
import { tempBrandData } from "./";
import * as S from "./Brand.styled";

export function MyPageBrand({ order, btnStatus}: { order: string, btnStatus: boolean }) {
  const groupSize = 5; //분할 개수
  const [currentPage, setCurrentPage] = useState(0);
  const [brandData, setBrandData] = useState<GetBrandDataRes[]>([]);
  const [groups, setGroups] = useState<GetBrandDataRes[][]>([]);

  console.log("현재 btnstatus: " + btnStatus);
  const getCategoryBrandList = useGetCategoryBrandList();
  const getLikeBrandList = useGetLikeBrand();

  const mapDataInGroups = (groupSize: number, brandData: GetBrandDataRes[]) => {
    const groups = [];
    for (let i = 0; i < brandData.length; i += groupSize) {
      groups.push(brandData.slice(i, i + groupSize));
    }
    return groups;
  };

  useEffect(() => {
    if (order === "random") {
      const groups = mapDataInGroups(groupSize, tempBrandData.flat());
      setGroups(groups);
    }else if(order === "likeBrand") {
      getLikeBrandList().then((res) => {
        console.log(res);
        setBrandData(res as GetBrandDataRes[]);
        const groups = mapDataInGroups(groupSize, brandData);
      setGroups(groups);
      })

    }else {
      getCategoryBrandList(order).then((res) => {
        setBrandData(res);
        if (brandData) {
          const groups = mapDataInGroups(groupSize, brandData.flat());
          setGroups(groups);
        } else {
          const groups = mapDataInGroups(groupSize, tempBrandData.flat());
          setGroups(groups);
          alert("쿠폰 정보가 없습니다.");
        }
      });
    }
  }, [brandData?.length]);

  const currentGroup = groups[currentPage];

  return (
    <S.Container>
      
      {!btnStatus  ? groups.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandDataRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
        </S.BrandGroup>
      )) :
      <S.BrandGroup>
          {currentGroup?.map((brand: GetBrandDataRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
      </S.BrandGroup>}
      {btnStatus == true && brandData.length != 0 && <S.ButtonBox>
        <S.Button
        //currentPage는 boolean(고정), true일 경우 이전 버튼으로 바뀌어야 함
        src={`${process.env.PUBLIC_URL}/img/coupon/next_Button.png`}
        active={true} //버튼 존재 여부(고정)
        onClick={() => {
          if(currentPage === 0)
            setCurrentPage(1);
          else setCurrentPage(0);
        }} //버튼 클릭 시 페이지 번호 바뀜
      />
      </S.ButtonBox>}
    </S.Container>
  );
}
