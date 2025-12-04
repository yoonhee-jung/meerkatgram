/**
 * @file app/utils/social/social/kakao/util/js
 * @description 카카오 소셜 관련 유틸리티
 * 251204 v1.0.0 yoonhee init
 */

/**
 * 카카오 인가코드 발급 URL 생성
 * @return {string} URL
 */
function getAuthorizeURL() {
  const params = {
    client_id: process.env.SOCIAL_KAKAO_REST_API_KEY,
    redirect_uri: `${process.env.APP_URL}${process.env.SOCIAL_KAKAO_CALLBACK_URL}`,
    response_type: 'code',
    // prompt: 'login',
    //todo: 편의상 주석 처리. 나중에 다시 원래대로 만들기.
    //카카오 api 문서 보고 세팅하는 것임.. 마음대로 쓰면 안 됨
  };


  const queryParams = new URLSearchParams(params).toString();

  return `${process.env.SOCIAL_KAKAO_API_URL_AUTHORIZE}?${queryParams}`;
}

function getTokenRequest(code) {

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  };

  const params = {
  grant_type: 'authorization_code',
  client_id: process.env.SOCIAL_KAKAO_REST_API_KEY,
  redirect_uri: `${process.env.APP_URL}${process.env.SOCIAL_KAKAO_CALLBACK_URL}`,
  code: code
  };

  const searchParams = new URLSearchParams(params);


  return {headers, searchParams };
}


function getUserRequest(token) {
   const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  };

  const params = {
    secure_resource: true
  };

  const searchParams = new URLSearchParams(params);


  return {headers, searchParams };
}

function getLogoutRequest(id, token) {

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  };

  const params = {
    target_id_type: 'user_id',
    target_id: id
  };

  const searchParams = new URLSearchParams(params);


  return {headers, searchParams };

}

export default {

  getAuthorizeURL,
  getTokenRequest,
  getUserRequest,
  getLogoutRequest,
}