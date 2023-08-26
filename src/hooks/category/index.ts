import { categoryNumbers } from "../../services";

//카테고리명을 번호로 변환
//선택한 카테고리의 번호를 받아 해당 카테고리명을 반환
//categoryNumbers를 이용하여 번호에 해당하는 카테고리명을 찾음
export function useGetCategory() {
  const getCategoryNameByNumber = (
    categoryNumber: number
  ): string | undefined => {
    for (const [categoryName, number] of Object.entries(categoryNumbers)) {
      if (number === categoryNumber) {
        return categoryName;
      }
    }
    return undefined; // 일치하는 번호를 찾지 못한 경우
  };
  return getCategoryNameByNumber;
}
