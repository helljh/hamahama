import { axiosInstance } from "../../apis";
import { GetBrandDataRes } from "../../services";
import { tempBrandData } from "../../components";

//브랜드 상세 조회
export function useGetBrand() {
  const email = JSON.parse(localStorage.getItem("authToken") as string).userEmail
  const getBrand = async (brandName: string) => {
    try {
      const res = await axiosInstance.get<GetBrandDataRes>(
        `/brand/${email}/${brandName}`,
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getBrand;
}

//모든 브랜드 조회
export function useGetBrandList() {
  const getBrandList = async () => {
    try {
      const res: GetBrandDataRes[] = await axiosInstance.get(
        "brand/brandList",
        {
          headers: { "Content-type": "application/json" },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return getBrandList;
}

//카테고리에 대한 브랜드 목록
export function useGetCategoryBrandList() {
  const getCategoryBrandList = async (
    category: string
  ): Promise<GetBrandDataRes[]> => {
    try {
      const response = await axiosInstance.get(`/brand?category=${category}`);
      if (response.data) {
        console.log(response.data);
        console.log("브랜드 목록" + response.data);
        return response.data;
      } else return tempBrandData;
    } catch (error) {
      console.log(error);
      return tempBrandData;
    }
  };
  return getCategoryBrandList;
}

//브랜드 검색 리스트
export function useGetSearchBrandList() {
  const getSearchBrandList = async (searchKeyword: string) : Promise<GetBrandDataRes[] | undefined> => {
    try {
      const res = await axiosInstance.get(
        `brand/search?keyword=${searchKeyword}`
      );
     if(res){
      return res.data;
     }
    } catch (error) {
      console.log(error);
    }
  };
  return getSearchBrandList;
}




