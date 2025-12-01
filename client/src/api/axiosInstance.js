import axios from 'axios';

//axios 인스턴스 생성

const axiosInstance = axios.create({
  baseURL: '', //기본 URL (axios 호출 시 가장 앞에 자동으로 연결하여 동작)
  headers: {
    'Content-Type': 'application/json',
  }, //기본 json 형태..
  //크로스 도메인(서로다른 도메인)에 요청 보낼 때 credential 정보를 담아서 보낼지 여부
  //credentail정보: 1.쿠키 2.헤더 authorization 항목
  widthCredentials: true,
});

export default axiosInstance;

//app1.green-meerkat.kro.kr 배포할 때..