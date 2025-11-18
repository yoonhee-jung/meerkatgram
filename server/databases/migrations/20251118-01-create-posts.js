/**
 * @file databases/migrations/20251118-02-create-posts.js
 * @description posts migration file
 * 251118 v1.0.0 yoonhee npm 초기화
 */

import { DataTypes } from "sequelize";

/**
 * up 마이그레이션 실행 > 호출, 스키마를 생성, 수정하는 영역 정의
*/

//테이블명
const tableName = 'posts';

//deleted_at 삭제되었다 인식 soft date 위한 컬럼.

//컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull:false,
    autoIncrement: true,
    comment: '게시글 PK',
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '유저 PK',
  },
  content: {
    field: 'content',
    type: DataTypes.STRING(200),
    allowNull: false,
    comment: '내용',
  },
  image: {
    field: 'image',
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null, //allowNull이 true면 defaultValue가 자동으로 null
    comment: '게시글 이미지',
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

//옵션 설정 설정 안 하면 default 그냥 됨
const options = {
  charset: 'utf8mb4', //테이블 문자셋 설정(이모지 지원)
  collate: 'utf8mb4_0900_ai_ci', //정렬 방식 설정(악센트 구분 안 하고 대소문자 구분 안 하겠다, 기본 설정)
  engine: 'InnoDB', //사용 엔진 설정
};

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

