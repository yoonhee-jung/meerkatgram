import dayjs from 'dayjs';

/**
 * @file app/utils/cookie/cookie.util.js
 * @description Cookie Utility
 * 251115 v1.0.0 yoonhee init
 */



//private
/**
 * 
 * @param {import ("express").Response} res 
 * @param {string} cookieName 
 * @param {string} cookieValue 
 * @param {number} ttl 
 * @param {boolean} httpOnlyFlg 
 * @param {boolean} secureFlg 
 */

function setCookie(res, cookieName, cookieValue, ttl, httpOnlyFlg = true, secureFlg = false) {
  res.cookie(
    cookieName,
    cookieValue,
    {
      expires:dayjs().add(ttl, 'second').toDate(),
      httpOnly: httpOnlyFlg,
      secure: secureFlg,
      sameSite: 'none', //기본으로 none 세팅하기.. 
    }
  );

}

//쿠키에서 리프레시 토큰 쿠키를 설정
//public
/**
 * 
 * @param {import("express").Response}} res 
 * @param {string} refreshToken 
 */
function setCookieRefreshToken(res, refreshToken) {
  setCookie(
    res,
    process.env.JWT_REFRESH_TOKEN_COOKIE_NAME,
    refreshToken,
    parseInt(process.env.JWT_REFRESH_TOKEN_COOKIE_EXPIRY),
    true,
    true
  );
}

export default {
  setCookieRefreshToken,
}