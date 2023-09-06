import { useState, useEffect } from "react";
import { useGetCategoryBrandList } from "../../hooks";
import { GetBrandDataRes } from "../../services";
import * as S from "./Brand.styled";
import { useNavigate, Link } from "react-router-dom";

export function Brand({ category }: { category: string | null }) {
  const groupSize = 5;
  const [brandData, setBrandData] = useState<GetBrandDataRes[]>([]);
  const [groups, setGroups] = useState<GetBrandDataRes[][]>([]);
  const navigate = useNavigate();
  const getCategoryBrandList = useGetCategoryBrandList();

  useEffect(() => {
    const getBrands = async () => {
      if (!category) {
        alert("잘못된 경로입니다.");
        navigate("/home");
        return;
      }

      const res = await getCategoryBrandList(category);
      setBrandData(res);
      

      const groupedData = mapDataInGroups(groupSize, res);
      setGroups(groupedData);
    };

    getBrands();
  }, [category, navigate]);

  const mapDataInGroups = (groupSize: number, brandData: GetBrandDataRes[]) => {
    const groups = [];
    for (let i = 0; i < brandData.length; i += groupSize) {
      groups.push(brandData.slice(i, i + groupSize));
    }
    return groups;
  };

  return (
    <S.Container>
      {groups.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandDataRes, idx: number) => (
            <Link to={`/coupons/${brand.brandName}`}><S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand></Link>
          ))}
        </S.BrandGroup>
      ))}
    </S.Container>
  );
}