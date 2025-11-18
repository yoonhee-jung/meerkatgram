/**
 * @file databases/migrations/20251118-06-alter-notifications-is_read.js
 * @description notiifcations-is_read 알터문
 * 251118 v1.0.0 yoonhee npm 초기화
 */

import { DataTypes } from "sequelize";

/**
 * up 마이그레이션 실행 > 호출, 스키마를 생성, 수정하는 영역 정의
*/

//테이블명
const tableName = 'notifications';

//deleted_at 삭제되었다 인식 soft date 위한 컬럼.

//키명, 컬럼명
const key = 'is_read';

//컬럼 정의
const upAttributes = {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false,
  comment: '읽음여부..',
  };

const downAttributes = {
  type: DataTypes.TINYINT(1),
  allowNull: false,
  defaultValue: 0,
  comment: '읽음 여부',
};

//항상 롤백할 수 있는 코드까지 같이 적어줘야 함

//옵션 설정 설정 안 하면 default 그냥 됨


export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(tableName, key, upAttributes);
  },

  async down (queryInterface, Sequelize) {
    /**
     * down 마이그레이션 롤백 > 호출, undo처리하고 싶을 때(스키마 제거, 수정) 작성하는 영역
     */
    await queryInterface.changeColumn(tableName, key, downAttributes);
  }
};