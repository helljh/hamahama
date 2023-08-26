import { useState, useEffect } from "react";
import { useGetCategoryBrandList } from "../../hooks";
import { GetBrandDataRes } from "../../services";
import { tempBrandData } from "./";
import * as S from "./Brand.styled";

export function MyPageBrand({ order }: { order: string }) {
  const groupSize = 5; //분할 개수
  const [brandData, setBrandData] = useState<GetBrandDataRes[] | undefined>([]);
  const [groups, setGroups] = useState<GetBrandDataRes[][]>([]);

  const getCategoryBrandList = useGetCategoryBrandList();

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
    } else {
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
  }, []);

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandDataRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
        </S.BrandGroup>
      ))}
    </S.Container>
  );
}
