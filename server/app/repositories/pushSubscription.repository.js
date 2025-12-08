/**
 * @file app/repositories/pushSubscription.repository.js
 * @descriptions pushSubscriptions repo
 * 251208 yoonhee init
 */

import db from '../models/index.js';

const {PushSubscription} = db;

async function upsert(t = null, data) {
  return await PushSubscription.upsert(data, {transaction: t});
}

export default {
  upsert,
}