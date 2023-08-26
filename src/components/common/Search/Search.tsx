import * as S from "./Search.styled";

export function Search() {
  return (
    <S.Container>
      <S.List>
        {/* 여기에 실제 목록 아이템을 추가하세요 */}
        {data.map((item, index) => (
          <S.ListItem key={index}>{item}</S.ListItem>
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
