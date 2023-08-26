//회원 조회
export interface GetUserDataRes {
  nickname: string;
  email: string;
  password: string;
}

//중복 확인
export interface GetRegisterNicknameRes {
  status: boolean; //true -> 가입 가능
}
