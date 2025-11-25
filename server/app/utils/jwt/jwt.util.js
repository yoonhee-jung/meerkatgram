/**
 * @file /app/utils/jwt/jwt.util.js
 * @description jwt 유틸리티
 * 251125 v1.0.0 yoonhee init
 */

import jwt from 'jsonwebtoken';


/**
 * @param {{}} payload
 * @param {number} ttl
 * @returns {string} jwt
 */

//private
function generateToken(payload, ttl) {
  //옵션 설정
  const options = {
    algorithm: process.env.JWT_ALGORITHM,
    noTimestamp: false, //payload.iat설정(iat=issueddate 토큰 발금 시간)
    expiresIn: ttl, //payload.exp설정(토큰 만료 시간) 밀리 초단위
    issuer: process.env.JWT_ISSUER//payload.issuer설정(토큰 발급자)
  }

  //토큰 생성
  return jwt.sign(payload, process.env.JWT_SECRET);
}


/**
 * 액세스 토큰 생성
 * @param {import("../../models/index.js").User} user 
 * @returns {string} JWT
 * 
 */
//public
function generateAccessToken(user) {
  //페이로드 설정
  const payload = {
    sub: user.id, //payload.sub set (value:user pk)
    role: user.role //payload.role set(value:user role)
  }

  //액세스 토큰 생성
  return generateToken(payload, parseInt(process.env.JWT_ACCESS_TOKEN_EXPIRY));
}

/**
 * 리프레시 토큰 생성
 * @param {import("../../models/index.js").User} user 
 * @returns {string} JWT
 * 
 */
//public
function generateRefreshToken(user) {
  //페이로드 설정
  const payload = {
    sub: user.id, //payload.sub set (value:user pk)
  }

  //리프레시 토큰 생성
  return generateToken(payload, parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRY));
}

// 내보내기

export default {
  generateAccessToken, generateRefreshToken,
};