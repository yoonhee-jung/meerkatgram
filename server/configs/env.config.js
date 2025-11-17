/**
 * @file 파일의 경로 configs/env.config.js
 * @description 설명 환경에 따른 env 설정 파일
 * 251117 버전 v1.0.0 작업자 이름 보통 사번 yoonhee 다음에 간트 차트에서의 태스크 번호 같은 것을 적음 최초 생성
 * 260101 v1.1.1 yoonhee ..작업 ..
 */

import fs from 'fs';
import dotenv from 'dotenv';

const envFiles = [
  '.env.production',
  '.env.test',
  '.env'
];

let filePath = '';

// `envFiles` 루프: 해당 파일이 있으면 파일 경로 저장
// 예1) `.env.test, .env`가 있을 경우 최종적으로 `.env`를 셋팅
// 예2) `.env.test`만 있을 경우 최종적으로 `.env.test`를 셋팅
// 예3) `.env.production`, `.env.test`, `.env`가 있을 경우 최종적으로 `.env`를 셋팅
for (const file of envFiles) {
  if(fs.existsSync(file)) {
    filePath = file;
  }
}

//셋팅 된 filePath로 dotenv 설정
  dotenv.config({
    path: filePath,
    debug: filePath === '.env' ? true : false
    });

  console.log(`Loaded env: ${filePath}`);