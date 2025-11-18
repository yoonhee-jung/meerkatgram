/**
 * @file databases/migrations/20251117-01-create-users.js
 * @description users migration file
 * 251117 v1.0.0 yoonhee 
 */

import { DataTypes } from "sequelize";

/**
 * up 마이그레이션 실행 > 호출, 스키마를 생성, 수정하는 영역 정의
*/

//테이블명
const tableName = 'users';

//deleted_at 삭제되었다 인식 soft date 위한 컬럼.

//컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull:false,
    autoIncrement: true,
    comment: '유저 PK',
  },
  email: {
    field: 'email',
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    comment: '이메일(로그인ID)',
  },
  password: {
      field: 'password',
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '비밀번호',
  },
  nick: {
    field: 'nick',
    type: DataTypes.STRING(15),
    //varchar > 가변길이문자열 char > 고정길이문자열
    allowNull: false,
    unique: true,
  },
  provider: {
    field: 'provider',
    type: DataTypes.STRING(10),
    allowNull: false,
    comment: '로그인 제공자(NONE, KAKAO, GOOGLE)',
  },
  role: {
    field: 'role',
    type: DataTypes.STRING(10),
    allowNull: false,
    comment: '유저 권한(NORMAL, SUPER..)',
  },
  profile: {
    field: 'profile',
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: '유저 프로필',
  },
  refreshToken: {
    field: 'refresh_token',
    type: DataTypes.STRING(255),
    allowNull: true,  //allowNull이 true면 defaultValue가 자동으로 null
    comment: '리프레시 토큰',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE(),
    allowNull: true,
    comment: '작성일',
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE(),
    allowNull: true,
    comment: '수정일',
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE(),
    allowNull: true,
    comment: '삭제일',
  },
  };

//옵션 설정
const options = {
  charset: 'utf8mb4', //테이블 문자셋 설정
  collate: 'utf8mb4_bin', //정렬 방식 설정(영어 대소문자 구분 방식 정렬)
  engine: 'InnoDB' //사용 엔진 설정
}

export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, attributes, options);
  },

  async down (queryInterface, Sequelize) {
    /**
     * down 마이그레이션 롤백 > 호출, undo처리하고 싶을 때(스키마 제거, 수정) 작성하는 영역
     */
    await queryInterface.dropTable(tableName);

  }
};

