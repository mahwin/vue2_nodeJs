export default {
  appPort: 3000,
  secretKey: "adssadsadasdQLALFQqlㄹ123123213123ㅁㅇ늠ㄴ아ㅢㅁㄴ음나음닝ㅁㄴㅇ",
  database: {
    host: "데이타베이스 호스트",
    user: "데이타베이스 유저",
    password: "데이타베이스 비밀번호",
    port: 3306,
    database: "데이타베이스 이름",
  },

  cors: {
    origin: true,
    credentials: true,
  },

  jwt: {
    accessTokenExprice: "1m",
    refreshTokenExprice: "14d",
  },
};
